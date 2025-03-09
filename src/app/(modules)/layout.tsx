import { Avatar, SideBar } from "@/components/utils";
import { Logo } from "@/images";
import type { Metadata } from "next";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

export const metadata: Metadata = {
  title: "Home",
  description: "SocratesIA is a platform for AI-powered learning.",

};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`h-full w-full bg-secondary text-primary`}
      >
        <div className="bg-[#141a21] h-full w-full flex flex-row justify-start items-center p-4">
          <div className="flex flex-col justify-start items-center w-1/5 h-full gap-8 border-r-[1px] border-gray-700">
            <div className="relative flex flex-col justify-start items-start h-12 w-full">
              <div className="absolute right-[-20px] top-0 rounded-full h-auto w-auto flex ">
                <IconButton sx={{ color: 'white', backgroundColor: '#21272f', '&:hover': { backgroundColor: '#364153' } }}>
                  <KeyboardArrowLeftRoundedIcon sx={{ color: '#00A76F' }} />
                </IconButton>
              </div>
              <Logo height={40} width={40} />
            </div>
            <SideBar />
          </div>
          <div className="flex flex-col justify-start items-center w-4/5 h-full gap-8">
            <div className="relative flex flex-row justify-end items-center h-12 w-full">
              <Avatar />
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full gap-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
