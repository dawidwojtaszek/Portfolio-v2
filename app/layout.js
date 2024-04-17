import { IBM_Plex } from "./components/utilities/fonts";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

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
      <body className={IBM_Plex.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
