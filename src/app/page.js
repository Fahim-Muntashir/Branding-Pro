"use client";
import { ThemeUIProvider } from "theme-ui";
import theme from "theme";
import { StickyProvider } from "../contexts/app/app.provider";
import Banner from "sections/banner";
import Layout from "components/layout";
import KeyFeature from "sections/key-feature";
import ServiceSection from "sections/service-section";
// import Feature from "sections/feature";
import CoreFeature from "sections/core-feature";
import WorkFlow from "sections/workflow";
// import Package from "sections/package";
import TeamSection from "sections/team-section";
// import TestimonialCard from "sections/testimonial";

import Contact from "sections/contact";
import Meet from "components/Meet";

export default function Home() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner />
          <ServiceSection />
          <KeyFeature />

          {/* <Feature /> */}
          <CoreFeature />
          <WorkFlow />
          <Meet />
          {/* <Package /> */}
          <TeamSection />
          {/* <TestimonialCard />s */}
          <Contact></Contact>
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
