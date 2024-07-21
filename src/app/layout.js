import { Inter } from "next/font/google";
import "./globals.css";
import { SignedIn, ClerkProvider, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-white">
          <header className="flex justify-between p-4">
            <h1 className="text-black">Tech Journal</h1>
            <UserButton showName />
          </header>
          <main className="flex item-center justify-center">
            <SignedOut>
              <SignIn routing="hash" />
            </SignedOut>
            <SignedIn>
              {children}
            </SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
