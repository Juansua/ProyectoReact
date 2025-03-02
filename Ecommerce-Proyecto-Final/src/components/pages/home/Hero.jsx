import { Link } from "react-router-dom"
import MainButton from "../../common/buttons/MainButton"

function Hero() {
  return (
    <section className="container mx-auto mt-2 pr-10 flex justify-between">
        <div className="my-auto text-left">
            <p className="text-lg uppercase text-pri-green-850 tracking-widest">
                Elegant & Luxurious
            </p>

            <h2 className="text-[40px] text-[#7F9E95] font-medium">
                Radiant Skin,
            </h2>

            <h2 className="text-[80px] text-[#559885] font-bold leading-none pb-4">
                Timeless Beauty
            </h2>

            <p className="text-xl font-light text-pri-green-850 tracking-wider">
                Indulge in premium skincare, designed to nourish, protect,
                <br/>
                and enhance your natural glow.
            </p>
            <Link to="/shop-now">
                <MainButton className="mt-16 w-[206px] py-[18px] text-xl font-normal">Shop Now</MainButton>
            </Link>
        </div>

        <div>
            <img src="https://res.cloudinary.com/dqyroytaz/image/upload/v1740879210/Modelo_bwyrmn.png" alt="" />
        </div>
  </section>
  )
}

export default Hero