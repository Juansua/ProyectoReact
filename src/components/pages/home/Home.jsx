import DiscountProducts from "./DiscountProducts";
import Hero from "./Hero";
import LogoBrands from "./LogoBrands";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import CTABanners from "./CTABanners";
import Footer from "../../layout/footer/Footer";
import icons from "../../../assets/icons";

function Home() {
  return (
    <div>
      <Hero />
      <LogoBrands />
      <section className="relative container mx-auto text-left mt-[50px] mb-[110px] px-4 sm:px-0">
        <img
          className="absolute top-9 -z-10"
          src={icons.brushTitle}
          alt={icons.brushTitle}
        />
        <h2 className="text-[32px] font-medium text-pri-green-800 source-serif-4-font">
          Latest Products
        </h2>
        <DiscountProducts />
      </section>
      <FeaturedCategories />
      <img
        className="container mx-auto rounded-xl shadow-md hidden md:block"
        src="https://res.cloudinary.com/dqyroytaz/image/upload/v1741057191/BannerWoman_nwmqis.jpg"
        alt=""
      />
      <DiscountProducts />
      <CTABanners />
      <Footer />
    </div>
  );
}

export default Home;
