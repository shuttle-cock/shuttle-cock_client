import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/theme.css';

export const container = style({
	width: '100%',
	maxHeight: '48px',
	padding: '11px 20px',
	boxSizing: 'border-box',
	borderBottomWidth: '1px',
	borderBottomStyle: 'solid',
	borderBottomColor: vars.colors.grayscale.G50,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: vars.colors.grayscale.W,
	position: 'relative'
});

export const logo = style({
	width: '77px'
});

export const moreIcon = style({
	position: 'absolute',
	top: '50%',
	right: '20px',
	transform: 'translateY(-50%)',
	cursor: 'pointer'
});
