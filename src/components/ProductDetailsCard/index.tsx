import computerImg from "../../assets/computer.png";
import ProductCategory from "../ProductCategory";
import "./styles.css";

export default function ProductDetailsCard() {
  return (
    <div className="dsc-card dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={computerImg} alt="Computador" />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>R$ 5000,00</h3>
        <h4>Computador Gamer XT</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          quaerat provident iusto id, ad excepturi itaque eveniet ratione illum
          nam! Harum vero tempore dolorum minima libero tempora, in cupiditate
          earum!
        </p>
        <div className="dsc-category-container">
          <ProductCategory />
          <ProductCategory />
        </div>
      </div>
    </div>
  );
}
