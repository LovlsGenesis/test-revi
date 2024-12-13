import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Monsuta Batteru",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen bg-[#BBDBD1]">
          <div className="title flex justify-center items-center h-[10vh]">
            <h1>
              Monsuta Batteru
            </h1>
          </div>
          <div className="main flex justify-center h-[90vh]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
