import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Post = ({ items, handleDelete }) => {
	// destructing the props
	const { _id, name, address, age } = items;

	return (
		// Table Row
		<TableRow
			key={_id}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
			<TableCell component='th' scope='row' align='center'>
				{name}
			</TableCell>
			<TableCell align='center'>{address}</TableCell>
			<TableCell align='center'>{age}</TableCell>
			<TableCell align='center'>
				{/* Pushing to the next link and whith id for the parms */}
				<Link style={{ color: 'inherit' }} to={`/edit/${_id}`}>
					<EditIcon size='small' />
				</Link>
			</TableCell>
			{/* Delete request to the server and passing the id */}
			<TableCell
				align='center'
				sx={{ cursor: 'pointer' }}
				onClick={() => handleDelete(_id)}>
				<DeleteIcon size='small' />
			</TableCell>
		</TableRow>
	);
};

export default Post;
