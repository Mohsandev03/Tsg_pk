'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
    data: any;
}

const CombinedComponent: React.FC<Props> = ({ data }) => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<string>('categories'); // Default tab

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    return (
        <>
            <div className="tabs-container">
                {/* Tabs for switching between categories and products */}
                <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6 justify-center">
                    {['Sports Wear', 'Leather Jackets'].map((tab) => (
                        <div
                            key={tab}
                            className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black ${
                                activeTab === tab ? 'active' : ''
                            }`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-2xl bg-white"
                                ></motion.div>
                            )}
                            <span className="relative text-button-uppercase z-[1]">
                                {tab}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Categories Section */}
                {activeTab === 'Sports Wear' && (
                    <div className="collection-block cosmetic md:pt-20 pt-10">
                        <div className="container">
                            <div className="grid sm:grid-cols-2 md:gap-[30px] gap-[16px]">
                                <div className="left">
                                    <div
                                        className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                        onClick={() => handleCategoryClick('fashion')}
                                    >
                                        <div className="bg-img h-full w-full aspect-square">
                                            <Image
                                                src={'/images/collection/activewear.png'}
                                                width={1000}
                                                height={1000}
                                                alt="body"
                                                className="h-full object-cover"
                                            />
                                        </div>
                                        <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                                        Active Wear
                                        </div>
                                    </div>
                                </div>
                                <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">
                                    <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">
                                        <div
                                            className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                            onClick={() => handleCategoryClick('fashion')}
                                        >
                                            <div className="bg-img h-full">
                                                <Image
                                                    src={'/images/collection/runninggear.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt="skin"
                                                    className="h-full object-cover"
                                                />
                                            </div>
                                            <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                                            Running Gear 
                                            </div>
                                        </div>
                                        <div
                                            className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                            onClick={() => handleCategoryClick('fashion')}
                                        >
                                            <div className="bg-img h-full">
                                                <Image
                                                    src={'/images/collection/workouttops.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt="hair"
                                                    className="h-full object-cover"
                                                />
                                            </div>
                                            <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                                            Workout Tops
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div
                                            className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                            onClick={() => handleCategoryClick('fashion')}
                                        >
                                            <div className="bg-img h-full">
                                                <Image
                                                    src={'/images/collection/outdoorwear.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt="accessories-cos"
                                                    className="h-full object-cover"
                                                />
                                            </div>
                                            <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                                            Outdoor Gear
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Duplicate Products Section for the Second Tab */}
                {activeTab === 'Leather Jackets' && (
                    <div className="collection-block cosmetic md:pt-20 pt-10">
                        <div className="container">
                            <div className="grid sm:grid-cols-2 md:gap-[30px] gap-[16px]">
                                <div className="left">
                                    <div
                                        className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                        onClick={() => handleCategoryClick('fashion')}
                                    >
                                        <div className="bg-img h-full w-full aspect-square">
                                            <Image
                                                src={'/images/collection/body.png'}
                                                width={1000}
                                                height={1000}
                                                alt="body"
                                                className="h-full object-cover"
                                            />
                                        </div>
                                        <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                                            Sports 
                                        </div>
                                    </div>
                                </div>
                                <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">
                                    <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">
                                        <div
                                            className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                            onClick={() => handleCategoryClick('fashion')}
                                        >
                                            <div className="bg-img h-full">
                                                <Image
                                                    src={'/images/collection/skin.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt="skin"
                                                    className="h-full object-cover"
                                                />
                                            </div>
                                            <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                                                Leather Jackets
                                            </div>
                                        </div>
                                        <div
                                            className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                            onClick={() => handleCategoryClick('fashion')}
                                        >
                                            <div className="bg-img h-full">
                                                <Image
                                                    src={'/images/collection/hair.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt="hair"
                                                    className="h-full object-cover"
                                                />
                                            </div>
                                            <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                                                Hunting Gear
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div
                                            className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                                            onClick={() => handleCategoryClick('fashion')}
                                        >
                                            <div className="bg-img h-full">
                                                <Image
                                                    src={'/images/collection/accessories-cos.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt="accessories-cos"
                                                    className="h-full object-cover"
                                                />
                                            </div>
                                            <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                                                Baseball Caps
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CombinedComponent;
