import React, { useEffect } from 'react';
import { TextField, Typography, Button, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { EditBox } from './styles';

const Edit = ({
	editData,
	setEditData,
	handleEdit,
	data,
	sideBar,
	matches,
}) => {
	// param method
	const { id } = useParams();
	// Finding the data which id is passed in the URL params
	const findData = data.find((dt) => dt._id === id);

	// When the data is find setData keeps the value to the all
	// it will re-render when the set Data gets the value
	useEffect(() => {
		if (findData) {
			setEditData({
				name: findData.name,
				address: findData.address,
				age: findData.age,
			});
		}
	}, [setEditData]);

	return (
		<>
			{/* This is the container for the edit section */}
			<Container sx={{ mt: '10px' }} maxWidth='md'>
				<EditBox open={matches ? sideBar : !sideBar}>
					{/* Heading */}
					<Typography variant='h5'>Edit Post</Typography>
					{/* Form for the Edit */}
					<form
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							margin: '8px 0',
						}}
						autoComplete='off'
						noValidate
						onSubmit={(e) => e.preventDefault()}>
						{/* Textfileds for the inputs */}
						<TextField
							sx={{ mt: '7px' }}
							label='Name'
							type='text'
							variant='outlined'
							value={editData.name}
							onChange={(e) =>
								setEditData({ ...editData, name: e.target.value })
							}
							fullWidth
						/>
						<TextField
							sx={{ mt: '7px' }}
							label='Address'
							type='text'
							variant='outlined'
							value={editData.address}
							onChange={(e) =>
								setEditData({ ...editData, address: e.target.value })
							}
							fullWidth
						/>
						<TextField
							sx={{ mt: '7px' }}
							label='Age'
							type='text'
							variant='outlined'
							value={editData.age}
							onChange={(e) =>
								setEditData({ ...editData, age: e.target.value })
							}
							fullWidth
						/>
						{/* Submit btn by passing the id to the edit request in the axios */}
						<Button
							sx={{ mt: '10px' }}
							type='sumbit'
							fullWidth
							variant='contained'
							onClick={() => handleEdit(findData._id)}>
							Submit
						</Button>
					</form>
				</EditBox>
			</Container>
		</>
	);
};

export default Edit;
