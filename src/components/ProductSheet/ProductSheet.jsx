import React from "react";
import CommentForm from "../Comments/Comments";
import ProductInfo from "../ProductInfo/ProductInfo";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../providers/ProductProvider";
import styles from "./productSheet.module.css";

const ProductSheet = () => {
  const { number } = useParams();

  return (
    <ProductContext.Consumer>
      {(context) => {
        let { products } = context;
        let product;

        if (products && products.length > 0) {
          if (number >= 0 && number < products.length) {
            product = products[number];
          }
        }

        return (
          <div className={styles.product__sheet__container}>
            <ProductInfo product={product} number={number} />
            <CommentForm />
          </div>
        );
      }}

    </ProductContext.Consumer>
    
  );
};

export default ProductSheet;
