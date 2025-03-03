import DiscountProducts from "./DiscountProducts"
import FeaturedCategories from "./FeaturedCategories"
import Hero from "./Hero"
import LogoBrands from "./LogoBrands"

function Home() {
  return (
    <div>
      <Hero/>
      <DiscountProducts/>
      <LogoBrands/>
      <FeaturedCategories/>
    </div>
  )
}

export default Home