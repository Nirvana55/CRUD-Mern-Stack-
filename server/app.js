import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import router from './routes/products.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const Port = process.env.Port || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api/v1/store', router);

const startingDB = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(Port, console.log(`server is starting in port ${Port}`));
	} catch (error) {
		console.log(`server has not started ${error}`);
	}
};

startingDB();
