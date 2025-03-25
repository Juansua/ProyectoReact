import React from "react";
import { GiftIcon, SparklesIcon, SunIcon } from "@heroicons/react/24/outline";

function Benefits() {
  return (
    <section className="bg-white text-sec-blue-700 py-[60px]">
      <div className="container flex flex-wrap xl:flex-nowrap gap-8 px-4 xl:px-0 items-center justify-between xl:max-w-screen-xl max-w-xl mx-auto">
        <div className="flex flex-col gap-5">
          <SunIcon className="h-[66px] text-pri-green-800" />
          <div>
            <h4 className="font-medium w-[187px] mx-auto">
              Personalized Skincare for Every Skin Type
            </h4>

            <p className="text-sm mt-2">
              Discover products tailored to your unique skin needs. Our
              carefully curated selection ensures that whether you have dry,
              oily, sensitive, or combination skin, you’ll find the perfect
              solution for a healthy and radiant glow.
            </p>
          </div>
        </div>

        <div className="w-1 h-16 bg-sec-blue-100 hidden xl:inline-block"></div>

        <div className="flex flex-col gap-5">
          <SparklesIcon className="h-[66px] text-pri-green-800" />
          <div>
            <h4 className="font-medium w-[246px] mx-auto">
              High-Quality, Dermatologist-Approved Products
            </h4>

            <p className="text-sm mt-2">
              We prioritize safety and effectiveness by offering only
              dermatologist-approved skincare products. Each item is tested and
              formulated with premium ingredients to deliver real, visible
              results.
            </p>
          </div>
        </div>

        <div className="w-1 h-16 bg-sec-blue-100 hidden xl:block"></div>

        <div className="flex flex-col gap-5">
          <GiftIcon className="h-[66px] text-pri-green-800" />
          <div>
            <h4 className="font-medium w-[230px] mx-auto">
              Convenient Shopping with Fast & Secure Delivery
            </h4>

            <p className="text-sm mt-2">
              Enjoy a seamless shopping experience with our user-friendly
              website, secure checkout, and fast shipping. Get your favorite
              skincare essentials delivered straight to your door without
              hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
