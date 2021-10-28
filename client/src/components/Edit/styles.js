import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const drawerWidth = 200;

// For Marging
const EditBox = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#D3D3D3',
		flexDirection: 'column',
		padding: theme.spacing(2),
		...(open && {
			marginLeft: `${drawerWidth}px`,
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	})
);

export { EditBox };
