
function Categories({url, children}) {
  return (
    <div className={`flex items-end w-1/3 rounded-md ${url} bg-cover`}>
        <p className="font-semibold text-[42px] shadow-zinc-950 text-white p-8 text-shad">
            {children}
        </p>
     </div>
  )
}

export default Categories