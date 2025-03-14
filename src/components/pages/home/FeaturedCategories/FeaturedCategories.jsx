import { Link } from "react-router-dom"
import Categories from "./Categories"
import { PlusIcon } from '@heroicons/react/24/outline'

function FeaturedCategories() {
  return (
    <section className="container mx-auto text-left my-[110px] px-4 xl:px-0">
        <h2 className="text-[32px] font-medium text-pri-green-800 border-b-[3px] border-[#E2E5DA]">
            Categories
        </h2>

        <div className="flex flex-wrap max-w- lg:flex-nowrap gap-7 justify-between xl:h-[393px] mt-10">
            <Categories url="/category/serum" bgImgUrl="bg-[url('https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Serum-Category_hgw4us.jpg')]">
              Serum
            </Categories>

            <Categories url="/category/sunscreen" bgImgUrl="bg-[url('https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Sunscreen-Category_cesahb.jpg')]">
              Sunscreen
            </Categories>

            <Categories url="/category/moisturizer" bgImgUrl="bg-[url('https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Moisturizer-Category_ltf9ia.jpg')]">
              Moisturizer
            </Categories>
            
            <Link className="w-[237px] mx-auto" to="/shop-now">
              <div className="h-[393px] bg-pri-green-50 flex flex-col items-center justify-center gap-3 text-pri-green-850 shadow-md rounded-md hover:bg-pri-green-100 hover:shadow-lg transition-all duration-200">
                  <PlusIcon className="h-[50px]"/>

                  <h3 className="font-light">More</h3>
              </div>
            </Link>
        </div>
    </section>
  )
}

export default FeaturedCategories