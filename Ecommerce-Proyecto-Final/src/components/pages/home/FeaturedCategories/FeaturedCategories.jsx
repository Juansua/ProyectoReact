import Categories from "./Categories"
import { PlusIcon } from '@heroicons/react/24/outline'

function FeaturedCategories() {
  return (
    <section className="container mx-auto text-left my-[110px]">
        <h2 className="text-[32px] font-medium text-pri-green-800 border-b-[3px] border-[#E2E5DA]">
            Categories
        </h2>

        <div className="flex gap-7 justify-between h-[393px] mt-10">
            <Categories url="https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Serum-Category_hgw4us.jpg">Serum</Categories>

            <Categories url="https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Sunscreen-Category_cesahb.jpg">Sunscreen</Categories>

            <Categories url="https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Moisturizer-Category_ltf9ia.jpg">Serum</Categories>
        
            <div className="w-[237px] bg-pri-green-50 flex flex-col items-center justify-center gap-3 text-pri-green-850 shadow-lg rounded-md">
                <PlusIcon className="h-[50px]"/>
                <h3 className="font-light">More</h3>
                
            </div>
        </div>
    </section>
  )
}

export default FeaturedCategories