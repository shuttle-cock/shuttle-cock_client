import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
	textAlign: 'center'
});

export const logo = style({
	width: '150px',
	marginBottom: '20px',
	position: 'absolute',
	top: '30%'
});

export const button = style({
	position: 'absolute',
	bottom: '5%',
	width: '320px',
	padding: '10px 20px',
	fontSize: '16px',
	border: '1px solid #ccc',
	backgroundColor: '#fff',
	borderRadius: '5px',
	cursor: 'pointer',
	':hover': {
		backgroundColor: '#f0f0f0'
	},
	':focus': {
		outline: 'none',
		boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)'
	}
});
