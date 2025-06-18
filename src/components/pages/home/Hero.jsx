import { Link } from "react-router-dom";
import MainButton from "../../common/buttons/MainButton";

function Hero() {
  return (
    <section className="container mx-auto mt-10 lg:mt-2 mb-[55px] pr-10 flex justify-between px-4 xl:px-0">
      <div className="my-auto text-left">
        <p className="text-lg uppercase text-pri-green-800 tracking-widest">
          Elegant & Luxurious
        </p>

        <h2 className="text-[40px] text-[#7DA89C] font-semibold source-serif-4-font leading-none mt-3">
          Radiant Skin,
        </h2>

        <h2 className="text-[80px] text-[#559885] font-bold leading-none pb-4 source-serif-4-font">
          Timeless Beauty
        </h2>

        <p className="text-lg font-light text-pri-green-800 tracking-wider">
          Indulge in premium skincare, designed to nourish, protect,
          <br />
          and enhance your natural glow.
        </p>
        <Link to="/shop-now">
          <MainButton
            className="px-12 mt-[32px] py-[12px] text-[15px] font-normal shadow-lg"
            leftIcon={"shopBag"}
          >
            Shop Now
          </MainButton>
        </Link>
      </div>

      <div className="relative">
        <img
          className="hidden lg:block"
          src="https://res.cloudinary.com/dqyroytaz/image/upload/v1748444390/women-skincare_c1c6mh.png"
          alt=""
        />
        <div class="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#f0f5f1]"></div>
      </div>
    </section>
  );
}

export default Hero;
