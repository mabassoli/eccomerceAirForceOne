import Breadcrumbss from "../../common/breadcrumbs/Breadcrumbss";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
	return (
		<div
			style={{
				width: "100%",
				maxWidth: "1280px",
				margin: "auto",
			}}
		>
			<Breadcrumbss />
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "20px",
				}}
			>
				{items.map((elemento) => {
					return <ProductCard key={elemento.id} elemento={elemento} />;
				})}
			</div>
		</div>
	);
};

export default ItemList;
