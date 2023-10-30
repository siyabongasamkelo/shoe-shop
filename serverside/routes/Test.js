const router = require("express").Router();

router.get("/products", (req, res) => {
  const theProducts = [
    {
      name: "King Burger",
      price: 50.0,
      description:
        "This burger was made and designed in Italy for hungry people only",
      image: "../images/drinks.jpg",
    },
    {
      name: "Rice and Whatever",
      price: 90.0,
      description: "Perfectly cooked stew to kill your hunger asap",
      image: "../images/drinks.jpg",
    },
    {
      name: "Chocolate Cake",
      price: 75.0,
      description: "I assure you this will be the sweetest cake you ever taste",
      image: "../images/drinks.jpg",
    },
    {
      name: "Orange Juice",
      price: 30.0,
      description: "This juice will kill your thurst 100% dead trust me",
      image: "../images/drinks.jpg",
    },
    {
      name: "Chocolate muffins",
      price: 35.0,
      description:
        "Perfectly bakes soft chocolate muffin to melt in your mouth",
      image: "../images/drinks.jpg",
    },
  ];
  res.send(theProducts);
});

module.exports = router;
