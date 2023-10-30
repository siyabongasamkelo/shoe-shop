import React from "react";
import Shop from "../Shop/Shop";
import Footer from "../Components/Footer";

const KidsPage = () => {
  return (
    <div>
      <Shop sorts="all" carts="Kids" sizes="all" genders="all" />
      <Footer />
    </div>
  );
};

export default KidsPage;
