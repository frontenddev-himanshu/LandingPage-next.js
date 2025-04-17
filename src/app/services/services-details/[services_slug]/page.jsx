

export default function servicesPages({ params }) {
    return (
        <>
             <div className="heroSection w-full h-[92vh] bg-[url(https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover relative z-1 flex items-center justify-center">
                <div className="content-hero">

                    <h1 className="aboutLoc font-[800] text-[#fff] text-5xl bg-[#14b8a6] px-8 py-3 uppercase">{params.services_slug}</h1>

                </div>
            </div>

        </>
    );
}
