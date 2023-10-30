import React from "react";
import Shop from "../Shop/Shop";
import Footer from "../Components/Footer";

const WomanPage = () => {
  return (
    <div>
      <Shop sorts="all" carts="all" sizes="all" genders="Female" />
      <Footer />
    </div>
  );
};

export default WomanPage;
