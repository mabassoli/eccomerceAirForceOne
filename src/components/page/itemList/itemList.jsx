// import Breadcrumbss from "../../common/breadcrumbs/Breadcrumbss"; !! PONER EL BREADCRUMB
import ProductCard from "../../common/productCard/ProductCard";
import SkeletonModel from "../../common/skeleton/Skeleton";
import "./ItemList.css"

const ItemList = ({ items }) => {
	// let arr = [1, 2, 3, 4];
	let arr = Array.from({ length: 3 }, (_, i) => i);

	return (
		<div className="itemListContainer">
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
	);
};

export default ItemList;
