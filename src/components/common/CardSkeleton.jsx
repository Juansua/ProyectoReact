function CardSkeleton() {
    return (
      <div className="bg-gray-100 border-2 border-transparent flex flex-col gap-4 w-[290px] p-4 rounded-lg text-left text-sec-blue-800 shadow-lg animate-pulse">
        <div className="w-full h-[258px] bg-gray-300 rounded-md"></div>
        <div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="flex justify-between items-end">
            <div className="">
              <div className="h-3 bg-gray-300 rounded w-1/2 mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
            <div className="h-10 w-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardSkeleton;