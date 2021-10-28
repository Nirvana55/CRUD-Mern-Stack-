import React, { useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import { FormBox, FormContainer, InputField, SubmitBtn } from './styles';

// All props which is a prop drilling
function Form({ formData, setFormData, handleSubmit, sideBar, matches }) {
	return (
		<>
			{/* Form Container */}
			<Container sx={{ mt: '10px' }} maxWidth='md'>
				{/* Form Box for the edit */}
				<FormBox open={matches ? sideBar : !sideBar}>
					{/* Header */}
					<Typography variant='h5'>Practice for Mern Stack</Typography>
					{/* Form Container which form and submits when btn is clicked */}
					<FormContainer autoComplete='off' noValidate onSubmit={handleSubmit}>
						{/* All TextFields */}
						<InputField
							label='Name'
							type='text'
							variant='outlined'
							value={formData.name}
							color='secondary'
							onChange={(e) =>
								setFormData({ ...formData, name: e.target.value })
							}
						/>
						<InputField
							label='Address'
							type='text'
							color='secondary'
							variant='outlined'
							value={formData.address}
							onChange={(e) =>
								setFormData({ ...formData, address: e.target.value })
							}
						/>
						<InputField
							label='Age'
							type='text'
							variant='outlined'
							color='secondary'
							value={formData.age}
							onChange={(e) =>
								setFormData({ ...formData, age: e.target.value })
							}
						/>
						{/* Submit Btn */}
						<SubmitBtn
							variant='contained'
							color='primary'
							type='submit'
							size='large'
							fullWidth>
							Submit
						</SubmitBtn>
					</FormContainer>
				</FormBox>
			</Container>
		</>
	);
}

export default Form;
