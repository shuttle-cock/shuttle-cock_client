import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const container = style({
	flex: '1',
	overflowY: 'scroll'
});

export const wrapper = style({
	padding: '8px 20px',
	display: 'flex',
	gap: '16px'
});

export const locationLineWrapper = style({
	width: '68px',
	height: 'inherit',
	padding: '16px 0',
	position: 'relative'
});

export const locationLine = style({
	width: '6px',
	height: 'calc(100% - 40px)',
	borderRadius: '16px',
	backgroundColor: vars.colors.primary.B200,
	marginLeft: 'auto',
	position: 'relative'
});

export const checkPoint = style({
	position: 'absolute',
	left: '50%',
	transform: 'translateX(-50%)'
});

export const check = style({
	width: '3.72px',
	height: '3.72px',
	border: `1px solid ${vars.colors.primary.B200}`,
	transform: 'rotate(45deg)',
	borderTop: 'none',
	borderLeft: 'none',
	flexShrink: '0'
});

export const busIconContainer = style({
	position: 'absolute',
	left: '50%',
	transform: 'translateX(-50%)'
});

export const busState = style({
	position: 'absolute',
	left: 0,
	width: '36px',
	height: '22px'
});

export const busIconWrapper = style({
	width: '24px',
	height: '24px',
	padding: '4px',
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: vars.colors.primary.B300,
	border: `1px solid ${vars.colors.secondary.GB100}`,
	borderRadius: '999px'
});

export const routerList = style({
	width: '100%',
	height: '100%',
	overflowY: 'scroll'
});

export const routerInfo = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '4px',
	padding: '16px 0 12px',
	borderBottom: `1px solid ${vars.colors.grayscale.G50}`
});

export const routerDetailInfo = style({
	display: 'flex',
	gap: '12px'
});

export const routerTiemInfo = style({
	display: 'flex',
	gap: '2px',
	alignItems: 'center'
});
