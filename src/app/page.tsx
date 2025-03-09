'use client'

import { IAPortfolio, Logo } from "@/images";
import { GoogleDrive } from "@/images/providers/google";
import { OneDrive } from "@/images/providers/microsoft";
import { ChatGpt } from "@/images/providers/openia";
import { Supabase } from "@/images/providers/supabase";
import EmailInput from '@/components/auth/email-input';
import Link from "next/link";
import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [view_password, setViewPassword] = useState(false);

  return (
    <div className="h-full w-full flex flex-row justify-start items-center">
      <div className="flex flex-col justify-start items-center flex-1/3 h-full gap-8 bg-[#21272f] p-4">
        <div className="flex flex-row justify-start items-center h-12 w-full">
          <Logo height={40} width={40} />
        </div>
        <div className="h-auto w-full flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-3xl">Bienvenido a Socrates.IA</h1>
          <h3 className="font-medium text-lg text-gray-400">Tu aliado en consultas a tu información</h3>
          <IAPortfolio height={400} width={400} />
        </div>
        <div className="w-full flex flex-1 flex-row justify-center items-center align-middle gap-12">
          <GoogleDrive height={40} width={40} />
          <OneDrive height={40} width={40} />
          <Supabase height={40} width={40} />
          <ChatGpt height={40} width={40} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-2/3 h-full bg-[#141a21] p-4">
        <div className="flex flex-col justify-center items-start h-3/4 w-1/2 gap-8">
          <div className="flex flex-col justify-start items-start h-auto w-full gap-2">
            <h2 className="font-bold text-2xl text-white">Iniciar Sesión</h2>
            <h3 className="font-light text-sm text-gray-400">¿No tienes cuenta? <Link href={"#"} className="text-[#00A76F] font-semibold">Únete</Link></h3>
          </div>
          <div className="flex flex-col justify-start items-start h-auto w-full gap-4">
            <EmailInput fullWidth variant="outlined" label="Email" type="email" />
            <Link className="self-end text-sm hover:underline" href={"#"}>¿Olvidaste tu contraseña?</Link>
            <div className="relative w-full h-auto flex flex-row justify-between items-center">
              <EmailInput fullWidth variant="outlined" label="Password" type={view_password ? "text" : "password"} />
              <div className="absolute right-4">
                <IconButton sx={{ color: '#82888f' }} onClick={() => setViewPassword(!view_password)}>
                  {
                    view_password ? <VisibilityRounded /> : <VisibilityOffRounded />
                  }
                </IconButton>
              </div>
            </div>

            <Link href={'/home'} className="w-full" >
              <Button variant="contained" fullWidth sx={{ borderRadius: '12px', height: '48px', backgroundColor: '#00A76F' }}>
                Iniciar Sesión
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
