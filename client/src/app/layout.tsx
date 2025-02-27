import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn
} from '@clerk/nextjs'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        {/* <header className="flex justify-between">
          <h1>Cover Corp</h1>
          <UserButton showName/>
        </header> */}
        {/* <div className="flex flex-col items-center justify-center h-full? w-full"> */}
          {/* <div className="text-xl font-bold mb-10">Welcome to t-LIST</div> */}
          
        <SignedOut >
            <SignIn routing="hash"/>
          </SignedOut>
          
         
          <SignedIn>
        <DashboardWrapper>
          
          
          {children}
          
          
          </DashboardWrapper>
          </SignedIn>
        
        
      </body>
    </html>
    </ClerkProvider>
  );
}
