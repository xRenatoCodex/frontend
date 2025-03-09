'use client'


import { SelectFolder } from "@/components/app";
import SearchInput from "@/components/utils/search-input";

export default function Page() {

    return (
        <div className="relative flex flex-col justify-start items-center w-full h-full gap-4">
            <div className="absolute top-0 left-2 h-12 w-auto flex flex-row justify-start items-center gap-4">
                <SelectFolder />
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full gap-4">

            </div>
            <div className="absolute bottom-0 left-2 h-12 w-auto flex flex-row justify-start items-center gap-4">
                <SearchInput />

            </div>
        </div>
    );
}