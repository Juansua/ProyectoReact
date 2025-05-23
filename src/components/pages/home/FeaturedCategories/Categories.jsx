import { Link } from "react-router-dom"

Link

function Categories({bgImgUrl, children, url}) {
  return (
      <Link className="md:w-1/2 xl:w-[405px] w-full h-[393px] mx-auto" to={url}>
        <div className={`flex h-full items-end rounded-md ${bgImgUrl} bg-cover bg-blend-multiply hover:bg-black hover:bg-opacity-15 transition-all duration-200`}>
            <p className="font-semibold text-[42px] shadow-zinc-950 text-white p-8 text-shad">
                {children}
            </p>
        </div>
      </Link>
  )
}

export default Categories