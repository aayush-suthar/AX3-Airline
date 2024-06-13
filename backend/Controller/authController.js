const User = require('../models/User.js');
const Flight = require('../models/Flight.js')

 
exports.signup= async (req, res) => {
  const { name, email, password, phone, username } = req.body;

  // Check if a user with the given email, phone, or username already exists
  const existingUser = await User.findOne({ $or: [{ email }, { phone }, { username }] });
  if (existingUser) {
    return res.status(400).json({ message: 'Account already exists' });
  }
  let present_book = [];

  // Create a new user
  const newUser = new User({ name, email, password, phone, username , present_book});
  await newUser.save();

  // Return success message
  res.status(201).json({ message: 'User registered successfully' });
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) { 
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' }); 
  }
};

 
exports.get_user_profile = async (req , res) => {
  const { email , password } = req.body;
  try{
    let check_exist = await User.findOne({email : email , password : password})
  if(check_exist){
    console.log(check_exist)
    res.send(check_exist); 
  }else{
    res.send(false);
  }
}catch(error){
  console.log(error)
}
}


exports.get_Flights = async (req , res) =>{
  try {
    const { from , to , date } = req.body; 

    const flight = await Flight.find({Departure_City_Name:from , Arrival_City_Name:to , Departure_Date : date})
    if (flight) {
      res.status(200).send(flight);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }    
  } catch (error) {
    console.error('Error during fetching fligh_info:', error);
    res.status(500).json({ message: 'Server error' });    
  }
}
 
exports.add_flight = async (req , res) => {
  try{
    const {num , departcitycode,departcityname,departcityairport,arrivcitycode,
      arrivcityname,arrivcityairport, seats_count ,depart_date , depart_time , 
      arrive_date , arrive_time , price } = req.body;
       
       
      let seatIndex = ["A", "B" , "C", "D"];
      let seats = [];
  
      for (var i = 0; i < seats_count; i++) {
        seats.push({
          SeatChar: seatIndex[i % 4],
          SeatIndex: Math.floor((i/4)) + 1,
          SeatStatus: 0,
          SeatUser: null
        });
      }

    const existingFlight = await Flight.findOne({ Num : num , Departure_City_Name : departcityname, Arrival_City_Name : arrivcityname , 
     Departure_Date : depart_date ,  Departure_Time : depart_time , Arrival_Date : arrive_date , 
     Arrival_Time : arrive_time });

    if(existingFlight){ 
      return res.status(400).json({ message: 'Flight already exists' });      
    }
    const newFlight = new Flight({ Num : num , Departure_City_Code : departcitycode ,Departure_City_Name : departcityname,Departure_City_Airport : departcityairport
      , Arrival_City_Code : arrivcitycode ,Arrival_City_Name : arrivcityname,Arrival_City_Airport : arrivcityairport, Departure_Date : depart_date , 
      Departure_Time : depart_time , Arrival_Date : arrive_date , Arrival_Time : arrive_time , 
      Seats : seats ,Seats_count: seats_count , Price : price});
    await newFlight.save();  

  } catch (error) {
    console.error('Error during adding fligh_info:', error);
    res.status(500).json({ message: 'Server error' });     
  }
}
 


exports.book_flight = async (req , res)=>{

try{
  const {user_info , items , selected_seat} = req.body
  console.log(user_info , items , selected_seat)
  let new_presentbook = user_info.presentbook;
  new_presentbook.push({
    Num : items.num , Departure_City_Code : items.Departure_City_Code ,Departure_City_Name : items.Departure_City_Name,
    Departure_City_Airport : items.Departure_City_Airport, Arrival_City_Code : items.Arrival_City_Code ,Arrival_City_Name : items.Arrival_City_Name,
    Arrival_City_Airport : items.Arrival_City_Airport, Departure_Date : items.Departure_Date , 
    Departure_Time : items.Departure_Timee , Arrival_Date : items.Arrival_Date , Arrival_Time : items.Arrival_Time, Price : price , Seat : selected_seat  
  })

  const user_search = User.findOne({ email: user_info.email, password: user_info.password });
  if(!user_search){
    res.status(401).json({ message: 'User Not Found' });    
  }else{
    const update_user = User.updateOne(
      { email: user_info.email, password: user_info.password },
      { $set: { presentbook: new_presentbook } }
    );

  }

}catch(error){
  console.error('Error during booking fligh:', error);
  res.status(500).json({ message: 'Server error' });       
}

}
