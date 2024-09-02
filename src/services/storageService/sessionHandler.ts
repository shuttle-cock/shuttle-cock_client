import { SessionInstance } from './SessionService';

const sessionInstance = SessionInstance();

export type UserInfo = {
	email: string;
	name: string;
	picture: string;
	role: string;
	userId: number;
};

export const SESSION_STORE_KEY = {
	EMAIL: 'EMAIL',
	NAME: 'NAME',
	PICTURE: 'PICTURE',
	ROLE: 'ROLE',
	USER_ID: 'USER_ID'
} as const;

export const saveUserInfo = (userInfo: UserInfo) => {
	sessionInstance.setStoreData([
		{ key: SESSION_STORE_KEY.EMAIL, value: userInfo.email },
		{ key: SESSION_STORE_KEY.NAME, value: userInfo.name },
		{ key: SESSION_STORE_KEY.PICTURE, value: userInfo.picture },
		{ key: SESSION_STORE_KEY.ROLE, value: userInfo.role },
		{ key: SESSION_STORE_KEY.USER_ID, value: userInfo.userId }
	]);
};

export const loadUserInfo = () => {
	return {
		email: sessionInstance.getStoredData(SESSION_STORE_KEY.EMAIL),
		name: sessionInstance.getStoredData(SESSION_STORE_KEY.NAME),
		picture: sessionInstance.getStoredData(SESSION_STORE_KEY.PICTURE),
		role: sessionInstance.getStoredData(SESSION_STORE_KEY.ROLE),
		userId: sessionInstance.getStoredData(SESSION_STORE_KEY.USER_ID)
	};
};

export const removeUserInfo = () => {
	sessionStorage.removeItem(SESSION_STORE_KEY.EMAIL);
	sessionStorage.removeItem(SESSION_STORE_KEY.NAME);
	sessionStorage.removeItem(SESSION_STORE_KEY.PICTURE);
	sessionStorage.removeItem(SESSION_STORE_KEY.ROLE);
	sessionStorage.removeItem(SESSION_STORE_KEY.USER_ID);
};
