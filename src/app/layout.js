
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const quickSand = localFont({
  src: "./fonts/Quicksand.woff",
  variable: "--font-quick-sand",
  weight: "100 500",
});

export const metadata = {
  title: "My Comera",
  description: "My Comera Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${quickSand.variable}`}>
        {children}
      </body>
    </html>
  );
}
