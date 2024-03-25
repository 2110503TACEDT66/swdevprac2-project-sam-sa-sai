import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="inset-x-0 bottom-0 relative z-40 block
    h-[30vh] border border-solid border-slate-300
    bg-cyan-800 px-2 py-1.5 justify-center
    text-slate-100 font-sans font-normal text-lg text-center text-wrap"
    >
      <div className="flex flex-row justify-center">
        <div className="top-0 relative h-[100%]">
          <Image
            src={"/img/logo.png"}
            className="w-auto h-full"
            alt="logo"
            width={0}
            height={0}
            sizes="100vh"
          />
        </div>
        <div className="">
          <h1></h1>
        </div>
        <div className="">
          <h1></h1>
        </div>
      </div>
    </div>
  );
}
