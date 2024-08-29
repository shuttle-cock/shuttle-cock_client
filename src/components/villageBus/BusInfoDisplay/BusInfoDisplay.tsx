import { Icon } from '../../common';
import * as styles from './BusInfoDisplay.css';

type BusInfoDisplayProps = {
	busLabel: string;
	departureLocation: string;
	timeLeft: string;
};

export default function BusInfoDisplay({ busLabel, departureLocation, timeLeft }: BusInfoDisplayProps) {
	return (
		<div className={styles.container}>
			<div className={styles.busLabel}>{busLabel}</div>
			<div className={styles.timeLeftContent}>
				<Icon name="bus_m" color="primary.B200" />
				<span className={styles.timeLeftText}>{timeLeft}분 전</span>
			</div>
			<div className={styles.departureLocationContent}>
				<Icon name="location_s" />
				<span className={styles.departureLocationText}>{departureLocation}에서 출발</span>
			</div>
		</div>
	);
}
