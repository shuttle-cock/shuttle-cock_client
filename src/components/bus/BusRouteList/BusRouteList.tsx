import { Icon, Text } from '@components/common';
import { BusRoute } from '@services/apiService';
import * as styles from './BusRouteList.css';

type BusRouteListProps = {
	routerList: BusRoute[];
	selectedMenu: string;
};

export default function BusRouteList({ routerList, selectedMenu }: BusRouteListProps) {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.locationLineWrapper}>
					<Icon name="bus_state_temp_m" className={styles.busState} />
					<div className={styles.locationLine}>
						{routerList.map(({ arsId }, idx) => (
							<Icon key={arsId} name="check_m" className={styles.checkPoint} style={{ top: `${idx * 81}px` }} />
						))}
						<div className={styles.busIconContainer}>
							<div className={styles.busIconWrapper}>
								<Icon name="bus_s" color="grayscale.W" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.routerList}>
					{routerList.map(({ arsId, beginTm, lastTm, stationNm }) => (
						<div key={arsId} className={styles.routerInfo}>
							<Text color="grayscale.G800" size="m" weight={selectedMenu === stationNm ? 'bold' : 'regular'}>
								{stationNm}
							</Text>
							<div className={styles.routerDetailInfo}>
								<Text color="grayscale.G400" size="r" weight="regular">
									{arsId}
								</Text>
								<div className={styles.routerTiemInfo}>
									<Icon name="time_s" />
									<Text color="grayscale.G400" size="r" weight="regular">
										{beginTm}~{lastTm}
									</Text>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
