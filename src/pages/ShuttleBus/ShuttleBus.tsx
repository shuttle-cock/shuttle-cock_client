import { useState } from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { type LatLngExpression, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as styles from './ShuttleBus.css';
import ShuttleInfoCard from '../../components/shuttleBus/ShuttleInfoCard/ShuttleInfoCard';
import NotificationBar from '../../components/shuttleBus/NotificationBar/NotificationBar';

const stationPosition: LatLngExpression = [37.55498, 127.15437];
const arrivalPosition: LatLngExpression = [37.56605, 127.16108];
const polylinePositions: LatLngExpression[] = [
	stationPosition,
	[37.55539, 127.15663],
	[37.55542, 127.15659],
	[37.56078, 127.1569],
	[37.56094, 127.15681],
	[37.56138, 127.15672],
	[37.56247, 127.15673],
	[37.56294, 127.15658],
	[37.56307, 127.15733],
	[37.56308, 127.15835],
	[37.56296, 127.16093],
	[37.56344, 127.16094],
	[37.56361, 127.1609],
	[37.56401, 127.1607],
	[37.56458, 127.16035],
	[37.56477, 127.16079],
	[37.565, 127.16106],
	[37.56566, 127.16166],
	arrivalPosition
];

export default function ShuttleBus() {
	const LocationMarker = () => {
		const [position, setPosition] = useState<LatLngExpression>(arrivalPosition);
		const map = useMapEvents({
			click() {
				map.locate();
			},
			locationfound(e) {
				setPosition(e.latlng);
				map.flyTo(e.latlng, map.getZoom());
			}
		});

		return position === null ? null : (
			<Marker position={position!}>
				<Popup>You are here</Popup>
			</Marker>
		);
	};

	return (
		<div className={styles.container}>
			<NotificationBar />
			<MapContainer
				center={arrivalPosition}
				zoom={16}
				scrollWheelZoom
				style={{ width: '100%', height: '100%' }}
				zoomControl={false}
				minZoom={15}
				attributionControl={false}
			>
				<TileLayer
					opacity={0.7}
					// attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				<Marker
					position={arrivalPosition}
					icon={new Icon({ iconUrl: 'src/assets/icons/bus-marker-l.svg' })}
					alt="bus-marker-icon"
				>
					<Popup>A pretty CSS3 popup.</Popup>
				</Marker>

				{/* <LocationMarker /> */}
				<Polyline positions={polylinePositions} color="#3A65FF" weight={8} />
			</MapContainer>
			<ShuttleInfoCard />
		</div>
	);
}
