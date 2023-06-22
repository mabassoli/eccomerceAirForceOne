import SearchIcon from "@mui/icons-material/Search";
import "../navBar/navBar.css";
import CartWidget from "../../common/cart/cartWidget";

const NavBar = () => {
	return (
		<div className="container-navbar">
			<div className="container-max-width">
				<img src="../src/assets/logo.svg" alt="logo air force one" />
				<div className="container-navbar__content">
					<div className="container-navbar__content__items">
						<ul>
							<li>
								<a href="#">Sobre Nosotros</a>
							</li>
							<li>
								<a href="#">Modelos</a>
							</li>
							<li>
								<a href="#">Contacto</a>
							</li>
						</ul>
					</div>
					<div className="searchBar">
						<input type="search" placeholder="Buscar" />
						<a href="">
							<SearchIcon></SearchIcon>
						</a>
					</div>
					<CartWidget></CartWidget>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
