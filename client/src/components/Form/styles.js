import { styled } from '@mui/material/styles';
import { TextField, Button, Box } from '@mui/material';

const drawerWidth = 200;

const FormContainer = styled('form')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
}));

const InputField = styled(TextField)(({ theme }) => ({
	marginTop: theme.spacing(2),
}));

// For Marging when the open props is true
const FormBox = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
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

const SubmitBtn = styled(Button)(({ theme }) => ({
	marginTop: theme.spacing(2),
}));

export { FormContainer, InputField, FormBox, SubmitBtn };
