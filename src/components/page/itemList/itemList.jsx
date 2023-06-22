const ItemList = ({ saludo, cambiarSaludo }) => {
	return (
		<div>
			<h2>{saludo}</h2>
			<button onClick={() => cambiarSaludo("muy bien")}>cambiar saludo</button>
		</div>
	);
};

export default ItemList;
