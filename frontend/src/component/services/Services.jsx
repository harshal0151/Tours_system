import React from "react";
import "./service.css";
import img from "../../assets/images/hero.img001.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <ul>
        <Link to= "/CarRent " className="Link">
          <li>
            <div className="servies_card">
              <img src={img} alt="" />
              <p>Hotel / stays</p>
            </div>
          </li>
        </Link>

        <Link className="Link">
          <li>
            <div className="servies_card">
              <img src={img} alt="" />
              <p>Car Rentals</p>
            </div>
          </li>
        </Link>

        <Link className="Link">
          <li>
            <div className="servies_card">
              <img src={img} alt="" />
              <p>Flights</p>
            </div>
          </li>
        </Link>

        <Link className="Link">
          <li>
            <div className="servies_card">
              <img src={img} alt="" />
              <p>Tour Guides</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Services;
