'use client'
import { Avatar, Drawer, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";

export default function Component() {
    const [open_user, setOpenUser] = useState(false);

    return (
        <div className="relative flex flex-row justify-end items-center h-full w-full">
            <IconButton onClick={() => setOpenUser(true)}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg">
                    R
                </Avatar>

            </IconButton>
            <Drawer anchor="right" open={open_user} onClose={() => setOpenUser(false)} sx={{ backgroundColor: "transparent" }} ModalProps={{ BackdropProps: { sx: { backgroundColor: "transparent" } } }}>
                <div className="flex flex-col justify-start items-center w-40 h-full gap-4 p-2 bg-[#21272f]">

                </div>
            </Drawer>
        </div>
    )
}