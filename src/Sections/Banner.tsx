import Image from "next/image";
import React from "react";
import growthImg from "../../public/assests/growth.png";
import Container from "@/Components/Shared/Container";
import Link from "next/link";


const banner = () => {
    return (
        <div style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/textured-black-background_78370-339.jpg?t=st=1722579132~exp=1722582732~hmac=f77086a6e6da4fd5dba82b38e723eee351fa51ea03e54df7df7509cc8d4521d1&w=996')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <Container >
                <div className="md:grid grid-cols-12 bg-100"
                >
                    <div className="mb-10 col-span-7 text-dark">
                        <div className="container mx-auto h-full ">
                            <header className="container flex items-center h-full lg:mt-0">
                                <div className="w-full mt-20">
                                    <h1 className="text-2xl lg:text-2xl font-bold">Grow your <span className="text-green-500">Brand</span> <br /> more Than <span className="text-green-500">10x</span> with Branding Proo</h1>
                                    <div className="w-20 h-2 bg-green-700 my-4"></div>
                                    <p className="text-6xl font-bold mb-10 text-dark">We Design America’s Most Trusted Roofing Websites & Brands
                                    </p>
                                    <Link href="#meet"
                                    >  <button className="btn-meet">Book A Free Call With Fahim</button></Link>
                                </div>
                            </header>
                        </div>
                    </div>
                    <div className="col-span-5 sm:h-screen flex justify-center items-center" >
                        <Image width={1000} src={growthImg} alt="website sales"></Image>
                    </div>

                </div>
            </Container >
        </div >

    );
};

export default banner;