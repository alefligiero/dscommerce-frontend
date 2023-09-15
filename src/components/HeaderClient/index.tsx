import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart.svg";
import "./styles.css";

export default function HeaderClient() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={"/"}>
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <Link to={"/cart"}>
                <img src={cartIcon} alt="Carrinho de compras" />
              </Link>
            </div>
          </div>
          <div className="dsc-logged-user">
            <Link to={"/login"}>Entrar</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
