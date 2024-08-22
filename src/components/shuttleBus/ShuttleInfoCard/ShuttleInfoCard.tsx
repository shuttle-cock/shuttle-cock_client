import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Icon from '../../common/Icon';
import * as styles from './ShuttleInfoCard.css';

interface ITime {
	h: number;
	m: number;
}
type TimePeriodType = 'AM' | 'PM';
type ITimeTable = {
	[key in TimePeriodType]: ITime[];
};
enum TimePeriod {
	'AM' = '오전',
	'PM' = '오후'
}

const timeTable: ITimeTable = {
	AM: [
		{ h: 8, m: 0 },
		{ h: 8, m: 20 },
		{ h: 8, m: 40 },
		{ h: 9, m: 0 },
		{ h: 9, m: 20 }
	],
	PM: [
		{ h: 17, m: 30 },
		{ h: 17, m: 50 },
		{ h: 18, m: 10 },
		{ h: 18, m: 30 },
		{ h: 19, m: 0 },
		{ h: 19, m: 20 }
	]
};

const getCurrentTimeTable = (hour: number, min: number) => {
	const isOperating = (7 < hour && hour < 10) || (16 < hour && hour < 20);
	if (isOperating) {
		const selected = timeTable[hour < 10 ? 'AM' : 'PM'];
		return selected.filter(info => info.h * 60 + info.m >= hour * 60 + min)[0] as ITime;
	}
	return { h: 0, m: 0 };
};

const getRemainingTime = (info: ITime, currentTime: ITime) => {
	if (!info.h && !info.m) return '미운행';
	const { h, m } = currentTime;
	const totalMin = info.h * 60 + info.m - (h * 60 + m);
	const hour = Math.floor(totalMin / 60);
	const min = totalMin % 60;

	if (!hour && !min) return '도착';
	return `${hour ? hour + '시' : ''} ${min ? min + '분' : ''} 전`;
};

const getDepartureInfo = ({ h, m }: ITime, timeStatus: TimePeriodType) => {
	if (!h && !m) return '운영시간 전';
	return `${TimePeriod[timeStatus]} ${h}시 ${m ? m + '분' : ''} 출발 예정`;
};

export default function ShuttleInfoCard() {
	const [remainingInfo, setRemainingInfo] = useState('');
	const [currentTime, setCurrentTime] = useState<ITime>({ h: 0, m: 0 });
	const [timeStatus, setTimeStatus] = useState<TimePeriodType>('AM');

	useEffect(() => {
		const setTimeInfo = () => {
			const h = dayjs().hour();
			const m = dayjs().minute();
			const timeInfo = getCurrentTimeTable(h, m);
			console.log(timeInfo);
			setRemainingInfo(getRemainingTime(timeInfo, { h, m }));
			setTimeStatus(h < 10 ? 'AM' : 'PM');
			setCurrentTime(timeInfo);
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
				<p className={styles.subTitle}>{getDepartureInfo(currentTime, timeStatus)}</p>
			</div>
			<div className={styles.boxFooter}>
				<Icon name="location_s" className={styles.icon} />
				{timeStatus === 'AM' ? '고덕역 → 지식산업센터' : '지식산업센터 → 고덕역'}
			</div>
		</div>
	);
}
