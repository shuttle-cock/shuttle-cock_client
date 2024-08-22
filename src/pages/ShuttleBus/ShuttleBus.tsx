import MapContainer from '../../components/shuttleBus/MapContainer/MapContainer';
import 'leaflet/dist/leaflet.css';
import ShuttleInfoCard from '../../components/shuttleBus/ShuttleInfoCard/ShuttleInfoCard';
import * as styles from './ShuttleBus.css';
import NotificationBar from '../../components/shuttleBus/NotificationBar/NotificationBar';

export default function ShuttleBus() {
	return (
		<div className={styles.container}>
			<NotificationBar />
			<MapContainer />
			<ShuttleInfoCard />
		</div>
	);
}
