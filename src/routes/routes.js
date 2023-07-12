import CartContainer from "../components/page/cart/CartContainer";
import CheckoutContainer from "../components/page/checkout/CheckoutContainer";
import ItemDetail from "../components/page/itemDetail/ItemDetail";
import ItemListContainer from "../components/page/itemList/ItemListContainer";
import Home from "../components/page/home/Home";

export const routes = [
	{
		id: "home",
		path: "/",
		Element: Home,
	},
	{
		id: "all",
		path: "/all",
		Element: ItemListContainer,
	},
	{
		id: "categories",
		path: "/category/:categoryName",
		Element: ItemListContainer,
	},
	{
		id: "detalle",
		path: "/itemDetail/:id",
		Element: ItemDetail,
	},
	{
		id: "cart",
		path: "/cart",
		Element: CartContainer,
	},
	{
		id: "checkout",
		path: "/checkout",
		Element: CheckoutContainer,
	},
];
