export type BusRouteInfo = {
	busRouteAbrv: string;
	busRouteId: string;
	busRouteNm: string;
	corpNm: string;
	edStationNm: string;
	firstBusTm: string;
	firstLowTm: string;
	lastBusTm: string;
	lastBusYn: string;
	lastLowTm: string;
	length: string;
	routeType: string;
	stStationNm: string;
	term: string;
};

export type BusRoute = {
	arsId: string;
	beginTm: string;
	busRouteAbrv: string;
	busRouteId: string;
	busRouteNm: string;
	direction: string;
	gpsX: string;
	gpsY: string;
	lastTm: string;
	posX: string;
	posY: string;
	routeType: string;
	sectSpd: string;
	section: string;
	seq: string;
	station: string;
	stationNm: string;
	stationNo: string;
	transYn: string;
	fullSectDist: string;
	trnstnid: string;
};

export type BusRouteList = { busRouteList: BusRoute[] };
