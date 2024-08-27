import { IBM_Plex } from "./components/utilities/fonts";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Provider } from "./context/context";
export const metadata = {
  title: "Dawid Wojtaszek | Portfolio",
  description: "dawid wojtaszek portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={IBM_Plex.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
