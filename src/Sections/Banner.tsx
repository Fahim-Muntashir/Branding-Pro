import Image from "next/image";
import React from "react";
import growthImg from "../../public/assests/growth.png";
import Container from "@/Components/Shared/Container";


const banner = () => {
    return (
        <div style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/paper-texture_1154-611.jpg?w=996&t=st=1722491272~exp=1722491872~hmac=9eccd49b9fc4f60ab218fb752a0a186b733830246d6b5f337a3a28ebce7cecc4')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <Container >
                <div className="md:grid grid-cols-12 bg-100"
                >
                    <div className="mb-10 col-span-7">
                        <div className="container mx-auto h-full ">
                            <header className="container flex items-center h-full lg:mt-0">
                                <div className="w-full mt-20">
                                    <h1 className="text-2xl lg:text-2xl font-bold">Grow your <span className="text-green-500">Brand</span> <br /> more Than <span className="text-green-500">10x</span> with Branding Proo</h1>
                                    <div className="w-20 h-2 bg-green-700 my-4"></div>
                                    <p className="text-6xl font-bold mb-10">We Design America’s Most Trusted Roofing Websites & Brands
                                    </p>
                                    <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
                                </div>
                            </header>
                        </div>
                    </div>
                    <div className="col-span-5 sm:h-screen flex justify-center items-center" >
                        <Image width={1000} src={growthImg}></Image>
                    </div>

                </div>
            </Container >
        </div >

    );
};

export default banner;