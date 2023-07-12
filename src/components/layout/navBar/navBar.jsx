import "../navBar/NavBar.css";
import Logo from "../../../assets/Logo/Logo";
import SearchIcon from "@mui/icons-material/Search";
import CartWidget from "../../common/cart/cartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="container-navbar">
			<div className="container-max-width">
				<Link to="/" className="logo-brand">
					<Logo />
				</Link>
				<div className="container-navbar__content">
					<div className="container-navbar__content__items">
						<ul className="categories">
							<Link to="/all">Todos</Link>
							<Link to="/category/man">Hombre</Link>
							<Link to="/category/woman">Mujer</Link>
						</ul>
					</div>
					<div className="searchBar">
						<input type="search" placeholder="Buscar" />
						<a href="">
							<SearchIcon />
						</a>
					</div>
					<CartWidget />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
