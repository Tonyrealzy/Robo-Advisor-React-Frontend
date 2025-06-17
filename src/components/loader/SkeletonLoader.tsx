import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomSkeletonLoader = () => {
  return (
    <div style={{ padding: "1rem" }}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-full h-full"
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Skeleton height={50} width={150} />
          <Skeleton height={50} width={150} />
          <Skeleton height={50} width={150} />
        </div>
      ))}
    </div>
  );
};

export default CustomSkeletonLoader;
