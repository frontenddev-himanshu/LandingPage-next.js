import Image from "next/image";
import Logo from '@/images/logo.png';
import LoginBtn from '@/components/loginBtn';


export default function Header() {

    return (

        <>
            <nav className="w-full px-[20rem] h-[8vh] bg-[#161c2d] flex justify-between items-center">
                <div className="logo h-[25px] w-[120px] relative">
                    <Image fill objectFit="cover" objectPosition="center" src={Logo.src} alt="Logo" />
                </div>



                <div className="links flex items-center gap-5">
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