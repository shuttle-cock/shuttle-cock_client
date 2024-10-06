import { useQuery } from '@tanstack/react-query';

import { busApiService } from '../../../services/apiService';
import { busKeys } from './key';

export const useGetBusRouterInfo = (busRouteId: number) => {
	return useQuery({
		queryKey: busKeys.routerInfo(),
		queryFn: async () => {
			const response = await busApiService.getRouterInfo(busRouteId);
			return response.data;
		}
	});
};

export const useGetBusRouterList = (busRouteId: number) => {
	return useQuery({
		queryKey: busKeys.routerList(),
		queryFn: async () => {
			const response = await busApiService.getRouteList(busRouteId);
			return response.data;
		}
	});
};
