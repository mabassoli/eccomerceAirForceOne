import { Link } from "react-router-dom";
import "./Footer.css";
import LogoFooter from "../../../assets/Logo/LogoFooter";
import "../navBar/NavBar.css";

const Footer = () => {
	return (
		<div className="footerContainer">
			<Link to="/" className="logo-brand">
				<LogoFooter />
			</Link>
			<h4>Todos los derechos reservados</h4>
		</div>
	);
};

export default Footer;
