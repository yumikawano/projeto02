import { useState } from "react";
import { Header } from "./components/Layout/Header";
import { ProductsView } from "./views/Products";
import { ProductDetailView } from "./views/ProductDetail"


export function AppCart() {
    const [productsCard, setProductsCard] = useState([])
    return (
        <>
        <Header productsCard={productsCard} setProductsCard={setProductsCard} />
        <ProductsView productsCard={productsCard} setProductsCard={setProductsCard} />
        <ProductDetailView productsCard={productsCard} setProductsCard={setProductsCard} />
        </>
    );
}

export default AppCart;