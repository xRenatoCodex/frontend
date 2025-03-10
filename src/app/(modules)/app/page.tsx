'use client'

import { SelectFolder } from "@/components/app";
import SearchInput from "@/components/utils/search-input";
import { useState } from "react";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Q_AND_R {
    question: string,
    answer: string,
    id: string
}

export default function Page() {

    const [q_and_r, setQ_AND_R] = useState<Q_AND_R[]>([])

    return (
        <div className="relative flex flex-col justify-start items-center w-full h-full gap-4">
            <div className="absolute top-0 left-2 h-12 w-auto flex flex-row justify-start items-center gap-4">
                <SelectFolder />
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full gap-4">
                {
                    q_and_r.map(q_and_r => (
                        <Markdown key={q_and_r.id} remarkPlugins={[remarkGfm]}>{q_and_r.answer}</Markdown>
                    ))
                }
            </div>
            <div className="absolute bottom-0 left-2 h-12 w-full flex flex-row justify-center items-center gap-4">
                <SearchInput />
            </div>
        </div>
    );
}