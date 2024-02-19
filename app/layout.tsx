import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edparknia Oil Company Limited",
  description: "best residual fuel company in Ghana",
  logo: "../public/logo.jpeg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="bg-white hidden lg:block sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="lg:hidden bg-white sticky top-0 z-10">
            <Menu />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
