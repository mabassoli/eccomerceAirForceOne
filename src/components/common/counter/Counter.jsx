import "./Counter.css"

const Counter = ({ contador, sumar, restar, onAdd }) => {
	return (
		<div>
			<button className="botonesDetalles" onClick={sumar}>
				sumar
			</button>
			<h3>Cantidad de elementos seleccionados: {contador}</h3>
			<button className="botonesDetalles" onClick={restar}>
				restar
			</button>

			<button className="botonesDetalles" onClick={() => onAdd(contador)}>
				Agregar al carrito
			</button>
		</div>
	);
};

export default Counter;
