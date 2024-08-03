import Banner from "@/Sections/Banner";
import Contact from "@/Sections/Contact";
import Faq from "@/Sections/Faq";
import Meet from "@/Sections/Meet";
import Services from "@/Sections/Services";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Meet></Meet>
      <Contact></Contact>
      <Faq></Faq>
    </div>);
}
