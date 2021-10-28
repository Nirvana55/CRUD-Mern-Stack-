// import API from '../api/Index';

// // handling Submit
// const handleSubmit = async (e) => {
// 	e.preventDefault();
// 	try {
// 		// Posting data and passing the form data
// 		const response = await API.post('/api/v1/store', formData);
// 		// taking data from the response
// 		const allPost = [...data, response.data];
// 		setData(allPost);
// 		setFormData({ name: '', address: '', detail: '' });
// 	} catch (err) {
// 		console.log(`Error: ${err.message}`);
// 	}
// };

// const handleDelete = async (id) => {
// 	try {
// 		// Passing Id
// 		await API.delete(`/api/v1/store/${id}`);
// 		// filtering data
// 		const delPost = data.filter((p) => p._id !== id);
// 		// passing Data
// 		setData(delPost);
// 	} catch (err) {
// 		console.log(`Error: ${err.message}`);
// 	}
// };

// // Editing Data
// const handleEdit = async (id) => {
// 	try {
// 		// passing ID and edit data
// 		const response = await API.patch(`/api/v1/store/${id}`, editData);
// 		// setting Data
// 		setData(
// 			data.map((dt) => (dt._id === id ? { ...response.data } : formData))
// 		);
// 		// setting ID
// 		setEditData({ name: '', address: '', detail: '' });
// 	} catch (err) {
// 		console.log(`Error: ${err.message}`);
// 	}
// };

// export { handleDelete, handleSubmit, handleEdit };
