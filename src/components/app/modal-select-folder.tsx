'use client'

import { FolderRounded } from "@mui/icons-material"
import { MouseEventHandler } from "react"
import { IFolder } from "./select-folder"
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

interface Props {
    provider: "googledrive" | "onedrive" | "hidden",
    onClose: MouseEventHandler<HTMLButtonElement>,
    list_folders: IFolder[],
    selectFolder: (folder: IFolder) => void,
    folder_selected: IFolder | null
}

export default function Component({ onClose, provider, list_folders, selectFolder, folder_selected }: Props) {
    return (
        <>

            {/* Main modal */}
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Connectar a {provider == "googledrive" ? "Google Drive" : "One Drive"}
                        </h3>
                        <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5">
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Selecciona la carpeta a inspeccionar</p>
                        <ul className="my-4 space-y-3 max-h-60 overflow-y-auto scrollbar- scrollbar-thumb-gray-100 scrollbar-track-transparent">
                            {
                                list_folders.map((folder) => (
                                    <li key={folder.id_folder} onClick={() => { selectFolder(folder) }}>
                                        <a href="#" className={`${folder_selected?.id_folder === folder.id_folder ? "flex items-center p-3 text-base font-bold text-[#00A76F] rounded-lg bg-gray-50" : "flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"} `}>
                                            <FolderRounded />
                                            <span className="flex-1 ms-3 whitespace-nowrap">{folder.name}</span>
                                            {
                                                folder_selected?.id_folder === folder.id_folder && <CheckCircleRoundedIcon sx={{ color: '#00A76F' }} />
                                            }
                                        </a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}