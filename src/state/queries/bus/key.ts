export const busKeys = {
	all: ['bus'] as const,
	routerInfo: () => [...busKeys.all, 'router-info'] as const,
	routerList: () => [...busKeys.all, 'router-list'] as const
};
