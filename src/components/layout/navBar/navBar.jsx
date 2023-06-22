import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../navBar/navBar.css";

const NavBar = () => {
	return (
		<div className="container-navbar">
			<img src="" alt="" />
			<div>
				<div className="container-navbar__items">
					<p>Sobre Nosotros</p>
					<p>Modelos</p>
					<p>Contacto</p>
				</div>
				<div></div>
				<a href="">
					<ShoppingCartIcon></ShoppingCartIcon>
				</a>
			</div>
		</div>
	);
};

export default NavBar;
