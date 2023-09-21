import React from 'react'
import { Asset7, Asset8, Asset9, flag1, flag2, flag3, flag4, flag5, flag6 } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
            <div className="grid2">
              <div className="grid2-1">
                <p>
                  <img src={flag1} alt="" /> Trondheim
                </p>
              </div>
              <div className="grid2-1">
                <p>
                  <img src={flag2} alt="" /> Sixt
                </p>
              </div>
              <div className="grid2-1">
                <p>
                  <img src={flag3} alt="" /> Bransgore
                </p>
              </div>
              <div className="grid2-1">
                <p>
                  <img src={flag4} alt="" /> Cala Angulia
                </p>
              </div>
              <div className="grid2-1">
                <p>
                  <img src={flag5} alt="" /> Chiusanico
                </p>
              </div>
              <div className="grid2-1">
                <p>
                  <img src={flag6} alt="" /> Kavousion
                </p>
              </div>
              <div className="grid2-1">
                <p>
                  <img src={flag5} alt="" /> Pieve Di Ledro
                </p>
              </div>
              <div className="grid2-1">
                <p>
                  <img src={flag2} alt="" /> Vierville-sur-Mer
                </p>
              </div>
              <button><FontAwesomeIcon icon={faSearch}/> Discover</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSection