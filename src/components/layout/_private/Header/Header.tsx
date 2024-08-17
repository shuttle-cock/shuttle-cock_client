import { Icon } from '../../../common';
import * as styles from './Header.css';
import logo from '/logo.png';

export default function Header() {
	return (
		<div className={styles.container}>
			<img src={logo} alt="Logo" className={styles.logo} />
			<Icon name="more_l" className={styles.moreIcon} />
		</div>
	);
}
