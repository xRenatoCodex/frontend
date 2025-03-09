'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from "react";

export default function Component() {

    const [open_provider, setOpenProvider] = useState(false);
    const route = usePathname();
    console.log(route);

    return (    
        <aside id="sidebar-multi-level-sidebar" className=" z-40 w-full h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full pr-2 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className={`flex items-center p-2 text-gray-300 group rounded-lg ${route.startsWith("/app") ? "bg-gray-300 hover:bg-gray-300" : "hover:bg-gray-700 "}`}>
                            <svg className={`shrink-0 w-5 h-5 transition duration-75  ${route.startsWith("/app")? "text-gray-700 group-hover:text-gray-700" : "text-gray-500 group-hover:text-gray-300"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            <span className={`ms-3 ${route.startsWith("/app")?"text-gray-700 group-hover:text-gray-700":"text-gray-400 group-hover:text-gray-300"}`}>App</span>
                        </a>
                    </li>
                    <li>
                        <button onClick={() => setOpenProvider(p => !p)} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <svg className='shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="M600-200v-40h-80q-33 0-56.5-23.5T440-320v-320h-80v40q0 33-23.5 56.5T280-520H160q-33 0-56.5-23.5T80-600v-160q0-33 23.5-56.5T160-840h120q33 0 56.5 23.5T360-760v40h240v-40q0-33 23.5-56.5T680-840h120q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H680q-33 0-56.5-23.5T600-600v-40h-80v320h80v-40q0-33 23.5-56.5T680-440h120q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H680q-33 0-56.5-23.5T600-200Z" />
                            </svg>

                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Providers</span>
                            <svg className="w-3 h-3 transition-all duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" transform={`rotate(${open_provider ? "180" : "0"})`} >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul id="dropdown-example" className={`py-2 space-y-2 transition-all duration-300 ease-in-out ${open_provider ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <li>
                                <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Google</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Microsoft</a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </aside>

    )
}