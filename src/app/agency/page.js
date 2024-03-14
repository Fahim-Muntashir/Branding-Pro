"use client";
import { ThemeUIProvider } from "theme-ui";
import theme from "theme";
import { StickyProvider } from "contexts/app/app.provider";
import Layout from "components/layout";
import CoreFeature from "sections/core-feature";
import WorkFlow from "sections/workflow";

export default function Page() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <CoreFeature />
          <WorkFlow />
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
