'use client'
import { GoogleDrive } from '@/images/providers/google';
import { OneDrive } from '@/images/providers/microsoft';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import { IconButton, Modal, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ModalSelectFolder } from '.';
import {  useParams, useRouter, useSearchParams } from 'next/navigation';

export interface IFolder {
    name: string;
    provider: "googledrive" | "onedrive" | "hidden";
    id_folder: string;
}

export default function Component() {
    const searchParams = useSearchParams();
    const router = useRouter();


    const [folder_model, setModelFolder] = useState<"hidden" | "googledrive" | "onedrive">("hidden");
    const [folder_selected, setFolderSelected] = useState<IFolder | null>(null);
    const list_folders: IFolder[] = [
        { name: "Data Analytics", provider: "googledrive", id_folder: "2" },
        { name: "Marketing", provider: "googledrive", id_folder: "1" },
        { name: "Ingenieria", provider: "googledrive", id_folder: "3" },
        { name: "Ventas", provider: "googledrive", id_folder: "4" },
    ];

    useEffect(() => {
        if (folder_selected) {
            const newParams: { [key: string]: string } = {};
            searchParams.forEach((value, key) => {
                newParams[key] = value;
            });

            newParams["folder_id"] = folder_selected?.id_folder || "";
            newParams["folder_provider"] = folder_selected?.provider || "";

            router.replace(`?${new URLSearchParams(newParams).toString()}`, { scroll: false });
        }
    }, [folder_selected]);

    useEffect(() => {console.log(Array.from(searchParams.entries()))},[searchParams]);

    return (
        <div className="relative flex flex-row justify-start items-center h-full w-auto rounded-xl p-2 bg-[#21272f]">
            <Tooltip title={folder_selected?.name || "Selecciona una carpeta"} placement='bottom'>
                <div className="flex flex-row justify-start items-center h-full flex-2/3 gap-2 border-solid border-r-1 border-gray-700 pr-2">
                    <FolderRoundedIcon sx={{ color: '#00A76F' }} />

                    <Typography sx={{ fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '10ch' }}>
                        {folder_selected?.name || "Selecciona una carpeta"}
                    </Typography>
                </div>
            </Tooltip>

            <div className='flex flex-row justify-end items-center h-full flex-1/3'>
                <IconButton className='hover:opacity-100 opacity-80 grayscale-75 hover:grayscale-1' onClick={() => setModelFolder("googledrive")}>
                    <GoogleDrive height={20} width={20} />
                </IconButton>
                <IconButton className='hover:opacity-100 opacity-80 grayscale-75 hover:grayscale-0' onClick={() => setModelFolder("onedrive")}>
                    <OneDrive height={20} width={20} />
                </IconButton>
            </div>
            <Modal open={folder_model == "googledrive" || folder_model == "onedrive"} onClose={() => setModelFolder("hidden")} className='flex flex-col justify-center items-center'>
                <ModalSelectFolder folder_selected={folder_selected} selectFolder={setFolderSelected} provider={folder_model} onClose={() => setModelFolder("hidden")} list_folders={list_folders} />
            </Modal>


        </div>
    )
}