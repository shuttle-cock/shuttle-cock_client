import { useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '../../../../constants/router';
import { SessionInstance, loadUserInfo } from '../../../../services/storageService';
import { Button, Text } from '../../../common';
import * as styles from './UserInfo.css';


export default function UserInfo() {
	const navigate = useNavigate();
	const { email, name, picture } = loadUserInfo();
	
	const handleLogout = () => {
		SessionInstance().clearAll();
		navigate(APP_ROUTES.LOGIN, { replace: true });
		/** @TODO 임시: 세션컨트롤러 비동기 상태처리 완료 후 리팩토링 작업 */
		window.location.reload();
	};

	return (
		<div className={styles.container}>
			<div className={styles.userInfo}>
				<img className={styles.userAvatar} src={picture} alt={email} />
				<div className={styles.userInfoTextGroup}>
					<Text size="r" weight="medium">
						{name}
					</Text>
					<Text size="s" color="grayscale.G400">
						{email}
					</Text>
				</div>
			</div>
			<Button color="gray" variant="outline" onClick={handleLogout}>
				로그아웃
			</Button>
		</div>
	);
}
