import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Icon from '../../common/Icon';
import {
	type ITime,
	type TimeType,
	TIME_PERIOD,
	TIME_TABLE,
	DIRECTION,
	TIME_LABELS
} from '../../../constants/schedule';
import * as styles from './ShuttleInfoCard.css';

const getDate = ({ h, m }: { h: number; m: number }) => {
	return dayjs().hour(h).minute(m);
};
const isSameOrBefore = (s: dayjs.Dayjs, t: dayjs.Dayjs) => s.isSame(t) || s.isBefore(t);
const isSameOrAfter = (s: dayjs.Dayjs, t: dayjs.Dayjs) => s.isSame(t) || s.isAfter(t);

const getIsInService = (date: dayjs.Dayjs, isFamilyDay: boolean) => {
	const PM = isFamilyDay ? TIME_PERIOD.FAMILY_DAY_PM : TIME_PERIOD.PM;
	const amFirstMin = getDate(TIME_TABLE[TIME_PERIOD.AM][0]).add(-1, 'hour');
	const amLastMin = getDate(TIME_TABLE[TIME_PERIOD.AM].at(-1)!).add(1, 'hour');
	const pmFirstMin = getDate(TIME_TABLE[PM][0]).add(-1, 'hour');
	const pmLastMin = getDate(TIME_TABLE[PM].at(-1)!).add(1, 'hour');

	return (
		(isSameOrAfter(date, amFirstMin) && isSameOrBefore(date, amLastMin)) ||
		(isSameOrAfter(date, pmFirstMin) && isSameOrBefore(date, pmLastMin))
	);
};

const getCurrentTimeTable = (time: dayjs.Dayjs, isFamilyDay: boolean) => {
	const isInService = getIsInService(time, isFamilyDay);

	if (isInService) {
		const selected = TIME_TABLE[time.hour() < 10 ? 'AM' : 'PM'];
		return selected.find(info => isSameOrAfter(getDate({ h: info.h, m: info.m }), time)) as ITime;
	}
	return { h: 0, m: 0 };
};

const getRemainingTime = (info: ITime, currentTime: dayjs.Dayjs) => {
	if (!info.h && !info.m) return '미운행';
	const totalMin = getDate({ h: info.h, m: info.m }).diff(currentTime, 'minute');
	const hour = Math.floor(totalMin / 60);
	const min = totalMin % 60;

	if (!hour && !min) return '도착';
	return `${hour ? hour + '시' : ''} ${min ? min + '분' : ''} 전`;
};

const getDepartureInfo = ({ h, m }: ITime, timeStatus: TimeType) => {
	if (!h && !m) return '운행시간 전';
	return `${TIME_LABELS[timeStatus].ko} ${h}시 ${m ? m + '분' : ''} 출발 예정`;
};

export default function ShuttleInfoCard() {
	const [remainingInfo, setRemainingInfo] = useState('');
	const [nextBusTime, setNextBusTime] = useState<ITime>({ h: 0, m: 0 });
	const [timeStatus, setTimeStatus] = useState<TimeType>(TIME_PERIOD.AM);

	useEffect(() => {
		const setTimeInfo = () => {
			const currentTime = dayjs();
			const timeInfo = getCurrentTimeTable(currentTime, false);
			setRemainingInfo(getRemainingTime(timeInfo, currentTime));
			setTimeStatus(currentTime.hour() < 10 ? 'AM' : 'PM');
			setNextBusTime(timeInfo);
		};
		const id = setInterval(setTimeInfo, 1000);
		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.boxContent}>
				<span className={styles.chip}>다음 셔틀 안내</span>
				<p className={styles.title}>
					<Icon name="shuttle_bus_m" color="primary.B300" />
					{remainingInfo}
				</p>
				<p className={styles.subTitle}>{getDepartureInfo(nextBusTime, timeStatus)}</p>
			</div>
			<div className={styles.boxFooter}>
				<Icon name="location_s" className={styles.icon} />
				{DIRECTION[timeStatus]}
			</div>
		</div>
	);
}
