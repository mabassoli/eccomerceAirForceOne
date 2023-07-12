import { Typography } from "@mui/material";
import { width } from "@mui/system";

const Home = () => {
	return (
		<div
			style={{
				maxWidth: "1280px",
				margin: "auto",
				textAlign: "center",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexWrap: "wrap",
				gap: "40px",
				padding: "40px",
			}}
		>
			<Typography
				color={"#FFCB74"}
				fontWeight={"400"}
				fontSize={"3rem"}
				style={{}}
			>
				Site Under Construction
			</Typography>
			<img
				src="../../src/assets/UnderConstruction/under-construction.png"
				alt="under construction image"
				style={{ width: "100%", maxWidth: "700px" }}
			/>
		</div>
	);
};

export default Home;
