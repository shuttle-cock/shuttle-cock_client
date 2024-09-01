type StoreData = {
	[key: string]: any;
};

function isEmpty(value: any) {
	return value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0);
}

export class StorageController {
	private static instances: Map<string, StorageController> = new Map();
	private items: StoreData;

	private constructor(
		private rootKey: string,
		private storage: Storage = sessionStorage
	) {
		this.items = this.loadItems();
	}

	public static getInstance(rootKey = 'app', storage?: Storage) {
		if (!StorageController.instances.has(rootKey)) {
			StorageController.instances.set(rootKey, new StorageController(rootKey, storage));
		}

		return StorageController.instances.get(rootKey)!;
	}

	private loadItems() {
		const defaultItems: StoreData = {};
		const storedItems = this.storage.getItem(this.rootKey);

		try {
			return storedItems ? JSON.parse(storedItems) : defaultItems;
		} catch (error) {
			console.error('Failed to parse stored items:', error);
			return defaultItems;
		}
	}

	private saveItems() {
		this.storage.setItem(this.rootKey, JSON.stringify(this.items));
	}

	public get(key: keyof StoreData) {
		return isEmpty(this.items[key]) ? undefined : this.items[key];
	}

	public has(key: keyof StoreData) {
		return !isEmpty(this.items[key]);
	}

	public all() {
		return { ...this.items };
	}

	public set(key: keyof StoreData, value: any) {
		if (!isEmpty(value)) {
			this.items[key] = value;
			this.saveItems();
		}
	}

	public remove(key: keyof StoreData) {
		delete this.items[key];
		this.saveItems();
	}

	public clear() {
		this.storage.removeItem(this.rootKey);
	}
}
