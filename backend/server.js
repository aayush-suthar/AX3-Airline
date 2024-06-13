// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

 

const {signup} = require('./Controller/authController');
const {add_flight} = require('./Controller/authController');
const {get_Flights} = require('./Controller/authController');
const {get_user_profile} = require('./Controller/authController')
const {book_flight} = require('./Controller/authController')
 

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/AX3-Airlines', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/signup' , signup)
app.post('/add_flights' , add_flight) 
app.post('/get_Flights' , get_Flights) 
app.post('/get_user_profile' , get_user_profile) 
app.post('/book_flight' , book_flight)

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
