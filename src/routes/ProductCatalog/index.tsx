import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import ProductCatalogCard from "../../components/ProductCatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";

export default function ProductCatalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
            <ProductCatalogCard />
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
