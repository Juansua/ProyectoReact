export default function ItemDetailSkele() {
  return (
    <div className="w-[90%] lg:max-w-7xl sm:gap-0 gap-4 mx-auto my-12 flex flex-wrap p-8 rounded-2xl drop-shadow-xl bg-white">
      <div className="sm:w-1/2 w-full h-[500px] bg-slate-200 rounded-md animate-pulse duration-1000"></div>

      <div className="sm:w-1/2 w-full flex flex-col gap-5 sm:pl-6 justify-center duration-1000">
        <div className="w-full h-12 bg-slate-200 rounded-md animate-pulse"></div>
        <div className="w-full h-12 bg-slate-200 rounded-md animate-pulse"></div>
        <div className="w-full h-12 bg-slate-200 rounded-md animate-pulse"></div>
        <div className="w-full h-12 bg-slate-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}
