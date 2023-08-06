import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { Card } from "@mui/material";
import GridPhotos from "./gridPhotos";
import "./CardDetails.css"

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [producto, setProducto] = useState({});

  const { id } = useParams();

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);

    toast.success("Producto agregado exitosamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
		<div className="CardDetailsContainer">
			<div className="CardDetails">
				<div className="CardDetailsItems">
					<h2>{producto.legend}</h2>
					<h2>{producto.title}</h2>
					<h3>{producto.description}</h3>
					<h2>{producto.price}</h2>

					{(typeof totalQuantity === "undefined" ||
						producto.stock > totalQuantity) &&
						producto.stock > 0 && (
							<>
								<CounterContainer
									stock={producto.stock}
									onAdd={onAdd}
									initial={totalQuantity}
								/>
								<h2>Tienes agregado {totalQuantity} productos en el carrito</h2>
							</>
						)}

					{producto.stock === 0 && <h2>No hay stock</h2>}
				</div>

				<GridPhotos></GridPhotos>
			</div>

			{typeof totalQuantity !== "undefined" &&
				totalQuantity === producto.stock && (
					<>
						<h2>
							No podes agregar más zapas al carrito porque no hay más en stock
						</h2>
						<div>
							<p>Dejanos tu email y te avisamos cuando haya stock nuevamente</p>
							<input type="email" />
						</div>
					</>
				)}

			<ToastContainer />
		</div>
	);
};

export default ItemDetail;
