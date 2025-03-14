import DiscountProducts from "./DiscountProducts"
import Hero from "./Hero"
import LogoBrands from "./LogoBrands"
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories"
import CTABanners from "./CTABanners"
import Footer from "../../layout/footer/Footer"

function Home() {

  return (
    <div>
      <Hero/>
      <DiscountProducts/>
      <LogoBrands/>
      <FeaturedCategories/>
      <img className="container mx-auto rounded-xl shadow-md hidden md:block" src="https://res.cloudinary.com/dqyroytaz/image/upload/v1741057191/BannerWoman_nwmqis.jpg" alt="" />
      <DiscountProducts/>
      <CTABanners/>
      <Footer/>
    </div>
  )
}

export default Home