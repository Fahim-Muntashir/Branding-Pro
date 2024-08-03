import Container from '@/Components/Shared/Container';
import React from 'react';
import website from '@/../public/assests/growth.png'
import Image from 'next/image';

const Services = () => {
    return (
        <Container>
            <div id="services">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p
                                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-500 text-white">
                                Brand new
                            </p>
                        </div>
                        <h2
                            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">

                                <svg viewBox="0 0 52 24" fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                    <defs>
                                        <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                                            height=".30">
                                            <circle cx="1" cy="1" r=".7"></circle>
                                        </pattern>
                                    </defs>
                                    <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                                </svg>

                                <span className="relative">The</span>
                            </span>
                            quick, brown fox jumps over a lazy dog
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>


                    <div className="md:flex justify-between items-center">
                        <div className="flex md:w-2/4 flex-col sm:flex-row">

                            <div>
                                <h6 className="mb-10 font-semibold leading-5 text-4xl">Website Development</h6>

                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start text-2xl text-gray-700">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end  professional
                                        and visually appealing websites.
                                    </li>
                                    <li className="flex items-start text-2xl my-3">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end solutions for creating and launching
                                    </li>
                                    <li className="flex items-start text-2xl my-6">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end solutions
                                    </li>
                                </ul>
                                <a href="/" aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800">Learn
                                    more
                                </a>
                            </div>
                        </div>
                        <div className='md:2/4'>
                            <Image src={website} alt="asdf" width="400" height="400"></Image>
                        </div>
                    </div>
                    <div className="md:flex justify-between items-center">
                        <div className='md:2/4'>
                            <Image src={website} alt="asdf" width="400" height="400"></Image>
                        </div>



                        <div className="flex md:w-2/4 flex-col sm:flex-row my-32">

                            <div>
                                <h6 className="mb-10 font-semibold leading-5 text-4xl">Website Development</h6>

                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start text-2xl text-gray-700">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end  professional
                                        and visually appealing websites.
                                    </li>
                                    <li className="flex items-start text-2xl my-3">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end solutions for creating and launching
                                    </li>
                                    <li className="flex items-start text-2xl my-6">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end solutions
                                    </li>
                                </ul>
                                <a href="/" aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800">Learn
                                    more
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="md:flex justify-between items-center">
                        <div className="flex md:w-2/4 flex-col sm:flex-row">

                            <div>
                                <h6 className="mb-10 font-semibold leading-5 text-4xl">Website Development</h6>

                                <ul className="mb-4 -ml-1 space-y-2">
                                    <li className="flex items-start text-2xl text-gray-700">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end  professional
                                        and visually appealing websites.
                                    </li>
                                    <li className="flex items-start text-2xl my-3">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end solutions for creating and launching
                                    </li>
                                    <li className="flex items-start text-2xl my-6">
                                        <span className="mr-1">
                                            <svg className="w-10 h-10 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        Our website development service offers end-to-end solutions
                                    </li>
                                </ul>
                                <a href="/" aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800">Learn
                                    more
                                </a>
                            </div>
                        </div>
                        <div className='md:2/4'>
                            <Image src={website} alt="asdf" width="400" height="400"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Services;