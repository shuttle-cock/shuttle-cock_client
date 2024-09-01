import { StorageController } from '../../modules/storage';

export class SessionService {
	private static instance?: SessionService;
	public static STORAGE_KEY = 'STATE';

	private storedState: Map<string, any> = new Map();
	private sessionStore = StorageController.getInstance('app');

	get data() {
		return new Map(this.storedState);
	}

	private constructor() {
		this.loadState();
	}

	public static getInstance() {
		if (!SessionService.instance) {
			SessionService.instance = new SessionService();
		}

		return SessionService.instance;
	}

	private loadState() {
		const savedState = this.sessionStore.get(SessionService.STORAGE_KEY);
		if (savedState && typeof savedState === 'object') {
			this.storedState = new Map(Object.entries(savedState));
		}
	}

	private saveState() {
		this.sessionStore.set(SessionService.STORAGE_KEY, Object.fromEntries(this.storedState.entries()));
	}

	public getStoredData(key: string) {
		return this.storedState.get(key);
	}

	public setStoreData(dataSet: { key: string; value: any }[]) {
		dataSet.forEach(({ key, value }) => this.storedState.set(key, value));
		this.saveState();
	}

	public removeStoreData(key: string) {
		this.storedState.delete(key);
		this.saveState();
	}

	public clear(excludeKeys: string[] = []) {
		if (excludeKeys.length > 0) {
			const newState = new Map<string, any>();
			this.storedState.forEach((value, key) => {
				if (excludeKeys.includes(key)) {
					newState.set(key, value);
				}
			});
			this.storedState = newState;
		} else {
			this.storedState.clear();
		}
		this.saveState();
	}
}

export const SessionInstance = SessionService.getInstance;
