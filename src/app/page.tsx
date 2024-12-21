import React from "react";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import productData from "@/data/Product.json";
import Collection from "@/components/Home1/Categories";
import TabFeatures from "@/components/Home1/TabFeatures";
import Banner from "@/components/Home1/Banner";
import Benefit from "@/components/Home1/Benefit";
import testimonialData from "@/data/Testimonial.json";
import Testimonial from "@/components/Home1/Testimonial";
import Instagram from "@/components/Home1/Instagram";
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";
import Categories from "@/components/Home1/Categories";
import LookBook from "@/components/Home1/LookBook";
import TabFeatures2 from "@/components/Home1/TabFeatures2";
// import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function Home() {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <SliderOne />
      </div>
      <Categories data={undefined} />
      <LookBook data={[]} start={0} limit={0} />
      <TabFeatures data={productData} start={0} limit={6} />
      <Banner />
      <TabFeatures2 data={productData} start={0} limit={6} />

      
      <Testimonial data={testimonialData} limit={6}   />
      <Benefit props="md:py-20 " />
      <Instagram />
      <Brand />
      <Footer />
      {/* <ModalNewsletter /> */}
    </>
  );
}
