import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/theme.css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
});

export const header = style({
	width: '100%',
	height: '48px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '0 20px',
	boxSizing: 'border-box',
	borderBottom: `1px solid ${vars.colors.grayscale.G50}`,
	backgroundColor: vars.colors.grayscale.W,
	position: 'sticky',
	top: '0px'
});

export const cancelIcon = style({
	position: 'absolute',
	top: '50%',
	right: '20px',
	transform: ' translateY(-50%)',
	cursor: 'pointer'
});

export const contents = style({
	width: '100%',
	display: 'flex',
	gap: '24px',
	flexDirection: 'column',
	padding: '24px 20px 48px',
	boxSizing: 'border-box'
});
