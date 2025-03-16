import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ItemDetailSkele() {
  return (
    <div className="p-4 w-64 bg-white shadow-lg rounded-lg">
      <Skeleton height={150} />
      <Skeleton count={2} className="mt-2" />
    </div>
  );
}