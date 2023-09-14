import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCatalog from "./routes/ClientHome/ProductCatalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<ProductCatalog />} />
          <Route path="product-details" element={<ProductCatalog />} />
          <Route path="product-catalog" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
