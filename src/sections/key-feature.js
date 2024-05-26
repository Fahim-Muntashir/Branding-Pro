import { Box, Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "Experience lightning-fast delivery. Simply hand over your project, and we'll handle the rest with precision and care.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text: "Unlock premium results at an affordable price. Let us amplify your agency's capabilities for small to mid-sized projects.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "Forge a reliable partnership. Our team ensures top-notch outputs for every project, tailored to your client's needs.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text: "Get dedicated assistance. We prioritize small to mid-sized projects, ensuring the best outcomes for your agency.",
  },
];

export default function KeyFeature() {
  return (
    <Box sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
