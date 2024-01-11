import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 5111;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/v1/users', async (req, res) => {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
});

try {
    mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server is listening at port ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
