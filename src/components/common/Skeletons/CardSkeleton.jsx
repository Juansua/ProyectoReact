export default function CardSkeleton() {
  return (
    <div className="p-4 w-[290px] bg-white shadow-lg rounded-lg">
      <div className="h-[258px] mb-3 bg-gray-200 rounded-sm animate-pulse duration-1000"></div>

      <div className="flex flex-col gap-2 animate-pulse duration-1000">
        <div className="h-5 w-full bg-slate-200 rounded-sm">
        </div>
        <div className="h-5 w-full bg-slate-200 rounded-sm">
        </div>
        <div className="h-5 w-full bg-slate-200 rounded-sm">
        </div>
      </div>
    </div>
  );
}