const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected success'))
.catch(err => console.error('MongoDB connection error : ', err));

app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on the PORT ${PORT}`));