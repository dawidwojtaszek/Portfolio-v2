import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Dawid Wojtaszek | Portfolio",
  description: "dawid wojtaszek portfolio",
};

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={font.className}>{children}</body>
    </html>
  );
}
