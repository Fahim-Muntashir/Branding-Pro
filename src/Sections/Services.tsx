import Container from '@/Components/Shared/Container';
import React from 'react';
import website from '@/../public/assests/we.png'
import seo from '@/../public/assests/seo.png'
import bnd from '@/../public/assests/bnd.png'
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
    return (
        <Container>
            <div id="services">
                <div className="px-4 py-16 mx-auto lg:py-20">

                    <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p
                                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-sky-500 text-white">
                                Our Services
                            </p>
                        </div>
                        <h2
                            className=" mb-4 font-sans text-3xl font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                            What Are The Branding Acceleration Services Branding Proo Offer?
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">We offer you to grow your brand and make it more recognizable. Our team provides practical and creative solutions to strengthen your brand.



                        </p>
                    </div>


                    <div className="flex flex-col md:flex-row justify-between items-center">

                        <div className="flex md:w-2/4 flex-col sm:flex-row order-last md:order-1">
                            <div>
                                <h6 className="mb-10 font-semibold text-4xl">Website Development</h6>

                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start text-2xl text-gray-700">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our expert-designed websites are optimized for SEO, fast-loading, and user-friendly, ensuring you stand out online and achieve higher sales.



                                    </li>
                                    <li className="flex items-start text-2xl py-6 order-2">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        We Build SEO-Optimized Websites for Top Search Rankings!
                                        Our Sites Convert Visitors into Leads with Speed and Efficiency
                                    </li>
                                    <li className="flex items-start text-2xl my-6">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        We Provide Free Video Guides and Ongoing Support to Ensure Your Website’s Success.
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className='md:2/4 order-1 md:order-2 mb-10 md:sm-0'>
                            <Image src={website} alt="asdf" width="600" height="400"></Image>
                        </div>
                    </div>
                    <div className="md:flex justify-between items-center">
                        <div className='md:2/4'>
                            <Image src={seo} alt="asdf" width="500" height="400"></Image>
                        </div>



                        <div className="flex md:w-2/4 flex-col sm:flex-row my-32">

                            <div>
                                <h6 className="mb-10 font-semibold text-4xl">Search Engine Optimization <br /> Services (SEO)
                                </h6>

                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start text-2xl text-gray-700">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        We optimize your site,video or any online contentfor better search rankings and increased traffic. Our targeted strategies help convert visitors into customers, driving higher sales and business growth.


                                    </li>
                                    <li className="flex items-start text-2xl py-5">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our approach helps convert traffic into leads and ensures your online presence stands out.                                    </li>
                                    <li className="flex items-start text-2xl my-6">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        We boost your site’s visibility with expert keyword research, on-page optimization, and link building, increasing traffic and conversions.

                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex md:w-2/4 flex-col order-last md:order-1 sm:flex-row">
                            <div>
                                <h6 className="mb-10 font-semibold text-4xl">
                                    Brand Identity Design
                                </h6>

                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start text-2xl text-gray-700">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        With our brand identity design services, you receive a complete brand design that uniquely defines your business, including cohesive visual elements such as color schemes and typography.

                                        2/2


                                    </li>
                                    <li className="flex items-start text-2xl py-5">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        We also provide detailed brand guidelines to ensure consistent and effective communication across all platforms.
                                    </li>
                                    <li className="flex items-start text-2xl my-6">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        This comprehensive brand design helps attract and engage customers, increase your market visibility and driving increased profitability.

                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className='md:2/4 order-1 md:order-2 mb-10 md:sm-0'>
                            <Image src={bnd} alt="Brand Identity Design Cover" width="550" height="400"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Services;