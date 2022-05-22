import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { AdminAddProductView } from "./views/AdminAddProduct";
import { AdminProductsView } from "./views/AdminProduct";
import { AdminEditProductView } from "./views/AdminEditProduct";
import { ProductDetailView } from "./views/ProductDetail";
import { ProductsView } from "./views/Products";
import { DashboardView } from "./views/Dashboard";
import { Home } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { RegisterForm } from "./components/AuthForm/RegisterForm";
import { LoginForm } from "./components/AuthForm/LoginForm"



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produtos' element={<ProductsView />} />
      <Route path='/produtos/:id' element={<ProductDetailView />} />
      <Route path='/portal' element={<PrivateRoute><DashboardView /></PrivateRoute>} />
      <Route path='/portal/produtos' element={<PrivateRoute userTypes={[1]}><AdminProductsView /></PrivateRoute>} />
      <Route path='/portal/produtos/cadastro' element={ <PrivateRoute userTypes={[1]}><AdminAddProductView /></PrivateRoute>} />
      <Route path='/portal/produtos/:id' element={<PrivateRoute userTypes={[1]}><AdminEditProductView /></PrivateRoute>} />
      <Route path='/cadastro' element={<RegisterForm redirectAfterLogin/>} />
      <Route path='/login' element={<LoginForm redirectAfterLogin />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;