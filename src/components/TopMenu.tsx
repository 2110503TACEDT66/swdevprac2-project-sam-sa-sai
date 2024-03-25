import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div
      className="inset-x-0 top-0 fixed z-40 flex flex-row
    h-14 border border-solid border-slate-300
    bg-cyan-800 px-2 py-1.5 justify-center
    text-slate-100 font-sans font-normal text-lg text-center text-wrap"
    >
      <div className="left-0 w-[50%] flex flex-row justify-start items-left justify-items-start">
        {session ? (
          <Link
            href="/api/auth/signout"
            className="w-28 text-center my-auto text-text-sm cyan-800 border-r-2"
          >
            Sign-Out
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            className="w-28 text-center my-auto text-text-sm cyan-800 border-r-2"
          >
            Sign-In
          </Link>
        )}
        <Link
          href="/mybooking"
          className="w-28 text-center my-auto text-text-sm cyan-800 border-r-2"
        >
          My Booking
        </Link>
      </div>
      <div className="right-0 flex flex-row justify-end justify-items-end items-right w-[50%]">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <Image
          src={"/img/logo.png"}
          className="w-auto h-full"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </div>
    </div>
  );
}
