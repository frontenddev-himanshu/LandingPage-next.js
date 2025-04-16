import LoginBtn from "@/components/loginBtn";

export default function Home() {
  return (
    <>
      <div className="heroSection w-full h-[92vh] bg-[url(https://upcover-shreethemes.vercel.app/static/media/2.e6de6e188d0c6e31767d.jpg)] bg-center bg-cover relative z-1 flex items-center">
        <div className="content-hero px-[20rem]">
          <h2 className="font-[700] text-[#fff] text-5xl capitalize">
            Get all the
          </h2>

          <h2 className="font-[700] text-[#fff] text-5xl capitalize">
            inspirations for your business
          </h2>

          <p className="text-[1.1rem] text-[#ffffffb3] my-[30px]">
            This is just a simple text made for this unique and awesome
            template, you <br></br> can replace it with any text.
          </p>

          <LoginBtn name={"See More"} />
        </div>
      </div>
    </>
  );
}
