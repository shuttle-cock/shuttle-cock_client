import { MapContainer, NotificationBar, ShuttleInfoCard } from '@components/shuttle_bus';
import { useSSE } from '@hooks/useSSE';
import * as styles from './ShuttleBus.css';

interface IPositionResponse {
	Latitude: number;
	Longitude: number;
}

export default function ShuttleBus() {
	const { data, status } = useSSE<IPositionResponse>({ url: 'redis/subscribe/shuttleBus' });

	return (
		<div className={styles.container}>
			<NotificationBar />
			<MapContainer updatePosition={[data?.Latitude || 0, data?.Longitude || 0]} isClosed={status === 'closed'} />
			<ShuttleInfoCard />
		</div>
	);
}
