import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

const Breadcrumbss = (elemento) => {
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb" style={{ padding: "20px" }}>
				<Link
					underline="hover"
					color="inherit"
					to={`/itemDetail/${elemento.id}`}
				>
					Air Force 1
				</Link>
				<Link
					underline="hover"
					color="text.primary"
					to={`/itemDetail/${elemento.id}`}
					aria-current="page"
				>
					Todos
				</Link>
			</Breadcrumbs>
		</div>
	);
};

export default Breadcrumbss;
