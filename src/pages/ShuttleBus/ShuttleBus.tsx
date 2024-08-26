import MapContainer from '../../components/shuttleBus/MapContainer/MapContainer';
import ShuttleInfoCard from '../../components/shuttleBus/ShuttleInfoCard/ShuttleInfoCard';
import NotificationBar from '../../components/shuttleBus/NotificationBar/NotificationBar';
import * as styles from './ShuttleBus.css';

interface IPositionResponse {
	Latitude: number;
	Longitude: number;
}

export default function ShuttleBus() {
	const data = { Latitude: 0, Longitude: 0 };

	return (
		<div className={styles.container}>
			<NotificationBar />
			<MapContainer updatePosition={[data?.Latitude || 0, data?.Longitude || 0]} isError={false} />
			<ShuttleInfoCard />
		</div>
	);
}
