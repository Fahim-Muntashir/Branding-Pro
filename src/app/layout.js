import { Inter } from "next/font/google";
import "react-multi-carousel/lib/styles.css";
import "rc-drawer/assets/index.css";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
export const metadata = {
  title: "Branding Proo",
  description:
    "Welcome to Branding Pro Agency, your go-to for top-tier business and personal branding. We specialize in video editing and website development to boost your growth with compelling content and a strong online presence.    ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
