"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import Product from "@/components/Product/Product";
import productData from "@/data/Product.json";
import useLoginPopup from "@/store/useLoginPopup";
import useMenuMobile from "@/store/useMenuMobile";
import { useModalCartContext } from "@/context/ModalCartContext";
import { useModalWishlistContext } from "@/context/ModalWishlistContext";
import { useModalSearchContext } from "@/context/ModalSearchContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface Props {
  props: string;
}

const MenuOne: React.FC<Props> = ({ props }) => {
  const router = useRouter();
  const pathname = usePathname();
  let [selectedType, setSelectedType] = useState<string | null>();
  const { openLoginPopup, handleLoginPopup } = useLoginPopup();
  const { openMenuMobile, handleMenuMobile } = useMenuMobile();
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);
  const { openModalCart } = useModalCartContext();
  const { cartState } = useCart();
  const { openModalWishlist } = useModalWishlistContext();
  const { openModalSearch } = useModalSearchContext();

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  };

  const [fixedHeader, setFixedHeader] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
      setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  const handleGenderClick = (gender: string) => {
    router.push(`/shop/breadcrumb1?gender=${gender}`);
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/shop/breadcrumb1?category=${category}`);
  };

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    router.push(`/shop/breadcrumb1?type=${type}`);
  };

  return (
    <>
      <div
        className={`header-menu style-one ${
          fixedHeader ? "fixed" : "absolute"
        } top-0 left-0 right-0 w-full md:h-[74px] h-[56px] ${props}`}
      >
        <div className="container mx-auto h-full">
          <div className="header-main flex justify-between h-full">
            <div
              className="menu-mobile-icon lg:hidden flex items-center"
              onClick={handleMenuMobile}
            >
              <i className="icon-category text-2xl"></i>
            </div>
            <div className="left flex items-center gap-16">
              <Link
                href={"/"}
                className="flex items-center max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2"
              >
                <div className="heading4">Tsg_pk</div>
              </Link>
              <div className="menu-main h-full max-lg:hidden">
                <ul className="flex items-center gap-8 h-full">
                  <li className="h-full relative">
                    <Link
                      href="/"
                      className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 ${
                        pathname === "/" ? "active" : ""
                      }`}
                    >
                      Home
                    </Link>
                   
                  </li>
                  <li className="h-full">
                    <Link
                      href="#!"
                      className="text-button-uppercase duration-300 h-full flex items-center justify-center"
                    >
                      Categories
                    </Link>
                    <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                      <div className="container">
                        <div className="flex justify-between py-8">
                          <div className="nav-link basis-2/3 grid grid-cols-4 gap-y-8">
                            <div className="nav-item">
                              <div className="text-button-uppercase pb-2">
                                {" "}
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/gym-wear">Gym Wear</a>
                                   
                                  
                                </li>
                                </ul> 
                               
                              </div>
                              <ul>
                             
                                <li>
                                  <div
                                    onClick={() => handleTypeClick("outerwear")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Outerwear | Coats
                                  </div>
                                </li>

                                <li>
                                  <div
                                    onClick={() => handleGenderClick("men")}
                                    className={`link text-secondary duration-300 cursor-pointer view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                {" "}
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/fitness-apparel"> Fitness Apparel</a>
                                   
                                  
                                </li>
                                </ul> 
                               
                              </div>
                             
                              <ul>
                                <li>
                                  <div
                                    onClick={() => handleTypeClick("top")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Top | Overshirts
                                  </div>
                                </li>
                                 

                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("fashion")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                {" "}
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/active-wear"> Active Wear</a>
                                   
                                  
                                </li>
                                </ul> 
                               
                              </div>
                             
                              
                              <ul>
                                <li>
                                  <div
                                    onClick={() => handleTypeClick("eye")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Eyes Makeup
                                  </div>
                                </li>

                               
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("cosmetic")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                              
                              <div className="text-button-uppercase pb-2">
                                {" "}
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/boxing-gear&uniforms">Boxing Gear & Uniform</a>
                                   
                                  
                                </li>
                                </ul> 
                               
                              </div>
                              <ul>
                                 

                                <li>
                                  <div
                                    onClick={() => handleTypeClick("mats")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Yoga Equipment
                                  </div>
                                </li>
                                <li>
                                  <div
                                    onClick={() => handleCategoryClick("yoga")}
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                {" "}
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/martial-arts&taekwondo-uniform">Martial Arts & <br/> Taekwondo Uniform</a>
                                   
                                  
                                </li>
                                </ul> 
                               
                              </div>
                             
                              <ul>
                                <li>
                                  <div
                                    onClick={() => handleTypeClick("dress")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Dresses | Jumpsuits
                                  </div>
                                </li>

                               
                                <li>
                                  <div
                                    onClick={() => handleGenderClick("women")}
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                                
                              <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/protective-safetye-quipment">Protective Safety &<br/>Equipment </a>
                                   
                                  
                                </li>
                                </ul> 
                              </div>
                              <ul>
                               

                                <li>
                                  <div
                                    onClick={() => handleTypeClick("clothing")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Newborn Clothing
                                  </div>
                                </li>
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("toys-kid")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/sports-gloves">Sports Gloves </a>
                                   
                                  
                                </li>
                                </ul> 
                              </div>
                              
                              <ul>
                             

                                <li>
                                  <div
                                    onClick={() => handleTypeClick("lighting")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Lighting | Bed Room
                                  </div>
                                </li>
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("furniture")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/sports-cap&head-wear"> Sports Caps & <br/> Headwear </a>
                                   
                                  
                                </li>
                                </ul> 
                              </div>
                              <div className="text-button-uppercase pb-2">
                               
                              </div>
                              <ul>
                               

                                <li>
                                  <div
                                    onClick={() => handleTypeClick("lighting")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Lighting | Bed Room
                                  </div>
                                </li>
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("furniture")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/sports-bras">Sports Bras </a>
                                   
                                  
                                </li>
                                </ul> 
                              </div> 
                              
                               
                              <ul>
                                 

                                <li>
                                  <div
                                    onClick={() => handleTypeClick("lighting")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Lighting | Bed Room
                                  </div>
                                </li>
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("furniture")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/compression-shirts">Compression Shorts </a>
                                   
                                  
                                </li>
                                </ul> 
                              </div> 
                            
                              <ul>
                                <li>
                                  <div
                                    onClick={() => handleTypeClick("table")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Table | Living Room
                                  </div>
                                </li>

                                 
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("furniture")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/compression-shirts">Compression Shirts </a>
                                   
                                  
                                </li>
                                </ul> 
                              </div> 
                               
                              <ul>
                                <li>
                                  <div
                                    onClick={() => handleTypeClick("table")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Table | Living Room
                                  </div>
                                </li>

                               
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("furniture")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            
                              <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/sports-leggings">Sports Leggings </a>
                                   
                                  
                                </li>
                                </ul> 
                              </div> 
                              <ul>
                               

                                <li>
                                  <div
                                    onClick={() => handleTypeClick("lighting")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Lighting | Bed Room
                                  </div>
                                </li>
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("furniture")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/mma-rash-guards">MMA Rash Guards</a>
                                   
                                  
                                </li>
                                </ul> 
                              </div> 
                               
                              <ul>
                               

                                <li>
                                  <div
                                    onClick={() => handleTypeClick("lighting")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Lighting | Bed Room
                                  </div>
                                </li>
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("furniture")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">
                                <ul>
                                <li>
                                  <a className="drop-li" href="  /categories/athletic-tank-tops">Athletic Tank Tops</a>
                                   
                                  
                                </li>
                                </ul> 
                              </div> 
                              
                              <ul>
                             

                                <li>
                                  <div
                                    onClick={() => handleTypeClick("lighting")}
                                    className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                    Lighting | Bed Room
                                  </div>
                                </li>
                                <li>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick("furniture")
                                    }
                                    className={`link text-secondary duration-300 view-all-btn`}
                                  >
                                    View All
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="banner-ads-block pl-2.5 basis-1/3">
                            <div
                              className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden cursor-pointer"
                              onClick={() => handleTypeClick("swimwear")}
                            >
                              <div className="text-content py-14 pl-8 relative z-[1]">
                                <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">
                                  Save $10
                                </div>
                                <div className="heading6 mt-2">
                                  Dive into Savings <br />
                                  on Swimwear
                                </div>
                                <div className="body1 mt-3 text-secondary">
                                  Starting at{" "}
                                  <span className="text-red">$59.99</span>
                                </div>
                              </div>
                              <Image
                                src={"/images/slider/bg2-2.png"}
                                width={200}
                                height={100}
                                alt="bg-img"
                                className="basis-1/3 absolute right-0 top-0 duration-700"
                              />
                            </div>
                            <div
                              className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden cursor-pointer mt-8"
                              onClick={() => handleTypeClick("accessories")}
                            >
                              <div className="text-content py-14 pl-8 relative z-[1]">
                                <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">
                                  Save $10
                                </div>
                                <div className="heading6 mt-2">
                                  20% off <br />
                                  accessories
                                </div>
                                <div className="body1 mt-3 text-secondary">
                                  Starting at{" "}
                                  <span className="text-red">$59.99</span>
                                </div>
                              </div>
                              <Image
                                src={"/images/other/bg-feature.png"}
                                width={200}
                                height={100}
                                alt="bg-img"
                                className="basis-1/3 absolute right-0 top-0 duration-700"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="h-full">
                    <Link
                      href="/shop/default-grid"
                      className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${
                        pathname.includes("/shop/default-grid") ? "active" : ""
                      }`}
                    >
                      Shop
                    </Link>
                   
                  </li>
               
                  <li className="h-full relative">
                    <Link
                      href="/blog/default"
                      className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${
                        pathname.includes("/blog") ? "active" : ""
                      }`}
                    >
                      Blog
                    </Link>
                     
                  </li>
                  <li className="h-full relative">
                    <Link
                      href="#!"
                      className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${
                        pathname.includes("/pages") ? "active" : ""
                      }`}
                    >
                      Pages
                    </Link>
                    <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
                      <ul className="w-full">
                        <li>
                          <Link
                            href="/pages/about"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/about" ? "active" : ""
                            }`}
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pages/our-production-process"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/our-production-process" ? "active" : ""
                            }`}
                          >
                            Our Production Process
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pages/our-quality-inspection-protocol"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/our-quality-inspection-protocol" ? "active" : ""
                            }`}
                          >
                            Our Quality Inspection Protocol
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pages/fabric-tech"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/fabric-tech" ? "active" : ""
                            }`}
                          >
                            Fabric Tech
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pages/contact"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/contact" ? "active" : ""
                            }`}
                          >
                            Contact Us
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            href="/pages/store-list"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/store-list" ? "active" : ""
                            }`}
                          >
                            Store List
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link
                            href="/pages/page-not-found"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/page-not-found"
                                ? "active"
                                : ""
                            }`}
                          >
                            404
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            href="/pages/faqs"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/faqs" ? "active" : ""
                            }`}
                          >
                            FAQs
                          </Link>
                        </li>
                     
                        <li>
                          <Link
                            href="/pages/customer-feedbacks"
                            className={`link text-secondary duration-300 ${
                              pathname === "/pages/customer-feedbacks"
                                ? "active"
                                : ""
                            }`}
                          >
                            Customer Feedbacks
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right flex gap-12">
              <div className="max-md:hidden search-icon flex items-center cursor-pointer relative">
                <Icon.MagnifyingGlass
                  size={24}
                  color="black"
                  onClick={openModalSearch}
                />
                <div className="line absolute bg-line w-px h-6 -right-6"></div>
              </div>
              <div className="list-action flex items-center gap-4">
                 
                <div
                  className="max-md:hidden wishlist-icon flex items-center cursor-pointer"
                  onClick={openModalWishlist}
                >
                  <Icon.Heart size={24} color="black" />
                </div>
                <div
                  className="cart-icon flex items-center relative cursor-pointer"
                  onClick={openModalCart}
                >
                  <Icon.Handbag size={24} color="black" />
                  <span className="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">
                    {cartState.cartArray.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu-mobile" className={`${openMenuMobile ? "open" : ""}`}>
        <div className="menu-container bg-white h-full">
          <div className="container h-full">
            <div className="menu-main h-full overflow-hidden">
              <div className="heading py-2 relative flex items-center justify-center">
                <div
                  className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                  onClick={handleMenuMobile}
                >
                  <Icon.X size={14} />
                </div>
                <Link
                  href={"/"}
                  className="logo text-3xl font-semibold text-center"
                >
                  Tsg_pk
                </Link>
              </div>
              <div className="form-search relative mt-2">
                <Icon.MagnifyingGlass
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className=" h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4"
                />
              </div>
              <div className="list-nav mt-6">
                <ul>
                  <li
                    className={`${openSubNavMobile === 1 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(1)}
                  >
                    <a
                      href={"/"}
                      className={`text-xl font-semibold flex items-center justify-between`}
                    >
                      Home
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                   
                  </li>
                  <li
                    className={`${openSubNavMobile === 2 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(2)}
                  >
                    <a
                      href={"#!"}
                      className="text-xl font-semibold flex items-center justify-between mt-5"
                    >
                      Features
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                    <div className="sub-nav-mobile">
                      <div
                        className="back-btn flex items-center gap-3"
                        onClick={() => handleOpenSubNavMobile(2)}
                      >
                        <Icon.CaretLeft />
                        Back
                      </div>
                      <div className="list-nav-item w-full pt-3 pb-12">
                        <div className="nav-link grid grid-cols-2 gap-5 gap-y-6">
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/gym-wear">Gym Wear</a>
                            </div>
                            <ul>
                              <li>
                                <div
                                  onClick={() => handleGenderClick("men")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Starting From 50% Off
                                </div>
                              </li>
                           
                               
                              <li>
                                <div
                                  onClick={() => handleTypeClick("shirt")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Shirt | Sweatshirts
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleGenderClick("men")}
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/fitness-apparel"> Fitness Apparel</a>

                            </div>
                            <ul>
                             
                               
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lip")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lip Polish
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("hair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Hair Care
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("cosmetic")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/active-wear"> Active Wear</a>
                            </div>
                            <ul>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("candle")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Cented Candle
                                </div>
                              </li>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("mats")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Yoga Equipment
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleCategoryClick("yoga")}
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/boxing-gear&uniforms">Boxing Gear & Uniform</a>
                            </div>
                            <ul>
                          
                              <li>
                                <div
                                  onClick={() => handleTypeClick("t-shirt")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  T-shirts | Sweatshirts
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("accessories")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Accessories | Jewelry
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleGenderClick("women")}
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/martial-arts&taekwondo-uniform">Martial Arts & <br/> Taekwondo Uniform</a>
                            </div>
                            <ul>
                             
                             
                              <li>
                                <div
                                  onClick={() => handleTypeClick("blanket")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Baby Blanket
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("clothing")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Newborn Clothing
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("toys-kid")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/protective-safetye-quipment">Protective Safety &<br/>Equipment </a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/sports-gloves">Sports Gloves </a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/sports-cap&head-wear"> Sports Caps & <br/> Headwear </a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/sports-bras">Sports Bras </a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/compression-shirts">Compression Shorts </a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>


                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/compression-shirts">Compression Shirts </a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/sports-leggings">Sports Leggings </a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/mma-rash-guards">MMA Rash Guards</a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="nav-item">
                            <div className="text-button-uppercase pb-1">
                            <a className="drop-li" href="  /categories/athletic-tank-tops">Athletic Tank Tops</a>
                            </div>
                            <ul>
                             
                           
                              <li>
                                <div
                                  onClick={() => handleTypeClick("chair")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Chair | Work Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() => handleTypeClick("lighting")}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Lighting | Bed Room
                                </div>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    handleCategoryClick("furniture")
                                  }
                                  className={`link text-secondary duration-300 view-all-btn`}
                                >
                                  View All
                                </div>
                              </li>
                            </ul>
                          </div>

                        </div>
                        <div className="banner-ads-block grid sm:grid-cols-2 items-center gap-6 pt-6">
                          <div
                            className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden"
                            onClick={() => handleTypeClick("swimwear")}
                          >
                            <div className="text-content py-14 pl-8 relative z-[1]">
                              <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">
                                Save $10
                              </div>
                              <div className="heading6 mt-2">
                                Dive into Savings <br />
                                on Swimwear
                              </div>
                              <div className="body1 mt-3 text-secondary">
                                Starting at{" "}
                                <span className="text-red">$59.99</span>
                              </div>
                            </div>
                            <Image
                              src={"/images/slider/bg2-2.png"}
                              width={200}
                              height={100}
                              alt="bg-img"
                              className="basis-1/3 absolute right-0 top-0"
                            />
                          </div>
                          <div
                            className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden"
                            onClick={() => handleTypeClick("accessories")}
                          >
                            <div className="text-content py-14 pl-8 relative z-[1]">
                              <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">
                                Save $10
                              </div>
                              <div className="heading6 mt-2">
                                20% off <br />
                                accessories
                              </div>
                              <div className="body1 mt-3 text-secondary">
                                Starting at{" "}
                                <span className="text-red">$59.99</span>
                              </div>
                            </div>
                            <Image
                              src={"/images/other/bg-feature.png"}
                              width={200}
                              height={100}
                              alt="bg-img"
                              className="basis-1/3 absolute right-0 top-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className={`${openSubNavMobile === 3 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(3)}
                  >
                    <a
                      href={"/shop/default-grid"}
                      className="text-xl font-semibold flex items-center justify-between mt-5"
                    >
                      Shop
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                       
                  </li>
                 
                  <li
                    className={`${openSubNavMobile === 5 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(5)}
                  >
                    <a
                      href={"#!"}
                      className="text-xl font-semibold flex items-center justify-between mt-5"
                    >
                      Blog
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
 
                    
                    <div className="sub-nav-mobile">
                      <div
                        className="back-btn flex items-center gap-3"
                        onClick={() => handleOpenSubNavMobile(5)}
                      >
                        <Icon.CaretLeft />
                        Back
                      </div>
                      <div className="list-nav-item w-full pt-2 pb-6">
                        <ul className="w-full">
                          <li>
                            <Link
                              href="/blog/default"
                              className={`link text-secondary duration-300 ${
                                pathname === "/blog/default" ? "active" : ""
                              }`}
                            >
                              Blog Default
                            </Link>
                          </li>
                       
                          <li>
                            <Link
                              href="/blog/grid"
                              className={`link text-secondary duration-300 ${
                                pathname === "/blog/grid" ? "active" : ""
                              }`}
                            >
                              Blog Grid
                            </Link>
                          </li>
                           
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className={`${openSubNavMobile === 6 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(6)}
                  >
                    <a
                      href={"#!"}
                      className="text-xl font-semibold flex items-center justify-between mt-5"
                    >
                      Pages
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                    <div className="sub-nav-mobile">
                      <div
                        className="back-btn flex items-center gap-3"
                        onClick={() => handleOpenSubNavMobile(6)}
                      >
                        <Icon.CaretLeft />
                        Back
                      </div>
                      <div className="list-nav-item w-full pt-2 pb-6">
                        <ul className="w-full">
                          <li>
                            <Link
                              href="/pages/about"
                              className={`link text-secondary duration-300 ${
                                pathname === "/pages/about" ? "active" : ""
                              }`}
                            >
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pages/our-production-process"
                              className={`link text-secondary duration-300 ${
                                pathname === "/pages/ our-production-process" ? "active" : ""
                              }`}
                            >
                              Our Production Process
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pages/our-quality-inspection-protocol"
                              className={`link text-secondary duration-300 ${
                                pathname === "/pages/ our-quality-inspection-protocol" ? "active" : ""
                              }`}
                            >
                              Our Quality Inspection Protocol
                            </Link>
                          </li>

                         



                          <li>
                            <Link
                              href="/pages/contact"
                              className={`link text-secondary duration-300 ${
                                pathname === "/pages/contact" ? "active" : ""
                              }`}
                            >
                              Contact Us
                            </Link>
                          </li>
                        
                          <li>
                            <Link
                              href="/pages/faqs"
                              className={`link text-secondary duration-300 ${
                                pathname === "/pages/faqs" ? "active" : ""
                              }`}
                            >
                              FAQs
                            </Link>
                          </li>
                       
                          <li>
                            <Link
                              href="/pages/customer-feedbacks"
                              className={`link text-secondary duration-300 ${
                                pathname === "/pages/customer-feedbacks"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              Customer Feedbacks
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuOne;
