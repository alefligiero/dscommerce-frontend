import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import ProductCatalogCard from "../../../components/ProductCatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as productService from '../../../services/product-service'


export default function ProductCatalog() {
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
              {
                productService.findAll().map(
                  product => <ProductCatalogCard key={product.id} product={product} />
                )
              }
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
