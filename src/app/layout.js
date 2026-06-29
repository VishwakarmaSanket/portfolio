import smoothScroller from "@/components/smoothScroller";
import "./globals.css";

import { geist, geistMono, instrumentalSerif, cabinet, satoshi } from "./fonts";

export const metadata = {
  title: "Sanket Vishwakarma Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geist.variable}
        ${satoshi.variable}
        ${cabinet.variable}
        ${geistMono.variable}
        ${instrumentalSerif.variable}
      `}
    >
      <body>
        <smoothScroller>{children}</smoothScroller>
      </body>
    </html>
  );
}
