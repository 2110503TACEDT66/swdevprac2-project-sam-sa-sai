"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();
  //console.log(session?.user.token)

  return (
    <div className={styles.banner} onClick={() => setIndex(index + 1)}>
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1 className="text-4xl font-medium z-40"> Nature Awaits </h1>
        <h2 className="text-3xl font-serif z-40">
          {" "}
          "Unlock Boundless Camping Experiences"{" "}
        </h2>
      </div>
      {session ? (
        <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
          Welcome {session.user?.name}
        </div>
      ) : null}
      <button
        className="bg-orange-600 text-white border border-green-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-[10%] right-[40%]
                hover:bg-green-600 hover:text-white hover:transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/campground");
        }}
      >
        Choose Your Campground Escape !
      </button>
    </div>
  );
}
