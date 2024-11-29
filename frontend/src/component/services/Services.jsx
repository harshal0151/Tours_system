import React from "react";
import "./service.css";
import img from "../../assets/all-images/tout-services/hotel .gif";
import img2 from "../../assets/all-images/tout-services/car.gif";
import img3 from "../../assets/all-images/tout-services/airplane.gif";
import img4 from "../../assets/all-images/tout-services/guide.gif";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <ul>
        <a href="https://food-app-react-cyan.vercel.app/ " className="Link">
          <li>
            <div className="servies_card">
              <img src={img} alt="" />
              <p>Food Services</p>
            </div>
          </li>
        </a>

        <Link to="/CarRent" className="Link">
          <li>
            <div className="servies_card">
              <img src={img2} alt="" />
              <p>Car Rentals</p>
            </div>
          </li>
        </Link>

        <a
          href="https://www.skyscanner.co.in/?&utm_source=google&utm_medium=cpc&utm_campaign=IN-Flights-Search-EN-Generics-New&utm_term=flight+booking&associateID=SEM_FLI_19465_00000&campaign_id=19347634260&adgroupid=147703716634&keyword_id=kwd-18709060&gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp457B_TPITE-pN0x9kAR-kWcQJOMcOLFmD22z_qm13j1Zx4IxSy2dW_hoCt3MQAvD_BwE&gclsrc=aw.ds"
          className="Link"
        >
          <li>
            <div className="servies_card">
              <img src={img3} alt="" />
              <p>Flights</p>
            </div>
          </li>
        </a>

        <Link to="/Ai" className="Link">
          <li>
            <div className="servies_card">
              <img src={img4} alt="" />
              <p>Tour Guides</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Services;
