import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import ProductCatalogCard from "../../../components/ProductCatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta TV é muito bonita",
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};
export default function ProductCatalog() {
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
            <ProductCatalogCard product={product} />
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
