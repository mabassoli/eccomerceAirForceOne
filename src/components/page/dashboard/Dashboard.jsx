import { Typography } from "@mui/material";
// import { db } from "../../../firebaseConfig";
// import { products } from "../../../productsMock";
// import { addDoc, collection } from "firebase/firestore";

const Dashboard = () => {
  return (
    <div>
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
          src="../../src/assets/UnderConstruction/cart.jpg"
          alt="under construction image"
          style={{ width: "100%", maxWidth: "700px" }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
