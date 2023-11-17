import React from "react";
import CommentForm from "../Comments/Comments";
import ProductInfo from "../ProductInfo/ProductInfo";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Body/Body";
import styles from "./productSheet.css";


const ProductSheet = () => {
  const { number } = useParams();

  return (
    <ProductContext.Consumer>
      {products => {
        let product;

        products.forEach((product_, index) => {
          if (index == number) {
            product = product_;
          }
        });

        return (
          <div className="product__sheet__container">
            <ProductInfo product={product} number={number} />
            <CommentForm />
          </div>
        );
      }}
    </ProductContext.Consumer>
  );
};

export default ProductSheet;
