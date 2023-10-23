import { Products } from "../Products/Products";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import ProductSheet from "../ProductSheet/ProductSheet";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export const Body = () => {
  let products = [
    { name: "iPhone", description: "Smartphone", price: "1000" },
    { name: "Xiomi", description: "Smartphone", price: "12000" },
    { name: "Nokia", description: "Smartphone", price: "11000" },
    { name: "iPhone", description: "Smartphone", price: "1000" },
    { name: "Xiomi", description: "Smartphone", price: "12000" },
    { name: "Nokia", description: "Smartphone", price: "11000" },
    { name: "iPhone", description: "Smartphone", price: "1000" },
    { name: "Xiomi", description: "Smartphone", price: "12000" },
    { name: "Nokia", description: "Smartphone", price: "11000" },
    { name: "iPhone", description: "Smartphone", price: "1000" },
    { name: "Xiomi", description: "Smartphone", price: "12000" },
    { name: "Nokia", description: "Smartphone", price: "11000" },
    { name: "iPhone", description: "Smartphone", price: "1000" },
    { name: "Xiomi", description: "Smartphone", price: "12000" },
    { name: "Nokia", description: "Smartphone", price: "11000" },
    { name: "iPhone", description: "Smartphone", price: "1000" },
    { name: "Xiomi", description: "Smartphone", price: "12000" },
    { name: "Nokia", description: "Smartphone", price: "11000" },
    { name: "iPhone", description: "Smartphone", price: "1000" },
    { name: "Xiomi", description: "Smartphone", price: "12000" },
    { name: "Xiomi", description: "Smartphone", price: "12000" },
  ];

  // Массив с путями к изображениям
  const imagePaths = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
    "img/10.png",
    "img/11.png",
  ];
  {
    products.map((product, index) => {
      const randomIndex = Math.floor(Math.random() * imagePaths.length);
      const randomImagePath = imagePaths[randomIndex];
      products[index].image = randomImagePath;
    });
  }
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route
            path="/:number"
            element={<ProductSheet products={products} />}
          />
          <Route path="/" element={<Products products={products} />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};
