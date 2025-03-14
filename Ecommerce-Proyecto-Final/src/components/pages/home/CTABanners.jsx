import MainButton from "../../common/buttons/MainButton"

function CTABanners() {
  return (
    <section className="container h-full lg:h-[284px] lg:w-full flex px-4 xl:px-0 mx-auto flex-wrap lg:flex-nowrap gap-5 my-[110px]">
        <div className="flex flex-wrap items-center justify-center w-full lg:w-1/2 bg-white shadow-lg rounded-lg">
            <div className="py-10 sm:py-0 w-4/5 sm:px-10 sm:w-1/2 text-left">
                <p className="uppercase text-pri-green-850 tracking-widest font-light text-sm">
                    Forum & Blog
                </p>

                <h3 className="text-[28px] text-pri-green-800 font-medium leading-8">
                    Skincare Tips<br/>& Forum
                </h3>

                <MainButton rightIcon={true} className={"mt-6"}>Go to Blog</MainButton>
            </div>
            <div className="sm:w-1/2 w-full lg:h-full h-60">
                <img className="w-full h-full object-cover rounded-b-lg sm:rounded-l-none sm:rounded-r-lg" src="https://res.cloudinary.com/dqyroytaz/image/upload/v1741058734/CTABanner-1_eipgax.jpg" alt="/" />
            </div>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full lg:w-1/2 bg-white shadow-lg rounded-lg">
            <div className="py-10 sm:py-0 w-4/5 sm:px-10 sm:w-1/2 text-left">
                <p className="uppercase text-pri-green-850 tracking-widest font-light text-sm">
                    Featured Products
                </p>

                <h3 className="text-[28px] text-pri-green-800 font-medium leading-8">
                    Featured Hot Deals<br/>+40% OFF
                </h3>

                <MainButton rightIcon={true} className={"mt-6"}>See discounts</MainButton>
            </div>
            <div className="sm:w-1/2 w-full lg:h-full h-60">
                <img className="w-full h-full object-cover rounded-b-lg sm:rounded-l-none sm:rounded-r-lg" src="https://res.cloudinary.com/dqyroytaz/image/upload/v1741058734/CTABanner-2_jxymjg.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default CTABanners