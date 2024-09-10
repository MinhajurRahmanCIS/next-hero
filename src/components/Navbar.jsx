"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
    ];
    const handler = () => {
        router.push("/login")
    };
    return (
        <nav className="bg-slate-300 px-6 py-4 flex justify-between items-center">
            <h6 className="text-3xl">Next <span className="text-zinc-700">Hero</span></h6>
            <ul className="flex justify-between items-center space-x-4">
                {
                    links?.map((link) => <Link
                        className={`${pathName === link.path && "font-bold"}`}
                        key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handler} className="bg-slate-800 p-3 text-white rounded-lg hover:bg-slate-700">Login</button>
        </nav>
    );
};

export default Navbar;