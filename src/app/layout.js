<meta name="viewport" content="width=device-width, initial-scale=1.0" />
import { DM_Sans, Inter } from "next/font/google";
import "./styles/globals.css";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Asaan Takaful",
  description: "Asaan Takaful - Your Trusted Partner in Insurance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>


        {children}
        <footer></footer>

      </body>
    </html>
  );
}
