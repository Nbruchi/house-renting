import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import ClientOnly from "@/components/client-only";
import ToasterProvider from "./providers/toaster-provider";
import RegisterModal from "@/components/modals/register-modal";
import SignInModal from "@/components/modals/signin-modal";
import getCurrentUser from "./actions/get-current-user";
import RentModal from "@/components/modals/rent-modal";
import SearchModal from "@/components/modals/search-modal";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description:
    "Welcome to Airbnb, a platform that connects people who want to rent out their homes with people who are looking for a place to stay. Whether you're looking for a cozy beachside bungalow or a spacious city apartment, Airbnb has something for everyone.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <RegisterModal />
          <SignInModal />
          <RentModal />
          <SearchModal />
          <ToasterProvider />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
