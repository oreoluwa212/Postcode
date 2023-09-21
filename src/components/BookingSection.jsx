import React from 'react'
import { Asset7, Asset8, Asset9 } from '../assets';

const BookingSection = () => {
  return (
    <div className="booking-section-container">
      <div className="booking-section">
        <div className="booking-group">
          <div className="booking-upper">
            <h2>Booking.com</h2>
            <div className="booking">
              <div className="bg-white"></div>
            </div>
          </div>
          <div className="booking-grid">
            <div className="grid1">
              <img src={Asset7} alt="" />
            </div>
            <div className="grid1">
              <img src={Asset8} alt="" />
            </div>
            <div className="grid1">
              <img src={Asset9} alt="" />
            </div>
            <div className="grid1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSection