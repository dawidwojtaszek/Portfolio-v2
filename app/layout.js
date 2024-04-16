import { IBM_Plex } from "./components/utilities/fonts";
import "./globals.css";

export const metadata = {
  title: "Dawid Wojtaszek | Portfolio",
  description: "dawid wojtaszek portfolio",
};

// export const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["400", "600"],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={IBM_Plex.className}>{children}</body>
    </html>
  );
}
