'use client'
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import profileImg from "@/../public/assests/logo.svg";
import Container from "@/Components/Shared/Container";


const Meet = () => {
    return (
        <Container>
            <div id="meet" className="lg:flex justify-between my-40 ">
                <div className="lg:w-2/5 lg:ps-10 px-12 shrink order-1">
                    {" "}
                    <Image
                        className="rounded-full border-4 border-primary object-cover"
                        src="https://i.ibb.co/7G8sbWR/Untitled-design-25.png"

                        width={100}
                        height={100}
                        alt="profile"
                    ></Image>
                    <div className="my-3">
                        {" "}
                        <h1 className="text-3xl font-bold">Book A free Call with Fahim</h1>
                        <h2 className="text-2xl font-bold text-primary ">
                            15 min Free Consaltation
                        </h2>
                    </div>
                    <p className="text-justify leading-6 ">
                        Let&apos;s chat about maximizing your business or personal brand on
                        YouTube. We&apos;ll cover scaling strategies, channel growth, video
                        quality, and SEO optimization. By embracing feedback, you&apos;ll enhance
                        output and engagement. Together, we&apos;ll unlock your channel&apos;s full
                        potential. Let&apos;s get started!
                    </p>{" "}
                    <div className="topic-benefits">
                        <div className="youtube-growth-benefits">
                            <div className="youtube-growth-benefits">
                                <div className="youtube-growth-benefits">
                                    <div className="youtube-growth-benefits">
                                        <p className="text-xl font-bold my-3 ">
                                            Joining this YouTube growth discussion offers several
                                            benefits:
                                        </p>
                                        <ul className="list-disc ps-4">
                                            <li>Gain insights from experienced creators</li>
                                            <li>Learn effective strategies for channel growth</li>
                                            <li>Receive personalized feedback on your content</li>
                                            <li>
                                                Discover new tools and resources for content creation
                                            </li>
                                            <li>
                                                Connect with a supportive community of fellow creators
                                            </li>
                                            <li>
                                                Stay updated on the latest trends and best practices
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/4">
                    {" "}
                    <InlineWidget url="https://calendly.com/fahimmuntashir07/30min" />
                </div>
            </div></Container>
    );
};

export default Meet;