import { Montserrat } from "next/font/google";
import "react-multi-carousel/lib/styles.css";
import "rc-drawer/assets/index.css";
const inter = Montserrat({ subsets: ["latin"] });
import "./globals.css";
export const metadata = {
  title: "Branding Proo",
  description:
    "Welcome to Branding Pro Agency, your go-to for top-tier business and personal branding. We specialize in video editing and website development to boost your growth with compelling content and a strong online presence.    ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="fj03Ws8y0JkFm60t0h1ng4e04sNtUK_3L5pfDrYUe0o"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </html>
  );
}
