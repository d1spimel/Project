import React, { useState } from "react";
import styles from "./products.css";
import ProductInfo from "../ProductInfo/ProductInfo";

export const Products = ({ products }) => {
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
          return (
            <div key={index} className="product">
              <a href={`${index}`}>
                <img src={product.image} alt={`Product ${index + 1}`} />
                <span className="product__info">Name: {product.name}</span>
                <span className="product__info">Price: {product.price}$</span>
                <span className="product__info">
                  Description: {product.description}
                </span>
                <span className="product__info">
                  Choose:{" "}
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleCheckboxChange(index, e.target.checked)
                    } // Добавляем обработчик изменения чекбокса
                  />
                </span>
              </a>
            </div>
          );
        })}
      </div>
      <p className="checbox__counter">
        Counter of products: {activeCheckboxCount}
      </p>
    </>
  );
};
