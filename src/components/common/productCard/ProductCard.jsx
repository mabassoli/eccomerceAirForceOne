import { CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento, isInItemList = true }) => {
  return (
    <div style={{ width: "400px" }}>
      <Link to={`/itemDetail/${elemento.id}`}>
        <CardMedia component="img" image={elemento.img} />
        <Typography
          color={"#FFCB74"}
          fontWeight={"500"}
          fontSize={"1rem"}
          paddingBottom={"5px"}
        >
          {elemento.legend}
        </Typography>
        <Typography color={"#000"} fontSize={"1rem"}>
          {elemento.title}
        </Typography>
        <Typography color={"#A2A2A2"} fontSize={"1rem"} paddingBottom={"5px"}>
          {elemento.description}
        </Typography>
        <div style={{ display: "flex", gap: "10px" }}>
          <Typography color={"#000"} fontWeight={"600"} fontSize={"1rem"}>
            {elemento.price}
          </Typography>
          <Typography
            color={"#A2A2A2"}
            fontWeight={"600"}
            fontSize={"1rem"}
            style={{ textDecoration: "line-through" }}
          >
            {elemento.sale}
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
