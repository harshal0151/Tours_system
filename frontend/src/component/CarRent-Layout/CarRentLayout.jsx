import React, { Fragment } from "react";
import Routers from "../../router/Routers";

import CarRentHeader from "../CarRent-Header/CarRentHeader";

const CarRentLayout = () => {
  return (
    <Fragment>
      <CarRentHeader />
      <div>
        <Routers />
      </div>
    
    </Fragment>
  );
};

export default CarRentLayout;
