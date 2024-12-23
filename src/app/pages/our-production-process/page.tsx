"use client";
import React from "react";
import Image from "next/image";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Benefit from "@/components/Home1/Benefit";
import Newsletter from "@/components/Home1/Newsletter";
import OurProduction from "@/components/Home1/OurProduction";
import VideoTutorial from "@/components/Home1/VideoTutorial";

// import Instagram from '@/components/Home6/Instagram'
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb
          heading="Our Production Process"
          subHeading="Our Production Process"
          backgroundImage={"/images/banner/page-title-s2.jpg"}
        />
      </div>

      <OurProduction />
      <div className="video ">
        <VideoTutorial />
      </div>

      <Newsletter props="bg-green md:mt-20 mt-10" />
      <div className="benefit py-10">
        {" "}
        <Benefit props="md:pt-20 pt-10" />
      </div>
      {/* <Instagram /> */}
      <Brand />
      <Footer />
    </>
  );
};

export default AboutUs;
