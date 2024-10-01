import MapContainer from '../../components/shuttleBus/MapContainer/MapContainer';
import ShuttleInfoCard from '../../components/shuttleBus/ShuttleInfoCard/ShuttleInfoCard';
import NotificationBar from '../../components/shuttleBus/NotificationBar/NotificationBar';
import { useSSE } from '../../hooks/sse';
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
