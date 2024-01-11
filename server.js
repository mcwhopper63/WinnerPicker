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

// MongoDB connection string
// const uri =
//     'mongodb+srv://ksltho:LGZmTn18FQl31C26@cluster0.5u1whyy.mongodb.net/?retryWrites=true&w=majority';

// mongoose
//     .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch((err) => console.log(err));

// Define routes
// Get all events

app.get('/', (req, res) => {
    res.send('Hello World');
});

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server is listening at port ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
