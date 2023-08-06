import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
	const {getTotalQuantity} = useContext(CartContext);

	let total = getTotalQuantity();
	
	return (
		<>
			<Link to="/cart">
				<Badge badgeContent={total} showZero color="primary" className="cart">
					<ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
				</Badge>
			</Link>
		</>
	);
};

export default CartWidget;
