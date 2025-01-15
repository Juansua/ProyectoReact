import { Link } from "react-router-dom";

export default function Item({ title, price, description, category, image, id }) {
  return (
    <div className="bg-slate-200 flex flex-col w-[300px] justify-between p-4 rounded-lg">

      <div className="pb-4">

        <img src={image} className="w-full h-52 object-contain bg-white p-4 rounded-md"/>

        <div className="my-4">

          <p className=" pb-2 font-thin font-mono text-slate-500">
              {category}
          </p>

          <h3 className="text-2xl text-slate-700 font-semibold">
            {title}
          </h3>

          <p className="text-slate-600">
            {description}
          </p>

        </div>

      </div>

      <div>

        <p className="font-bold text-xl text-slate-800 pb-4">
          $ {price}
        </p>

        <Link to={`/item/${id}`} className="mx-auto p-8 py-1 bg-slate-300 rounded-md hover:bg-slate-400 font-regular">View Details</Link>

      </div>

    </div>
  )
}