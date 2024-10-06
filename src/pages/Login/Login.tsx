import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { saveUserInfo } from '@services/storageService';
import * as styles from './Login.css';
import logo from '/logo.png';

export default function Login() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const queryData = {
			code: params.get('code'),
			message: params.get('message'),
			data: params.get('data')
		};

		if (queryData.code === '200' && queryData.message === 'OK' && queryData.data) {
			try {
				const userInfo = JSON.parse(decodeURIComponent(queryData.data));
				saveUserInfo(userInfo);
				navigate('/shuttle_bus');
			} catch (error) {
				console.error('Error parsing data:', error);
			}
		} else {
			// TODO: 실패 동작 추가
		}
	}, [location.search]);

	const handleLogin = () => {
		window.location.assign('/api/v1/oauth2/authorization/google');
	};

	return (
		<div className={styles.container}>
			<img src={logo} alt="Logo" className={styles.logo} />
			<button className={styles.button} onClick={handleLogin}>
				Google 로그인
			</button>
		</div>
	);
}
