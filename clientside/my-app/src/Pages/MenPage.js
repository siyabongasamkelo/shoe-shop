import React from "react";
import Shop from "../Shop/Shop";
import Footer from "../Components/Footer";

const MenPage = () => {
  return (
    <div>
      <Shop sorts="all" carts="all" sizes="all" genders="Male" />
      <Footer />
    </div>
  );
};

export default MenPage;
