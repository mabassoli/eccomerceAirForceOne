import { Skeleton } from "@mui/material";

const SkeletonModel = () => {
	return (
		<div className="skeleton">
			<Skeleton variant="rectangular" width={400} height={400} />
			<Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
			<Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
			<Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} />
			<Skeleton variant="text" sx={{ fontSize: "1rem" }} width={80} />
		</div>
	);
};

export default SkeletonModel;
