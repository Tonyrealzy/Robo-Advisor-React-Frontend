import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  rows?: number;
  columns?: number;
};

const CustomSkeletonLoader: React.FC<Props> = ({ rows = 5, columns = 3 }) => {
  return (
    <div className="w-full px-4 py-2">
      {[...Array(rows)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="w-full flex flex-wrap sm:flex-nowrap gap-4 mb-4"
        >
          {[...Array(columns)].map((_, colIndex) => (
            <div key={colIndex} className="flex-1 min-w-[100px]">
              <Skeleton height={40} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomSkeletonLoader;
