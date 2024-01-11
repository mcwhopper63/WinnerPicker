const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string
const uri =
    'mongodb+srv://ksltho:<password>@cluster0.5u1whyy.mongodb.net/?retryWrites=true&w=majority';

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

// Define routes
// ...

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
