import { FAMILY_DAY_SCHEDULE, REGULAR_SCHEDULE } from '../../../../constants/shuttleSchedules';
import { Icon, Text } from '../../../common';
import ShuttleTimetable from '../ShuttleTimetable';
import UserInfo from '../UserInfo';
import * as styles from './MoreMenu.css';

type MoreMenuProps = {
	onClose: () => void;
};

export default function MoreMenu({ onClose }: MoreMenuProps) {
	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<Text tag="h4" size="m" weight="medium">
					더보기
				</Text>
				<Icon className={styles.cancelIcon} name="cancel_l" onClick={onClose} />
			</header>
			<UserInfo />
			<div className={styles.contents}>
				<ShuttleTimetable schedule={REGULAR_SCHEDULE} />
				<ShuttleTimetable schedule={FAMILY_DAY_SCHEDULE} />
			</div>
		</section>
	);
}
