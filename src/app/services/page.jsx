import Link from "next/link";

export default function services() {
    return (
        <>
            <div className="heroSection w-full h-[92vh] bg-[url(https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center bg-cover relative z-1 flex flex-col items-center justify-center">
                <div className="content-hero">
                    <h1 className="font-[800] text-[#fff] text-5xl bg-[#14b8a6] px-8 py-3 uppercase aboutPage">
                        Services Page
                    </h1>
                </div>

                <ul className="servBtn text-center uppercase text-[.8rem] font-[600] text-[#fff]">
                    <li className="bg-[#14b8a6] px-[20px] py-[10px] underline m-5">
                        <Link href={`/services/services-details/Web`}>
                            Web Development
                        </Link>
                    </li>

                    <li className="bg-[#14b8a6] px-[20px] py-[10px] underline m-5">
                        <Link href={`/services/services-details/VideoEditing`}>
                            Video Editing
                        </Link>
                    </li>

                    <li className="bg-[#14b8a6] px-[20px] py-[10px] underline m-5">
                        <Link href={`/services/services-details/GraphicDesginer`}>
                            Graphic Desginer
                        </Link>
                    </li>

                    <li className="bg-[#14b8a6] px-[20px] py-[10px] underline m-5">
                        <Link href={`/services/services-details/VFX`}>
                            VFX
                        </Link>
                    </li>

                    <li className="bg-[#14b8a6] px-[20px] py-[10px] underline m-5">
                        <Link href={`/services/services-details/DegitalMarketing`}>
                            Degital Marketing
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
