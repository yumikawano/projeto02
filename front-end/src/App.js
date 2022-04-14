import { Route, Routes } from "react-router-dom";
import { ProductDetailView } from "./views/ProductDetail";
import { ProductsView } from "./views/Products";
import { Home } from "./views/Home";
import { NotFoundView } from "./views/NotFound"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produtos' element={<ProductsView />} />
      <Route path='/cursos/:id' element={<ProductDetailView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;