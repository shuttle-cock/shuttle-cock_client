import { style } from '@vanilla-extract/css';

export const fab = style({
	position: 'absolute',
	bottom: '96px',
	right: '20px',
	width: '48px',
	height: '48px',
	borderRadius: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
	border: 'none',
	cursor: 'pointer',
	transition: 'background-color 0.3s',

	':hover': {
		opacity: 0.8 // 호버 시 불투명도 조정
	},

	':focus': {
		outline: 'none'
	}
});
