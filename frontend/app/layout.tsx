import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./_components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    throw new Error("Missing Google Client ID");
  }

  return (
    <html lang="en" className="scroll-smooth">
      <GoogleOAuthProvider clientId={clientId}>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}