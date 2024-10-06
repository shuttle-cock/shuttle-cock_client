import { Text } from '@components/common';
import * as styles from './ShuttleTimetable.css';
import type { ShuttleSchedule } from '../MoreMenu/MoreMenu';

type ShuttleTimetableProps = {
	schedule: ShuttleSchedule;
};

export default function ShuttleTimetable({ schedule }: ShuttleTimetableProps) {
	const { routes, title } = schedule;

	return (
		<div className={styles.container}>
			<Text size="r" weight="medium" color="grayscale.G800">
				{title}
			</Text>
			<div className={styles.routesContainer}>
				{routes.map((route, routeIndex) => (
					<div key={routeIndex} className={styles.routeContent}>
						<div className={styles.routeHeader}>
							<Text size="r" weight="medium">
								{route.type}
							</Text>
							<Text className={styles.directionText} size="s" color="grayscale.G500">
								{route.direction}
							</Text>
						</div>
						{route.times.map(({ time, label, note }, timeIndex) => {
							const timeBadge = styles.timeBadge({ color: timeIndex === route.times.length - 1 ? 'gray' : 'primary' });
							return (
								<div key={timeIndex} className={styles.timeItem}>
									<Text className={styles.timeText} size="m" weight="medium">
										{label && <div className={timeBadge}>{label}</div>}
										{time}
									</Text>
									{note && (
										<Text size="m" color="grayscale.G400">
											{note}
										</Text>
									)}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}
