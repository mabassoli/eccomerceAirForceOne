import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../../productsMock";
import CounterContainer from "../../common/counter/CounterContainer";
import { Card } from "@mui/material";

const ItemDetail = () => {
	const [producto, setProducto] = useState({});

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let productoSeleccionado = products.find((elemento) => elemento.id === +id);
		const tarea = new Promise((res, rej) => {
			res(productoSeleccionado);
		});
		tarea.then((res) => setProducto(res));
	}, [id]);

	const onAdd = () => {
		navigate("/cart");
	};

	return (
		<Card sx={{ width: 350 }}>
			<h2>{producto.legend}</h2>
			<h2>{producto.title}</h2>
			<h2>{producto.description}</h2>
			<h4>{producto.price}</h4>
			<CounterContainer stock={producto.stock} onAdd={onAdd} />
		</Card>
	);
};

export default ItemDetail;
