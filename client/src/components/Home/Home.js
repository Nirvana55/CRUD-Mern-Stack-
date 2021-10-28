import React from 'react';
import { Typography, Paper } from '@mui/material';
import Post from './Post/Post';
import {
	Container,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableContainer,
	TableBody,
} from '@mui/material';
import { TableBox } from './styles';

// All props
function Home({ data, handleDelete, sideBar, matches, search }) {
	// these are table header rows
	const headers = ['Name', 'Address', 'Age', 'Update', 'Delete'];

	return (
		<>
			{/* if the length is 0 */}
			{!data.length ? (
				<Typography>No Data to display</Typography>
			) : (
				// Container for the home
				<Container maxWidth='xl' sx={{ mt: '15px' }}>
					{/* Table Box  */}
					<TableBox open={matches ? sideBar : !sideBar}>
						{/* Container as a Paper */}
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 200 }}>
								{/* Table Header */}
								<TableHead>
									<TableRow>
										{/* Mapping the headers array */}
										{headers.map((head) => {
											return (
												<TableCell key={head} align='center'>
													{head}
												</TableCell>
											);
										})}
									</TableRow>
								</TableHead>
								{/* Table Body */}
								<TableBody>
									{/* Mapping throught the data array */}
									{data
										.filter((items) => {
											if (search === '') {
												return items;
											} else if (
												items.name.toLowerCase().includes(search.toLowerCase())
											) {
												return items;
											}
										})
										.map((items) => {
											console.log(searchResult);
											return (
												<Post
													items={data.length > 0 ? items : 'No Data found'}
													key={items._id}
													handleDelete={handleDelete}
												/>
											);
										})}
								</TableBody>
							</Table>
						</TableContainer>
					</TableBox>
				</Container>
			)}
		</>
	);
}

export default Home;
