// import Breadcrumbss from "../../common/breadcrumbs/Breadcrumbss"; !! PONER EL BREADCRUMB
import ProductCard from "../../common/productCard/ProductCard";
import SkeletonModel from "../../common/skeleton/Skeleton";

const ItemList = ({ items }) => {
	// let arr = [1, 2, 3, 4];
	let arr = Array.from({ length: 3 }, (_, i) => i);

	return (
		<div
			style={{
				width: "100%",
				maxWidth: "1280px",
				margin: "auto",
			}}
		>
			<h1 className={items.length > 0 ? "hayElementos" : ""}>
				Aca van los producto
			</h1>

			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-evenly",
					flexWrap: "wrap",
					gap: "20px",
				}}
			>
				{items.length > 0
					? items.map((elemento) => {
							return <ProductCard key={elemento.id} elemento={elemento} />;
					  })
					: arr.map((e) => {
							return (
								<div key={e}>
									<SkeletonModel></SkeletonModel>
								</div>
							);
					  })}
			</div>
		</div>
	);
};

export default ItemList;
