/** 애플리케이션 라우트 목록 */
export const APP_ROUTES = {
	ROOT: '/',
	SHUTTLE_BUS: '/shuttle_bus',
	VILLAGE_BUS: '/village_bus',
	COMMUNITY: '/community'
} as const;

/** 애플리케이션 라우트 타입 */
export type AppRoutesType = ValueOf<typeof APP_ROUTES>;