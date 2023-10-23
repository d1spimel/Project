import React from 'react';
import  CommentForm  from "../Comments/Comments";
import { Header } from "../Header/Header";
import  ProductInfo  from "../ProductInfo/ProductInfo"
import { useParams } from 'react-router-dom';
import styles from './productSheet.css';

const ProductSheet = ({products}) => {
    const { number } = useParams();
    let product;
    { products.map((product_, index) => {
        if (index == number) {
            product = product_
        }
    })}
    return (
        <div className="product__sheet__container">
            <ProductInfo product={product} number = {number} />
            <CommentForm />
        </div>
    );
};

export default ProductSheet;