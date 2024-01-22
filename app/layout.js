import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "Bike Spring | Your cycling passion at your fingertips",
  description: "Bike Spring is your cycling passion at your fingertips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.variable}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
