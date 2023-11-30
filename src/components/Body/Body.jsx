import { Products } from "../Products/Products";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { About } from "../About/About";
import { Terms } from "../Terms/Terms";
import { Contacts } from "../Contacts/Contacts";
import ProductSheet from "../ProductSheet/ProductSheet";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import Debug from "../Debug/Debug";
import { HistoryNavigation } from "../HistoryNavigation/HistoryNavigation";
import styles from "./body.module.css"
import AdminPage from "../AdminPanel/AdminPanel";

let products = [
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

export const ProductContext = createContext(products)

export const Body = () => {
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
    <HistoryNavigation>
      <main>
        <div class="wrapper">
          <Header />
            <Routes>
              <Route
                path="/:number"
                element={<ProductSheet/>}
              />
              <Route exact path="/" element={<Products/>} />
              <Route path="/catalog" element={<Products/>}/>
              <Route path="/terms" element={<Terms/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/debug" element={<Debug/>}/>
              <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
          <Footer />
        </div>
      </main>
    </HistoryNavigation>
  );
};
