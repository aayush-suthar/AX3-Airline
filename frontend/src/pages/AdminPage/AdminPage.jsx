import React, { useState } from 'react';

const AdminPage = () => {
  const [flightData, setFlightData] = useState({
    num: '',
    departdate: '',
    departcitycode: '',
    departcityname: '',
    departcityairport: '',
    arrivdate: '',
    arrivcitycode: '',
    arrivcityname: '',
    arrivcityairport: '',
    seats_count: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let depart_date_split = flightData.departdate.split('T')[0];
    let depart_time_split = flightData.departdate.split('T')[1];
    let arrive_date_split = flightData.arrivdate.split('T')[0];
    let arrive_time_split = flightData.arrivdate.split('T')[1];

    const postData = {
      num: flightData.num, 
      departcitycode: flightData.departcitycode,
      departcityname : flightData.departcityname , 
      departcityairport : flightData.departcityairport,
      arrivcitycode: flightData.arrivcitycode,
      arrivcityname : flightData.arrivcityname ,
      arrivcityairport : flightData.arrivcityairport,
      seats_count: flightData.seats_count, 
      depart_date: depart_date_split,
      depart_time: depart_time_split, 
      arrive_date: arrive_date_split,
      arrive_time: arrive_time_split, 
      price: flightData.price
    };

    try {
      const response = await fetch('http://localhost:3001/add_flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data)
      console.log('Flight added successfully:', data);
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  return (
    <div>
      <form className="flight-form" onSubmit={handleSubmit}>
        <div className="flight-container">
          <input
            type="text"
            name="num"
            value={flightData.num}
            onChange={handleChange}
            placeholder="NUM"
            className="flight-input"
            required
          />
          <input
            type="text"
            name="departcitycode"
            value={flightData.departcitycode}
            onChange={handleChange}
            placeholder="departcitycode"
            className="flight-input"
            required
          />
          <input
            type="text"
            name="departcityname"
            value={flightData.departcityname}
            onChange={handleChange}
            placeholder="departcityname"
            className="flight-input"
            required
          />
          <input
            type="text"
            name="departcityairport"
            value={flightData.departcityairport}
            onChange={handleChange}
            placeholder="departcityairport"
            className="flight-input"
            required
          />
         <input
            type="text"
            name="arrivcitycode" 
            value={flightData.arrivcitycode}
            onChange={handleChange}
            placeholder="arrivcitycode"
            className="flight-input"
            required
          />
          <input
            type="text"
            name="arrivcityname"
            value={flightData.arrivcityname}
            onChange={handleChange}
            placeholder="arrivcityname"
            className="flight-input"
            required
          />
          <input
            type="text"
            name="arrivcityairport"
            value={flightData.arrivcityairport}
            onChange={handleChange}
            placeholder="arrivcityairport"
            className="flight-input"
            required
          />
          <input
            type="number"
            name="seats_count"
            value={flightData.seats_count}
            onChange={handleChange}
            placeholder="Seats"
            className="flight-input"
            required
          />
          <input
            type="number"
            name="price"
            value={flightData.price}
            onChange={handleChange}
            placeholder="Price"
            className="flight-input"
            required
          />
          <input
            type="datetime-local"
            name="departdate"
            value={flightData.departdate}
            onChange={handleChange}
            className="flight-input"
            required
          />
          <input
            type="datetime-local"
            name="arrivdate"
            value={flightData.arrivdate}
            onChange={handleChange}
            className="flight-input"
            required
          />
        </div>
        <button type="submit" className="addflight-button">Add Flight</button>
      </form>
    </div>
  );
};

export default AdminPage;
