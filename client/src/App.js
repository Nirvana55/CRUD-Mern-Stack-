import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { makeTheme } from './styles';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import API from './api/Index';
import Edit from './components/Edit/Edit';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const App = React.memo(() => {
	// Media quey theme
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	const [data, setData] = useState([]);
	// all input data
	const [formData, setFormData] = useState({
		name: '',
		address: '',
		age: '',
	});
	// edit input
	const [editData, setEditData] = useState({
		name: '',
		address: '',
		age: '',
	});
	// for the sideBar
	const [sideBar, setSideBar] = useState(true);
	const [search, setSearchBar] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	// Fetching all data from the Mongo DB
	useEffect(() => {
		const fetchPost = async () => {
			try {
				// fetching post
				const response = await API.get('/api/v1/store');
				setData(response.data);
			} catch (err) {
				console.log(`Server Error ${err.message}`);
			}
		};
		// calling function
		fetchPost();
	}, [data]);

	// handling Submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Posting data and passing the form data
			const response = await API.post('/api/v1/store', formData);
			// taking data from the response
			const allPost = [...data, response.data];
			setData(allPost);
			setFormData({ name: '', address: '', age: '' });
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	const handleDelete = async (id) => {
		try {
			// Passing Id
			await API.delete(`/api/v1/store/${id}`);
			// filtering data
			const delPost = data.filter((p) => p._id !== id);
			// passing Data
			setData(delPost);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	// Editing Data
	const handleEdit = async (id) => {
		try {
			// passing ID and edit data
			const response = await API.patch(`/api/v1/store/${id}`, editData);
			// setting Data
			setData(
				data.map((dt) => (dt._id === id ? { ...response.data } : formData))
			);
			// setting ID
			setEditData({ name: '', address: '', age: '' });
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<>
			{/* Router for the routing */}
			<Router>
				<ThemeProvider theme={makeTheme}>
					{/* Nav Bar component */}
					<Navbar
						sideBar={sideBar}
						setSideBar={setSideBar}
						matches={matches}
						search={search}
						setSearchBar={setSearchBar}
					/>
					<Switch>
						<Route exact path='/'>
							{/* Home Component */}
							<Home
								data={data}
								sideBar={sideBar}
								handleDelete={handleDelete}
								matches={matches}
								search={search}
							/>
						</Route>
						<Route exact path='/post'>
							{/* Form Component */}
							<Form
								formData={formData}
								setFormData={setFormData}
								handleSubmit={handleSubmit}
								sideBar={sideBar}
								matches={matches}
							/>
						</Route>
						{/* Route the link with the param ID */}
						<Route exact path='/edit/:id'>
							{/* Edit Component */}
							<Edit
								editData={editData}
								setEditData={setEditData}
								handleEdit={handleEdit}
								handleSubmit={handleSubmit}
								data={data}
								sideBar={sideBar}
								matches={matches}
							/>
						</Route>
					</Switch>
				</ThemeProvider>
			</Router>
		</>
	);
});

export default App;
