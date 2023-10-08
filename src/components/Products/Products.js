import React, { useState } from "react";
import styles from "./products.css";

export const Products = ({ products }) => {
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

  // Состояние для отслеживания активных чекбоксов
  const [activeCheckboxCount, setActiveCheckboxCount] = useState(0);

  // Обработчик изменения состояния чекбокса
  const handleCheckboxChange = (index, isChecked) => {
    if (isChecked) {
      setActiveCheckboxCount((prevCount) => prevCount + 1);
    } else {
      setActiveCheckboxCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="products__container">
        {products.map((product, index) => {
          // Генерируем случайный индекс для выбора изображения
          const randomIndex = Math.floor(Math.random() * imagePaths.length);
          const randomImagePath = imagePaths[randomIndex];

          return (
            <div key={index} className="product">
              <a href={`${index}`}>
                <img src={randomImagePath} alt={`Product ${index + 1}`} />
                <span className="product__info">Name: {product.name}</span>
                <span className="product__info">Price: {product.price}$</span>
                <span className="product__info">
                  Description: {product.description}
                </span>
                <span className="product__info">
                  Choose:{" "}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(index, e.target.checked)} // Добавляем обработчик изменения чекбокса
                  />
                </span>
              </a>
            </div>
          );
        })}
      </div>
      <p className="checbox__counter">Counter of products: {activeCheckboxCount}</p>
    </>
  );
};
