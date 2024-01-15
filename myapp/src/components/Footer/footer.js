import React from 'react';
import "./footer.css";

export default function Footer (){
    return (
        <div className="footer">
          <div className="footer--wrapper">
                <div className="footer--desc">
                    <h2><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="clip0">
                        <rect width="48" height="48" fill="white"/>
                        </clipPath>
                      </defs>
                          </svg>GymWeb</h2>
                    <p>Gym Web Application</p>
                    <p id="phone">123-456-789</p>
                    </div>
                <div className="footer--links">
                  <div className="footer--title"> 
                    <h4>Contact Us</h4></div>
                    <a href="/" className="footer--link">Contact</a>
                    <a href="/"  className="footer--link">Support</a>
                 
                </div>
            </div>
          <div className="footer--wrapper">
              <div className="footer--links">
                  <div className="footer--title">
                    <h4>Memberships</h4> </div>
                    <a href="/FAQs" className="footer--link">FAQs</a>
                 
                </div>
              <div className="footer--links">
                  <div className="footer--title">
                    <h4>Social Media</h4></div>
                    <a href="/" target='_blank' rel="noopener noreferrer" className="footer--link">Facebook</a>
                    <a href="/" target='_blank' rel="noopener noreferrer" className="footer--link">Twitter</a>
                    <a href="/" target='_blank' rel="noopener noreferrer" className="footer--link">Instagram</a>
                    <a href="/" target='_blank' rel="noopener noreferrer" className="footer--link">Youtube</a>
                </div>
          </div>
        </div>
    )
}