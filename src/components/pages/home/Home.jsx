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
      <section className="container mx-auto text-left mt-[50px] mb-[110px] px-4 sm:px-0">
      <h2 className="text-[32px] font-medium text-pri-green-800 border-b-[3px] border-[#E2E5DA]">
        Featured Products
      </h2>
      <DiscountProducts/>
      </section>
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