import Icon from '../../common/Icon';
import * as styles from './NotificationBar.css';

type NotificationBarProps = {};

export default function NotificationBar({}: NotificationBarProps) {
	return (
		<div className={styles.container}>
			<a href="/" className={styles.link}>
				<Icon name="announcement_m" className={styles.announce} />
				<div className={styles.title}>공지</div>
				<div className={styles.content}>셔틀 미운행</div>
				<Icon name="arrow_forward_right_l" className={styles.forward} />
			</a>
		</div>
	);
}
