import { createContext, useState } from "react";

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [data, setData] = useState([
    {
      key: "1",
      type: "Vegetable",
      name: "Apple",
      price: "28.00",
      image: require("./assets/Data/Image_101.png"),
    },
    {
      key: "2",
      type: "Vegetable",
      name: "Pearl",
      price: "28.00",
      image: require("./assets/Data/Image_107.png"),
    },
    {
      key: "3",
      type: "Vegetable",
      name: "Coconut",
      price: "28.00",
      image: require("./assets/Data/Image_105.png"),
    },
    {
      key: "4",
      type: "Vegetable",
      name: "Orange",
      price: "28.00",
      image: require("./assets/Data/Image_106.png"),
    },
    {
      key: "5",
      type: "Vegetable",
      name: "Apricot",
      price: "28.00",
      image: require("./assets/Data/Image_102.png"),
    },
    {
      key: "6",
      type: "Vegetable",
      name: "Avocado",
      price: "28.00",
      image: require("./assets/Data/Image_103.png"),
    },

    {
      key: "7",
      type: "Seafood",
      name: "Lobster Alaska",
      price: "28.00",
      image: require("./assets/Data/lobster-alaska.png"),
    },
    {
      key: "8",
      type: "Seafood",
      name: "King Crab",
      price: "28.00",
      image: require("./assets/Data/kingcrab.png"),
    },
    {
      key: "9",
      type: "Seafood",
      name: "Shrimp",
      price: "28.00",
      image: require("./assets/Data/Image_95.png"),
    },
    {
      key: "10",
      type: "Seafood",
      name: "Squid",
      price: "28.00",
      image: require("./assets/Data/squid.png"),
    },
    {
      key: "11",
      type: "Seafood",
      name: "Octopus",
      price: "28.00",
      image: require("./assets/Data/octopus.png"),
    },
    {
      key: "12",
      type: "Seafood",
      name: "Oyster",
      price: "28.00",
      image: require("./assets/Data/oyster.png"),
    },

    {
      key: "13",
      type: "Drink",
      name: "Orange Juice",
      price: "28.00",
      image: require("./assets/Data/Image_96.png"),
    },
    {
      key: "14",
      type: "Drink",
      name: "Watermelon Juice",
      price: "28.00",
      image: require("./assets/Data/watermelon-juice.png"),
    },
    {
      key: "15",
      type: "Drink",
      name: "Tomato Juice",
      price: "28.00",
      image: require("./assets/Data/tomato-juice.png"),
    },
    {
      key: "16",
      type: "Drink",
      name: "Lemon Juice",
      price: "28.00",
      image: require("./assets/Data/lemon-juice.png"),
    },
    {
      key: "17",
      type: "Drink",
      name: "Mango Juice",
      price: "28.00",
      image: require("./assets/Data/mango-juice.png"),
    },
    {
      key: "18",
      type: "Drink",
      name: "Cranberry Juice",
      price: "28.00",
      image: require("./assets/Data/cranberry-juice.png"),
    },
  ]);

  const updateQuantity = (key) => {
    setData((prevData) =>
      prevData.map((product) =>
        product.key === key ? { ...product, sl: product.sl + 1 } : product
      )
    );
  };

  const decrementQuantity = (key) => {
    setData((prevData) =>
      prevData.map((data) =>
        data.key === key ? { ...data, sl: Math.max(0, data.sl - 1) } : data
      )
    );
  };

  const resetQuantities = () => {
    setData((prevData) => prevData.map((data) => ({ ...data, sl: 0 })));
  };

  return (
    <BasketContext.Provider
      value={{
        data,
        updateQuantity,
        decrementQuantity,
        resetQuantities,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export { BasketContext, BasketProvider };