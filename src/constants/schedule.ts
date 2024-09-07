export interface ITime {
	h: number;
	m: number;
}
export const TIME_PERIOD = {
	AM: 'AM',
	PM: 'PM',
	FAMILY_DAY_PM: 'FAMILY_DAY_PM'
} as const;

export type TimePeriodType = ValueOf<typeof TIME_PERIOD>;
export type TimeType = 'AM' | 'PM';
export type ITimeTable = {
	[key in TimePeriodType]: ITime[];
};
export type IDirection = {
	[key in TimeType]: string;
};

export const TIME_LABELS = {
	[TIME_PERIOD.AM]: { en: 'AM', ko: '오전' },
	[TIME_PERIOD.PM]: { en: 'PM', ko: '오후' }
};

export const TIME_TABLE: ITimeTable = {
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
	],
	FAMILY_DAY_PM: [
		{ h: 16, m: 10 },
		{ h: 16, m: 30 },
		{ h: 16, m: 50 },
		{ h: 17, m: 10 },
		{ h: 17, m: 30 },
		{ h: 17, m: 50 }
	]
} as const;

export const DIRECTION: IDirection = { AM: '고덕역 → 지식산업센터', PM: '지식산업센터 → 고덕역' };
