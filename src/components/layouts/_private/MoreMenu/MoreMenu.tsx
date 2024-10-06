import { Icon, Text } from '@components/common';
import ShuttleTimetable from '../ShuttleTimetable';
import UserInfo from '../UserInfo';
import * as styles from './MoreMenu.css';

export type ShuttleSchedule = {
	title: string;
	routes: {
		type: string;
		direction: string;
		times: { label?: string; time: string; note?: string }[];
	}[];
};

/**
 * 일반 셔틀 운행시간 데이터
 * @Todo 임시 데이터, 추후 back-end에서 데이터로 변경
 */
const REGULAR_SCHEDULE: ShuttleSchedule = {
	title: '셔틀 운행시간',
	routes: [
		{
			type: '출근',
			direction: '고덕역 → 회사 앞',
			times: [
				{ label: '첫차', time: 'AM 08:00' },
				{ time: 'AM 08:20' },
				{ time: 'AM 08:40' },
				{ time: 'AM 09:00' },
				{ label: '막차', time: 'AM 09:20 ~ 09:30' }
			]
		},
		{
			type: '퇴근',
			direction: '회사 앞 → 고덕역',
			times: [
				{ label: '첫차', time: 'PM 17:30' },
				{ time: 'PM 17:50' },
				{ time: 'PM 18:10' },
				{ time: 'PM 18:30' },
				{ label: '막차', time: 'PM 19:10 ~ 19:20' }
			]
		}
	]
};

/**
 * 패밀리데이 셔틀 운행시간 데이터
 * @Todo 임시 데이터, 추후 back-end에서 데이터로 변경
 */
const FAMILY_DAY_SCHEDULE: ShuttleSchedule = {
	title: '패밀리데이 운행시간',
	routes: [
		{
			type: '퇴근',
			direction: '회사 앞 → 고덕역',
			times: [
				{ label: '첫차', time: 'PM 16:10', note: '(1차)' },
				{ time: 'PM 16:30', note: '(2차)' },
				{ time: 'PM 16:50', note: '(3차)' },
				{ time: 'PM 17:10', note: '(4차)' },
				{ time: 'PM 17:30', note: '(5차)' },
				{ label: '막차', time: 'PM 17:50', note: '(6차)' }
			]
		}
	]
};

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
