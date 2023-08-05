import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import "./GridPhotos.css"

const GridPhotos = () => {
	const [producto, setProducto] = useState({});

	const { id } = useParams();

	useEffect(() => {
		let productsCollection = collection(db, "products");
		let productRef = doc(productsCollection, id);
		getDoc(productRef).then((res) => {
			setProducto({ ...res.data(), id: res.id });
		});
	}, [id]);

  return (
		<Box sx={{ width: "100%" }}>
			<div className="gridContainer">
				<img className="gridContainerImgs" src={producto.imgDetail1} alt="" />
				<img className="gridContainerImgs" src={producto.imgDetail2} alt="" />
				<img className="gridContainerImgs" src={producto.imgDetail3} alt="" />
				<img className="gridContainerImgs" src={producto.imgDetail4} alt="" />
				<img className="gridContainerImgs" src={producto.imgDetail5} alt="" />
				<img className="gridContainerImgs" src={producto.imgDetail6} alt="" />
			</div>
		</Box>
	);
}

export default GridPhotos