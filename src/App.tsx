import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductCatalog from "./routes/ClientHome/ProductCatalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import Cart from "./routes/ClientHome/Cart";
import { useState } from "react";
import { ContextCartCount } from "./utils/context-cart";

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<ProductCatalog />} />
            <Route path="product-catalog" element={<ProductCatalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}
