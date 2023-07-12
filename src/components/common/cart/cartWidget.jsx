import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
	return (
		<>
			<Link to="/checkout">
				<Badge badgeContent={2} color="primary" className="cart">
					<ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
				</Badge>
			</Link>
		</>
	);
};

export default CartWidget;
