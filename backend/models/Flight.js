const mongoose = require('mongoose');
const { User } = require('./User');

const SeatSchema = new mongoose.Schema({
  SeatChar: { type: String, required: true },
  SeatIndex: { type: Number, required: true },
  SeatStatus: { type: String, required: true },
  SeatUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


const FlightSchema = new mongoose.Schema({
  Num: { type: String, required: true, unique: true },
  Departure_City_Code: { type: String, required: true },
  Departure_City_Name: { type: String, required: true },
  Departure_City_Airport: { type: String, required: true },
  Arrival_City_Code: { type: String, required: true },
  Arrival_City_Name: { type: String, required: true },
  Arrival_City_Airport: { type: String, required: true },
  Departure_Date: { type: String, required: true },
  Departure_Time: { type: String, required: true },
  Arrival_Date: { type: String, required: true },
  Arrival_Time: { type: String, required: true },
  Seats: [SeatSchema],
  Seats_count: { type: Number, required: true },
  Price: { type: Number, required: true }
});
const Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight;
