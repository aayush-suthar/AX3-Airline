import React from 'react'
import './Payment.css'

const Payment = (items , selected_seat , user_info) => {

    const HandlePayment = async (e)=>{
        if(selected_seat == 'none'){
            alert('Select Seat')
        }else{
            e.preventDefault();
            const postData = {user_info , items , selected_seat}
            try {
              const response = await fetch('http://localhost:3001/book_flight', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(postData),
              });
        
              if (!response.ok) {
                throw new Error('Network response was not ok.');
              }
              const responseData = await response.json();
              if(responseData){
                alert('Flight Succesfully Booked')
            }else{
                alert("Error While Booking") 
            }
        
            } catch (error) {
              console.error(error);
              console.log('An error occurred. Please try again.');
            }


        }
    }

  return (
    <div className='Payment_Parent'>
      <div className='Payment_Total'>Total  : {items.Price} </div>
      <div className='Playment_Make' onClick={HandlePayment}>Pay</div>
    </div>
  )
}

export default Payment
