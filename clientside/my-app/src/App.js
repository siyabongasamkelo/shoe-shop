import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Products from "./Admin/Products";
import Message from "./Chat/Message";
import Messaging from "./Chat/Messaging";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import AddProdPage from "./Pages/AddProdPage";
import AdminPage from "./Pages/AdminPage";
import AllItemsPage from "./Pages/AllItemsPage";
import CartPge from "./Pages/CartPge";
import CustomerPage from "./Pages/CustomerPage";
import HomePage from "./Pages/HomePage";
import KidsPage from "./Pages/KidsPage";
import LoginPage from "./Pages/LoginPage";
import MenPage from "./Pages/MenPage";
import OneProdPage from "./Pages/OneProdPage";
import OrdersPage from "./Pages/OrdersPage";
import ProductsPage from "./Pages/ProductPage";
// import OrdersPage from "./Pages/OrdersPage";
import ResetPassPage from "./Pages/ResetPassPage";
import ReviewsPage from "./Pages/ReviewsPage";
import ShopPage from "./Pages/ShopPage";
import WomanPage from "./Pages/WomanPage";
import Register from "./Register.js/Register";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/get/item/:id" element={<OneProdPage />} />
        <Route path="/cart" element={<CartPge />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/add" element={<AddProdPage />} />
        <Route path="/Forgot" element={<ForgetPassword />} />
        <Route path="/reset" element={<ResetPassPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/all" element={<AllItemsPage />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/chat" element={<Messaging />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/message/:id" element={<Message />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
