// ProductProvider.js

import React, { createContext, useState } from "react";

export const ProductContext = createContext();


let initialProducts = [
  { name: "iPhone", description: "Smartphone", price: "1000" },
  { name: "Xiaomi", description: "Smartphone", price: "12000" },
  { name: "Nokia", description: "Smartphone", price: "11000" },
  { name: "iPhone", description: "Smartphone", price: "1000" },
  { name: "Xiaomi", description: "Smartphone", price: "12000" },
  { name: "Nokia", description: "Smartphone", price: "11000" },
  { name: "iPhone", description: "Smartphone", price: "1000" },
  { name: "Xiaomi", description: "Smartphone", price: "12000" },
  { name: "Nokia", description: "Smartphone", price: "11000" },
  { name: "iPhone", description: "Smartphone", price: "1000" },
  { name: "Xiaomi", description: "Smartphone", price: "12000" },
  { name: "Nokia", description: "Smartphone", price: "11000" },
  { name: "iPhone", description: "Smartphone", price: "1000" },
  { name: "Xiaomi", description: "Smartphone", price: "12000" },
  { name: "Nokia", description: "Smartphone", price: "11000" },
  { name: "iPhone", description: "Smartphone", price: "1000" },
  { name: "Xiaomi", description: "Smartphone", price: "12000" },
  { name: "Nokia", description: "Smartphone", price: "11000" },
  { name: "iPhone", description: "Smartphone", price: "1000" },
  { name: "Xiaomi", description: "Smartphone", price: "12000" },
  { name: "Xiaomi", description: "Smartphone", price: "12000" },
];


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};