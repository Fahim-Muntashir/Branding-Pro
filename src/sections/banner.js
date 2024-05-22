import Image from "next/image";
import React from "react";
import { Container } from "theme-ui";
import bannerImg from "assets/cover.webp";

const banner = () => {
  return (
    <section className="" id="home">
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/HqNCcd3/Untitled-design-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" text-white lg:h-screen"
      >
        <Container>
          <div className="md:flex justify-between pt-40">
            <div className="my-0  pb-20 md:w-2/4">
              <h5 className="text-3xl font-extrabold tracking-wide font">
                MODERN DAY ALCHEMY
              </h5>
              <h1 className="text-4xl font-extrabold mt-2 text-[#FC3792]">
                We Help E-commerce & Info Product Businesses Produce
                Spine-Chilling ROI Via Paid Advertising
              </h1>
              <p className="text-xl tracking-widest mt-4">
                Stop wasting time and money on faulty and ineffective ad
                campaigns.
              </p>
              <p className="mt-4 text-xl tracking-widest">
                It's time to make your ad-budget count, scale your business and
                blow up your sales.
              </p>
              <button className="bg-fuchsia-600 py-2 hover:shadow-lg hover:shadow-fuchsia-600 rounded-full mt-4 px-6 text-xl font-bold transition-all">
                Speak with our Experts today
                <br />
                <p className="text-lg font-normal">Call for free feedback</p>
              </button>
            </div>
            <div>
              <Image src={bannerImg} width={400} height={400} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default banner;
