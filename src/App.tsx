import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductCatalog from "./routes/ClientHome/ProductCatalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<ProductCatalog />} />
          <Route path="product-catalog" element={<ProductCatalog />} />
          <Route path="product-details/:productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
