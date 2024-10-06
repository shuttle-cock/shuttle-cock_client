import { ApiService } from '../__private__';
import type { BusRouteInfo, BusRouteList } from './bus.model';

class BusApiService extends ApiService {
	constructor() {
		super('/data');
	}

	public async getRouterInfo(busRouteId: number) {
		return this.get<BusRouteInfo>(`routeInfo/${busRouteId}.json`);
	}

	public async getRouteList(busRouteId: number) {
		return this.get<BusRouteList>(`routeList/${busRouteId}.json`);
	}
}

export const busApiService = new BusApiService();
