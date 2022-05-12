import { Route, Routes } from "react-router-dom";
import { ProductDetailView } from "./views/ProductDetail";
import { ProductsView } from "./views/Products";
import { Home } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { InscriptionForm } from "./views/Login/InscriptionForm";
import {Login} from "./views/Login/login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produtos' element={<ProductsView />} />
      <Route path='/produtos/:id' element={<ProductDetailView />} />
      <Route path='/login' element={<Login />} />
      <Route path='/formulario' element={<InscriptionForm />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;