"use client";
import styles from "./banner.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  let [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div
      className={styles.banner}
      onClick={() => {
        setIndex((index + 1) % 4);
      }}
    >
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        priority
        className="object-cover opacity-90"
      />
      <div className="top-2/4 text-center text-wrap z-10 relative">
        <h1 className="text-5xl font-sans mb-1">Vaccine Service Center</h1>
        <h3 className="text-2xl font-mono">We care for your health</h3>
      </div>
      {session ? (
        <div className="z-30 absolute top-5 right-10 font-semibold text-xl text-cyan-800">
          Welcome {session.user?.name}
        </div>
      ) : null}
      <button
        className="bg-white text-cyan-700 border border-cyan-700 
      font-semibold p-2 m-3 rounded-lg z-30 absolute bottom-0 right-0
      hover:bg-cyan-700 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          router.push("/hospital");
        }}
      >
        Select Hospital
      </button>
    </div>
  );
}
