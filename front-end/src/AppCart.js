import { Header } from "./components/Layout/Header";
import { ProductsView } from "./views/Products";
import { ProductDetailView } from "./views/ProductDetail"


export function AppCart() {
    return (
        <>
        <Header />
        <ProductsView />
        <ProductDetailView />
        </>
    );
}

export default AppCart;