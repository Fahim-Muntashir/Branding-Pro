import Image from "next/image";
import React from "react";
import { Container } from "theme-ui";
import youtube from "../assets/youtube.png";

const service = () => {
  return (
    <Container>
      <div className="lg:flex justify-between my-20">
        <div className="lg:w-2/5">
          <Image src={youtube} className="rounded-sm"></Image>
        </div>
        <div className="w-1/2">
          <h1 className="text-lg text-fuchsia-600 font-bold">Our Philosophy</h1>
          <h2 className="text-4xl font-bold text-black mb-3 font-sans">
            Business Goals Achieved with this Design
          </h2>
          <p>
            In today's digital landscape🌎, content is king, and video reigns
            supreme. 🎥Short-form video content is the go-to medium for engaging
            audiences and showcasing products. At Branding Proo, we create
            high-quality, attention-grabbing videos tailored to your target
            audience, designed to captivate viewers and ignite virality.
            <br />
            We also design seamless, user-centric websites optimized to convert
            visitors into loyal customers. As your growth partners, we leverage
            our proven track record and innovative strategies to transform your
            ideas into tangible results, fueling your journey to success.
          </p>
          <button className="bg-fuchsia-600 py-2 hover:shadow-lg hover:shadow-fuchsia-600 rounded-full mt-4 px-6 text-xl font-bold transition-all text-white">
            Speak with our Experts today
            <br />
            <p className="text-lg font-normal">Call for free feedback</p>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default service;
