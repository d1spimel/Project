import React, { useState } from "react";
import styles from "./productInfo.module.css";

const ProductInfo = ({ product }) => {
  const [usdPrice, setUsdPrice] = useState(0);
  return (
    <div>
      <div className={styles.product__info__container}>
        <h2>{product.name}</h2>
        <img src={product.image} className={styles.product__image}/>
        <span className={styles.product__description}>{product.description}</span>
        <div className={styles.convert__container}>
          <span className={styles.product__price}>Price: {product.price} UAH</span>
          <button className={styles.product__button} onClick={() => setUsdPrice((product.price / 37.5).toFixed(2))}>
            Converting
          </button>
          <span className={styles.product__price}>Price: {usdPrice} USD</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
