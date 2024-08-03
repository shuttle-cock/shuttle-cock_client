export const fontFamilyList = [
	'Pretendard Variable',
	'Pretendard',
	'-apple-system',
	'BlinkMacSystemFont',
	'system-ui',
	'Roboto',
	'"Helvetica Neue"',
	'"Segoe UI"',
	'"Apple SD Gothic Neo"',
	'"Noto Sans KR"',
	'"Malgun Gothic"',
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
	'sans-serif'
] as const;

export const typography = {
	fontFamily: fontFamilyList.join(', '),
	fontweight: {
		regular: '400',
		medium: '500',
		bold: '700'
	},
	fontSize: {
		xxxl: '28px',
		xxl: '24px',
		xl: '20px',
		l: '18px',
		m: '16px',
		r: '14px',
		s: '12px',
		xs: '11px'
	},
	lineHeight: {
		xxxl: '32px',
		xxl: '32px',
		xl: '28px',
		l: '26px',
		m: '26px',
		r: '22px',
		s: '18px',
		xs: '14px'
	}
};
