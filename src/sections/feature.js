import { Container, Grid, Box } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCard from "../components/feature-card.js";
import Performance from "../assets/feature/performance.svg";
import Partnership from "../assets/feature/partnership.svg";
import Subscription from "../assets/feature/subscription.svg";
import Support from "../assets/feature/support.svg";

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

export default function Feature() {
  return (
    <Box sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
