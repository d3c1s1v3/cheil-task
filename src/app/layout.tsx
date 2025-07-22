import { Poppins } from "next/font/google";

import { GlobalProvider } from "@/contexts/GlobalContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body
          className={`${poppins.className} bg-[#f8f8f8] max-w-[1440px] mx-auto antialiased`}
        >
          {children}
        </body>
      </html>
    </GlobalProvider>
  );
}
