import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { Card } from "@mui/material";

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
    <Card sx={{ width: 350 }}>
      <h2>{producto.legend}</h2>
      <h2>{producto.title}</h2>
      <h2>{producto.description}</h2>
      <h4>{producto.price}</h4>
      <img src={producto.img} alt="" />

      {(typeof totalQuantity === "undefined" ||
        producto.stock > totalQuantity) &&
        producto.stock > 0 && (
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        )}

      {producto.stock === 0 && <h2>No hay stock</h2>}

      {typeof totalQuantity !== "undefined" &&
        totalQuantity === producto.stock && (
			<>
				<h2>No podes agregar más zapas al carrito porque no hay más en stock</h2>
				<div>
					<p>Dejanos tu email y te avisamos cuando haya stock nuevamente</p>
					<input type="text" />
				</div>
			</>
        )}

      <ToastContainer />
    </Card>
  );
};

export default ItemDetail;
