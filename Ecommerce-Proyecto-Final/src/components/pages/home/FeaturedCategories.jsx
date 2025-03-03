
function FeaturedCategories() {
  return (
    <section className="container mx-auto text-left my-[110px]">
        <h2 className="text-[32px] font-medium text-pri-green-800 border-b-[3px] border-[#E2E5DA]">
            Categories
        </h2>

        <div className="flex justify-between h-[393px]">
            <div className="flex items-end w-[406px] rounded-md hover:bg-blend-darken
            bg-[url('https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Serum-Category_hgw4us.jpg')]">
                <h3 className="font-semibold text-[42px] shadow-md shadow-zinc-950 text-white p-8">Serum</h3>
            </div>

            <div className="w-[406px] rounded-md hover:bg-blend-darken
            bg-[url('https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Sunscreen-Category_cesahb.jpg')]">
                <h3>Sunscreen</h3>
            </div>

            <div className="w-[406px] rounded-md hover:bg-blend-darken
            bg-[url('https://res.cloudinary.com/dqyroytaz/image/upload/v1740971439/Home-Moisturizer-Category_ltf9ia.jpg')]">
                <h3>Moisturizer</h3>
            </div>
            <div className="w-[237px] bg-pri-green-50">
                <h3>More</h3>
            </div>
        </div>
    </section>
  )
}

export default FeaturedCategories