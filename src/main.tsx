import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct.tsx";
import Cart from "./components/Cart/Cart.tsx";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import { CartContextProvider } from "./Context/CartContext.tsx";
import { ProductContextProvider } from "./Context/ProductContext.tsx";
import SingleProduct from "./components/SingleProduct/SingleProduct.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
