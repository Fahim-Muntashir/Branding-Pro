'use client'
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsYoutube } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import logo from '@/../public/assests/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import Container from '../Container';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', changeBackground);
        }

        // Cleanup event listener on component unmount
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', changeBackground);
            }
        };
    }, []);

    const socialLink = [
        {
            link: "facebook.com",
            icon: <FaFacebookF />
        },
        {
            link: "linkedin.com",
            icon: <FaLinkedinIn />
        },
        {
            link: "linkedin.com",
            icon: <FaXTwitter />
        },
        {
            link: "instagram.com",
            icon: <FaInstagram />
        },
        {
            link: "youtube.com",
            icon: <BsYoutube />
        },
        {
            link: "pinterest.com",
            icon: <FaPinterestP />
        }
    ];

    return (
        <div className='relative'>
            <div className={`z-40 ${navbar ? 'navbar bg-[#020000]' : 'navbar bg-[#dddddd05]'} text-black fixed w-full`}>
                <Container>
                    <div className='flex justify-between items-center py-4'>
                        <Link href='/'>
                            <Image src={logo} width={200} height={100} alt='haven' />
                        </Link>
                        <div className={`items-center justify-between hidden w-full md:flex md:w-auto`} id="navbar-sticky">
                            <ul className="flex text-dark flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                                <li>
                                    <Link href="/" className="block py-2 px-3" aria-current="page">HOME</Link>
                                </li>
                                <li>
                                    <Link href="/#services" className="block py-2 px-3">SERVICES</Link>
                                </li>
                                <li>
                                    <Link href="/#contact" className="block py-2 px-3">CONTACT</Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="block py-2 px-3">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='text-dark'>
                            <Link href="/#meet">
                                <button className='btn-meet shadow-none sm:text-lg hidden md:block'>Call Now
                                </button>
                            </Link>
                            <button onClick={() => setOpen(true)} className={`text-2xl ${open ? "hidden" : ""} md:hidden px-3`}>
                                <GiHamburgerMenu />
                            </button>
                            <button onClick={() => setOpen(false)} className={`text-2xl ${open ? "" : "hidden"} md:hidden px-3`}>
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className={`${open ? 'w-[80%] ms-0 transition-all delay-150' : ''} bg-[rgb(3,0,8)] px-3 py-10 text-white -ms-[500px] fixed h-screen flex flex-col z-50 justify-between`}>
                <ul className="flex flex-col">
                    <li>
                        <Link href="/" className="block py-2 px-3 border-b my-1 border-b-gray-600" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/#services" className="block py-2 px-3 border-b my-1 border-b-gray-600">Services</Link>
                    </li>
                    <li>
                        <Link href="/faq" className="block py-2 px-3 border-b my-1 border-b-gray-600">FAQ</Link>
                    </li>
                    <li>
                        <Link href="/#contact" className="block py-2 px-3 border-b my-1 border-b-gray-600">Contact</Link>
                    </li>
                </ul>
                <div className='flex justify-evenly mt-auto mb-10'>
                    {socialLink.map((item, index) => (
                        <a key={index} href={`https://${item.link}`} className='border-x-[1px] px-2 py-1 border-gray-600'>
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
