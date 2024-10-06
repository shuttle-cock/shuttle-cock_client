import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const toggleBase = style({
	width: '44px',
	height: '24px',
	display: 'inline-flex',
	alignItems: 'center',
	cursor: 'pointer',
	borderRadius: '13px',
	transition: 'all 150ms'
});

export const toggleCheckbox = style({
	position: 'absolute',
	opacity: 0,
	width: 0,
	height: 0
});

export const toggleSlider = style({
	display: 'inline-block',
	width: '100%',
	height: '100%',
	backgroundColor: vars.colors.primary.B75,
	borderRadius: '12px',
	position: 'relative',
	'::before': {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '2px',
		transform: 'translateY(-50%)',
		transition: 'all 150ms',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		backgroundColor: vars.colors.grayscale.W,
		boxShadow: '0px -1px 4px 0px #1D1F1F1A'
	}
});

globalStyle(`${toggleCheckbox}:checked + span`, {
	backgroundColor: vars.colors.primary.B400
});

globalStyle(`${toggleCheckbox}:checked + span::before`, {
	left: 'calc(100% - 2px)',
	transform: 'translate(-100%, -50%)'
});

globalStyle(`${toggleCheckbox}:disabled + span`, {
	backgroundColor: vars.colors.grayscale.G75,
	cursor: 'not-allowed'
});

globalStyle(`${toggleCheckbox}:disabled + span::before`, {
	backgroundColor: vars.colors.grayscale.G50
});
