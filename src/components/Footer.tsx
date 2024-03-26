import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="inset-x-0 bottom-0 relative z-40 block
    h-[30vh] border border-solid border-slate-300
    bg-cyan-800 px-2 py-1.5 justify-center
    text-slate-100 font-sans font-normal text-lg text-center text-wrap"
    >
      <div className="flex flex-row justify-center relative p-3">
        <div className="left-0 w-[10%] h-auto flex flex-row justify-start items-left">
          <Image
            src={"/img/logo.png"}
            className="w-auto h-[50%]"
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
