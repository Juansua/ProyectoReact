export default function ItemDetailSkele() {
  return (
    <div className="lg:w-4/5 mx-auto flex flex-wrap py-8 p-16 rounded-2xl drop-shadow-xl bg-white">
      <div className="w-1/2 h-[500px] bg-slate-200 rounded-md animate-pulse duration-1000">
      </div>
      
      <div className="flex flex-col gap-5 w-1/2 px-6 justify-center duration-1000">
        <div className="w-full h-12 bg-slate-200 rounded-md animate-pulse"></div>
        <div className="w-full h-12 bg-slate-200 rounded-md animate-pulse"></div>
        <div className="w-full h-12 bg-slate-200 rounded-md animate-pulse"></div>
        <div className="w-full h-12 bg-slate-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}