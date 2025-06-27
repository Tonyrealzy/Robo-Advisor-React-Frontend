import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  rows?: number;
  columns?: number;
};

const CustomSkeletonLoader: React.FC<Props> = ({ rows = 6, columns = 3 }) => {
  return (
    <div className="w-full h-full p-4 gap-4" style={{ padding: "20px" }}>
      {[...Array(rows)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="w-full flex flex-wrap sm:flex-nowrap gap-4 mb-4"
          style={{ padding: "10px" }}
        >
          {[...Array(columns)].map((_, colIndex) => (
            <div key={colIndex} className="flex-1 min-w-[100px]">
              <Skeleton height={60} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomSkeletonLoader;
