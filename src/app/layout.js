import smoothScroller from "@/components/smoothScroller";
import "./globals.css";

export const metadata = {
  title: "Sanket Vishwakarma Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <smoothScroller>{children}</smoothScroller>
      </body>
    </html>
  );
}
