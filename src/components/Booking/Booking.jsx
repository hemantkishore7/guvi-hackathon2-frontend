import React from 'react'
import "./Ticket"


function Booking() {

// const container = document.querySelector(".container");
// const seats = document.querySelectorAll(".row .seat:not(.occupied)")
// const count = document.getElementById("count");
// const total = document.getElementById("total");

let ticketPrice = 190;
const seats = 100;

console.log(ticketPrice);

// container.addEventListener('click',(e)=>{
//   if(e.target.classList.contains('seat')){
//     console.log(e.target)
//   }

// })

  return (
    <>
    <div className='booking-page'>
   <ul className='showcase'>
    <li>
      <div className='seat'></div>
      <small>N/A</small>
    </li>

    <li>
      <div className='seat selected'></div>
      <small>Selected</small>
    </li>

    <li>
      <div className='seat occupied'></div>
      <small>Occupied</small>
    </li>
   </ul>

   <div className='container' >
   <div className='screen'>Screen</div>
   <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
  </div>

  <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
  </div>

  <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
  </div>

  <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat occupied'></div>
   <div className='seat occupied'></div>
   <div className='seat occupied'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
  </div>

  <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
  </div>

  <div className='row'>
   <div className='seat occupied'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat occupied'></div>
   <div className='seat occupied'></div>
  </div>

  <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
  </div>

  <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
  </div>

  <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
  </div>

  <div className='row'>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat'></div>
   <div className='seat occupied'></div>
   <div className='seat occupied'></div>
   <div className='seat occupied'></div>
   <div className='seat occupied'></div>
   <div className='seat occupied'></div>
   <div className='seat occupied'></div>
  </div>

   </div>

   <p className='text'>
     You have selected <span id='count'>0</span> seats for a price of Rs.<span id='total'>0</span>
   </p>
   <button type='submit'>Pay</button>
   {/* <script src='ticket.js'></script> */}
   {
   
   }
   
   </div>
   

   </>
  )
}


export default Booking