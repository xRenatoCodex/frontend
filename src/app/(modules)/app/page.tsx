'use client'


import { SelectFolder } from "@/components/app";

export default function Page() {

    return (
        <div className="relative flex flex-col justify-start items-center w-full h-full gap-4">
            <div className="absolute top-0 left-2 h-12 w-auto flex flex-row justify-start items-center gap-4">
                <SelectFolder />
            </div>
        </div>
    );
}