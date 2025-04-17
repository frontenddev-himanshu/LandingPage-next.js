'use client'

import Image from "next/image";
import Logo from '@/images/logo.png';
import LoginBtn from '@/components/loginBtn';
import { useState } from "react";
import Link from "next/link";


export default function Header() {

    const [isOpen, setOpen] = useState(false);

    const toggelMenue = () => {
        setOpen(prev => !prev);
    }

    return (

        <>
            <nav className="w-full px-[20rem] h-[8vh] bg-[#161c2d] flex justify-between items-center relative">
                <div className="logo h-[25px] w-[120px] relative">
                    <Link href={"/"}>
                        <Image
                            src={Logo.src}
                            alt="Logo"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </Link>
                </div>


                <div className="hamb hidden" onClick={toggelMenue}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className={`links ${isOpen ? 'open' : ''} flex items-center gap-5 `}>
                    <ul className="flex gap-5 text-[#fff] uppercase text-[12px] font-[600]">
                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>

                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">
                            <Link href={"/about"}>
                                About
                            </Link>
                        </li>

                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">
                            <Link href={"/services"}>
                            Services
                            </Link>
                        </li>

                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">
                            
                            <Link href={"/blog"}>
                            Blog
                            </Link>
                            
                        </li>

                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">
                            <Link href={"/contact"}>
                            Contact us
                            </Link>
                        </li>
                    </ul>

                    <div className="login">
                        <LoginBtn name={"Login"} />
                    </div>
                </div>
            </nav>
        </>

    )
}