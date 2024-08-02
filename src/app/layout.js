import { Inter } from "next/font/google";
import "./globals.css";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../Components/ui/avatar"
import { getKindeServerSession, LoginLink, RegisterLink,LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Toaster } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const {isAuthenticated,getUser } = getKindeServerSession();
  const user = await getUser();
  return (
      <html lang="en">
        <body className="bg-white">
          <header className="flex justify-between p-4 items-center">
            <h1 className="font-semibold text-xl text-black">Tech Journal</h1>
             {!(await isAuthenticated()) ? (
                <>
                  <LoginLink className="btn btn-ghost sign-in-btn">
                    Sign in
                  </LoginLink>
                  <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
                </>
              ) : (
                <div>
                  <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 border-2 p-2 rounded-md cursor-pointer">
                  <Avatar>
                    <AvatarImage src={user?.picture} alt="user profile" />
                    <AvatarFallback>{user?.given_name?.[0]}</AvatarFallback>
                  </Avatar>
                  <Label>{user?.given_name}</Label>
                  </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>{`${user?.given_name}'s Account`}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogoutLink>Log out</LogoutLink>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                </div>
              )}
          </header>
          
          <section className="flex item-center justify-center h-screen">
              {children}
              <Toaster />
          </section>
        </body>
      </html>
  );
}
