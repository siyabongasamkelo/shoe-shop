import React from "react";
import Shop from "../Shop/Shop";
import Footer from "../Components/Footer";

const ShopPage = () => {
  return (
    <div>
      <Shop sorts="all" carts="all" sizes="all" genders="all" />
      <Footer />
    </div>
  );
};

export default ShopPage;
