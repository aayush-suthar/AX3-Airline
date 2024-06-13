import React, { useState } from 'react'
import './BookPage.css'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import FlightUserDetails from '../../Components/FlightUserDetails/FlightUserDetails'
import SeatShow from '../../Components/SeatShow/SeatShow'
import Payment from '../../Components/Payment/Payment'

const BookPage = () => {
  const { state } = useLocation();
  if(state.pass_user_info == null){
    return (
      <>
      phele login kar
      </>
    )
  }
  const items = state.pass_items
  const user_info = state.pass_user_info
  
  const [seat , setseat] = useState()
  const HandleSeat = (myseat)=>{
    setseat(myseat)
  }
  

  return (
    <div className='Complete_Booking'>

      <Navbar user_info={user_info} />
      <div>

        <div className='Flight_Book_Parent'>
          <FlightUserDetails items={items} user_info={user_info} />
        </div>
        <div className='Seat_Select_Parent'>
          <SeatShow items={items} user_info={user_info} getSeat = {HandleSeat} />
        </div>
      </div>
    
      <div className='MakePayment'>
            <Payment items={items} selected_seat = {seat} user_info = {user_info}/>
        </div>

    </div>

  )
}

export default BookPage
