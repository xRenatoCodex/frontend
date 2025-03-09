'use client'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import { Typography } from '@mui/material';

export default function Component() {


    return (
        <div  className="relative flex flex-row justify-start items-center h-full w-auto rounded-xl p-2 bg-[#21272f]">
            <div  className="flex flex-row justify-start items-center h-full flex-2/3 gap-2 border-solid border-r-1 border-gray-700">
                <FolderRoundedIcon sx={{ color: '#00A76F' }} />
                <Typography  >Folderasdasd</Typography>
            </div>
            <div  className='flex flex-row justify-end items-center h-full flex-1/3 gap-2'>

            </div>
        </div>
    )
}