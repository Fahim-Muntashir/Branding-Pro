import Image from "next/image";
import { InlineWidget } from "react-calendly";
import profileImg from "/src/assets/fahim.png";

const Meet = () => {
  return (
    <div className="lg:flex my-40 gap-x-2 lg:px-32">
      <div className="lg:w-2/5 lg:ps-5 px-12 shrink order-1">
        {" "}
        <Image
          className="rounded-full border-4 border-fuchsia-600 object-cover"
          src={profileImg}
          width={130}
          height={100}
          alt="profile"
        ></Image>
        <div className="my-3">
          {" "}
          <h1 className="text-3xl font-bold">Book A free Call with Fahim</h1>
          <h2 className="text-2xl font-bold text-[#FC3792] ">
            15 min Free Consaltation
          </h2>
        </div>
        <p className="text-justify leading-6 ">
          Let's chat about maximizing your business or personal brand on
          YouTube. We'll cover scaling strategies, channel growth, video
          quality, and SEO optimization. By embracing feedback, you'll enhance
          output and engagement. Together, we'll unlock your channel's full
          potential. Let's get started!
        </p>{" "}
        <div class="topic-benefits">
          <div class="youtube-growth-benefits">
            <div class="youtube-growth-benefits">
              <div class="youtube-growth-benefits">
                <div class="youtube-growth-benefits">
                  <p className="text-xl font-bold my-3 ">
                    Joining this YouTube growth discussion offers several
                    benefits:
                  </p>
                  <ul class="list-disc ps-4">
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
    </div>
  );
};

export default Meet;
