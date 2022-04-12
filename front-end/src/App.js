import { Route, Routes } from "react-router-dom";
import { ProductsView } from "./views/Products";
import { Home } from "./views/Home";
import { NotFoundView } from "./views/NotFound"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produtos' element={<ProductsView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;