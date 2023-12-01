// Products.jsx

import React, { useState, useEffect, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./products.module.css";
import { ProductContext } from "../../providers/ProductProvider";
import AddProductForm from "../AddProduct/AddProductForm";
import { Link } from "react-router-dom";

export const Products = () => {
  const [activeCheckboxCount, setActiveCheckboxCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCheckboxChange = (index, isChecked) => {
    if (isChecked) {
      setActiveCheckboxCount((prevCount) => prevCount + 1);
    } else {
      setActiveCheckboxCount((prevCount) => prevCount - 1);
    }
  };

  const { products } = useContext(ProductContext);

  // Check if products is an array
  if (!Array.isArray(products)) {
    console.error("Products is not an array:", products);
    // Handle the error or return a fallback
    return <p>Error loading products</p>;
  }

  return (
    <>
      <CSSTransition
        in={isMounted}
        appear
        timeout={1500}
        classNames={{
          enter: styles.products__containerEnter,
          enterActive: styles.products__containerEnterActive,
          exit: styles.products__containerExit,
          exitActive: styles.products__containerExitActive,
        }}
        unmountOnExit
      >
        <div className={styles.products__container}>
          {products.map((product, index) => (
            <div key={index} className={styles.product}>
              <Link to={`${index}`}>
                <img src={product.image} alt={`Product ${index + 1}`} />
                <span className={styles.product__info}>Name: {product.name}</span>
                <span className={styles.product__info}>Price: {product.price}$</span>
                <span className={styles.product__info}>Description: {product.description}</span>
                <span className={styles.product__info}>
                  Choose:{" "}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                    className="product__input"
                  />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </CSSTransition>
      <p className={styles.checbox__counter}>Counter of products: {activeCheckboxCount}</p>
      <AddProductForm/>
    </>
  );
};
