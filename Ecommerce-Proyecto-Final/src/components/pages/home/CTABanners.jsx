import MainButton from "../../common/buttons/MainButton"

function CTABanners() {
  return (
    <section className="container flex mx-auto gap-5 my-[110px]">
        <div className="flex w-1/2 bg-white shadow-lg rounded-lg">
            <div className="w-1/2 p-10 text-left">
                <p className="uppercase text-pri-green-850 tracking-widest font-light text-sm">
                    Forum & Blog
                </p>

                <h3 className="text-[28px] text-pri-green-800 font-medium leading-8">
                    Skincare Tips<br/>& Forum
                </h3>

                <MainButton rightIcon={true} className={"mt-6"}>Go to Blog</MainButton>
            </div>
            <div className="w-1/2 bg-cover bg-center bg-[url('https://res.cloudinary.com/dqyroytaz/image/upload/v1741058734/CTABanner-1_eipgax.jpg')]"></div>
        </div>

        <div className="flex w-1/2 bg-white shadow-lg rounded-lg">
            <div className="w-1/2 p-10 text-left">
                <p className="uppercase text-pri-green-850 tracking-widest font-light text-sm">
                    Featured Products
                </p>

                <h3 className="text-[28px] text-pri-green-800 font-medium leading-8">
                    Featured Hot Deals<br/>+40% OFF
                </h3>

                <MainButton rightIcon={true} className={"mt-6"}>See discounts</MainButton>
            </div>
            <div className="w-1/2 bg-cover bg-center bg-[url('https://res.cloudinary.com/dqyroytaz/image/upload/v1741058734/CTABanner-2_jxymjg.jpg')]"></div>
        </div>
    </section>
  )
}

export default CTABanners