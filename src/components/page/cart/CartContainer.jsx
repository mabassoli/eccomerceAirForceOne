import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./CartContainer.css"

const CartContainer = () => {
	const { cart, clearCart, deleteById, getTotalPrice } =
		useContext(CartContext);

	let total = getTotalPrice();

	const limpiar = () => {
		Swal.fire({
			title: "Estas a punto de vaciar el carrito, esta bien?",
			showDenyButton: true,
			confirmButtonText: "Si, vaciar!",
			denyButtonText: `No, me confundí 😱`,
		}).then((result) => {
			if (result.isConfirmed) {
				clearCart();
				Swal.fire("Carrito limpiado exitosamente", "", "success");
			} else if (result.isDenied) {
				Swal.fire("El carrito queda como estaba", "", "info");
			}
		});
	};
	return (
		<>		
			<div className="cartContainer">

				{cart.map((elemento) => {
					return (
						<div key={elemento.id} className="cartContainerItems">
							<div>
								<h1>{elemento.title}</h1>
								<h2>{elemento.price}</h2>
								<h3>
									Cantidad de elementos de este producto: {elemento.quantity}
								</h3>
								<button
									className="botonEliminarProductoSeleccionado"
									onClick={() => deleteById(elemento.id)}
								>
									Eliminar Producto
								</button>
								{cart.length > 0 && (
									<button
										className="botonEliminarProductosCarrito"
										onClick={limpiar}
									>
										Vaciar carrito
									</button>
								)}
							</div>
							<img src={elemento.img} alt="" />
						</div>
					);
				})}
			</div>
			<div className="totales">
				<h2>El total es: {total}</h2>
				<Link className="finalizarCompra" to="/checkout">Finalizar compra</Link>
			</div>
		</>
	);
};

export default CartContainer;
