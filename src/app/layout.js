import { Inter } from "next/font/google";
import "react-multi-carousel/lib/styles.css";
import "rc-drawer/assets/index.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Massive Growth",
  description:
    "Welcome to Massive Growth Agency, your premier destination for unparalleled business and personal branding success. Specializing in video editing and website development, we propel your growth through compelling content and powerful online presence.Our services include weekly video production and website maintenance in our Starter Package, while our Pro Package offers monthly video marketing masterpieces, website maintenance sessions, and social media upkeep.Custom solutions tailored to your unique needs are available upon request. Elevate your brand with us today and experience limitless possibilities. Contact us now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
