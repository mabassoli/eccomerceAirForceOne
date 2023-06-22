import { useState } from "react";
import NavBar from "./components/layout/navBar/navBar";
import ItemList from "./components/page/itemList/itemList";

const App = () => {
	const [saludo, setSaludo] = useState("hola como estas");

	const cambiarSaludo = (nuevoSaludo) => {
		setSaludo(nuevoSaludo);
	};

	return (
		<>
			<NavBar></NavBar>
			<ItemList saludo={saludo} cambiarSaludo={cambiarSaludo}></ItemList>
		</>
	);
};

export default App;
