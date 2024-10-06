import { Icon, LatLngTuple, type LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Polyline, TileLayer, useMap, useMapEvents } from 'react-leaflet';

import BUS_MARKER_L_SVG from '@assets/icons/bus-marker-l.svg';
import MY_LOCATION_L_SVG from '@assets/icons/my-location-l.svg';
import * as styles from './MapContainer.css';

interface IShuttleBusProps {
	updatePosition: LatLngTuple;
	isClosed: boolean;
}

const stationPosition: LatLngTuple = [37.55498, 127.15437];
const arrivalPosition: LatLngTuple = [37.56605, 127.16108];
const polylinePositions: LatLngTuple[] = [
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

const UpdateMapView = ({ position }: { position: LatLngTuple }) => {
	const map = useMap();
	map.setView(position, map.getZoom());
	return null;
};

const LocationMarker = ({ whenLocated }: { whenLocated: () => void }) => {
	const [position, setPosition] = useState<LatLngExpression | null>(null);
	const map = useMapEvents({
		click() {
			map.locate();
		},
		locationfound(e) {
			setPosition(e.latlng);
			map.flyTo(e.latlng, map.getZoom());
			whenLocated();
		}
	});

	return position === null ? null : (
		<Marker position={position!} icon={new Icon({ iconUrl: MY_LOCATION_L_SVG, className: styles.icon })} />
	);
};

export default function ShuttleBus({ updatePosition, isClosed }: IShuttleBusProps) {
	const [position, setPosition] = useState<LatLngTuple>(arrivalPosition);
	const [, setShowUserLocation] = useState(false);

	useEffect(() => {
		const [lan, long] = updatePosition;
		if (lan && long) {
			setPosition(updatePosition);
		}
	}, [updatePosition]);

	return (
		<MapContainer
			tap
			center={position}
			zoom={16}
			scrollWheelZoom
			style={{ width: '100%', height: '100%' }}
			zoomControl={false}
			minZoom={15}
			attributionControl={false}
		>
			<TileLayer opacity={0.7} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker
				position={position}
				icon={new Icon({ iconUrl: BUS_MARKER_L_SVG, className: styles.icon })}
				alt="bus-marker-icon"
			/>
			<Polyline positions={polylinePositions} color="#3A65FF" weight={8} />
			<LocationMarker whenLocated={() => setShowUserLocation(true)} />
			<UpdateMapView position={position} />
		</MapContainer>
	);
}
