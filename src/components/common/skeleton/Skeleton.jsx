import { Skeleton } from "@mui/material";

const SkeletonModel = () => {
	return (
		<>
			<Skeleton variant="rectangular" width={210} height={60} />
			{/* <Skeleton variant="circular" width={40} height={40} /> */}
			<Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
			<Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} />
			<Skeleton variant="rounded" width={210} height={60} />
		</>
	);
};

export default SkeletonModel;
