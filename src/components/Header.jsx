'use client'

import Image from "next/image";
import Logo from '@/images/logo.png';
import LoginBtn from '@/components/loginBtn';
import { useState } from "react";


export default function Header() {

    const [isOpen, setOpen] = useState(false);

    const toggelMenue = () => {
        setOpen(prev => !prev);
    }

    return (

        <>
            <nav className="w-full px-[20rem] h-[8vh] bg-[#161c2d] flex justify-between items-center relative">
                <div className="logo h-[25px] w-[120px] relative">
                    <Image
                        src={Logo.src}
                        alt="Logo"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>


                <div className="hamb hidden" onClick={toggelMenue}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className={`links ${isOpen ? 'open' : ''} flex items-center gap-5 `}>
                    <ul className="flex gap-5 text-[#fff] uppercase text-[12px] font-[600]">
                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">Home</li>
                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">About</li>
                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">Services</li>
                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">Blog</li>
                        <li className="hover:text-[#14b8a6] duration-150 cursor-pointer">Contact us</li>
                    </ul>

                    <div className="login">
                        <LoginBtn name={"Login"} />
                    </div>
                </div>
            </nav>
        </>

    )
}