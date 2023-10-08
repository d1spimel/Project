import { Products } from "../Products/Products"
import { Footer } from "../Footer/Footer"

export const Body = () => {
    let products = [
        {name: "iPhone", description: "Smartphone",price: "1000"},
        {name: "Xiomi", description: "Smartphone",price: "12000"},
        {name: "Nokia", description: "Smartphone",price: "11000"},
        {name: "iPhone", description: "Smartphone",price: "1000"},
        {name: "Xiomi", description: "Smartphone",price: "12000"},
        {name: "Nokia", description: "Smartphone",price: "11000"},
        {name: "iPhone", description: "Smartphone",price: "1000"},
        {name: "Xiomi", description: "Smartphone",price: "12000"},
        {name: "Nokia", description: "Smartphone",price: "11000"},
        {name: "iPhone", description: "Smartphone",price: "1000"},
        {name: "Xiomi", description: "Smartphone",price: "12000"},
        {name: "Nokia", description: "Smartphone",price: "11000"},
        {name: "iPhone", description: "Smartphone",price: "1000"},
        {name: "Xiomi", description: "Smartphone",price: "12000"},
        {name: "Nokia", description: "Smartphone",price: "11000"},
        {name: "iPhone", description: "Smartphone",price: "1000"},
        {name: "Xiomi", description: "Smartphone",price: "12000"},
        {name: "Nokia", description: "Smartphone",price: "11000"},
        {name: "iPhone", description: "Smartphone",price: "1000"},
        {name: "Xiomi", description: "Smartphone",price: "12000"},
        {name: "Xiomi", description: "Smartphone",price: "12000"},

    ]
    return (
        <main>
            <Products products={products}/>
            <Footer/>
        </main>
    )
}