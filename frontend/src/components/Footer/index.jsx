import React from 'react'
import { FooterBottom, FooterTop } from './style'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#262626" }}>
      <FooterTop>
        <div className="container">
          <div className="row">
            <div className="col-4 px-2">
              <h3>About The Hexa Template</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
              <div className="sosial-links">
                <ul>
                  <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="/"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-4 px-3">
              <h3>Contact Info</h3>
              <div className="info">
                <ul>
                  <li>Address: <br /> <span>34 Street Name, City Name Here, United States</span></li>
                  <li>Telephone: <br /> <span>+1 242 4942 290</span></li>
                  <li>Email: <br /> <span>info@yourdomain.com</span></li>
                </ul>
              </div>
            </div>
            <div className="col-4 px-5">
              <h3>Quick Links</h3>
              <div className="link">
                <ul>
                  <li>About</li>
                  <li>Terms of Use</li>
                  <li>Disclaimers</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FooterTop>
      <FooterBottom>
        <p>
          Copyright © 2023 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <a href="/">Colorlib</a>
        </p>
      </FooterBottom>
    </footer>
  )
}

export default Footer