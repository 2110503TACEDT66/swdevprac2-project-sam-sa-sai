"use client";
import Image from "next/image";
import getCampground from "@/libs/getCampground";
import DateReserve from "@/components/DateReserve";
import Link from "next/link";
import ReserveCampground from "@/components/ReserveCampground";
import { addBooking } from "@/redux/features/bookSlice";

export default async function CampgroundDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const campground = getCampground(params.id);

  const campgroundReady = await campground;

  if (!campgroundReady) return <p>Campground Loading ...</p>;

  let pic = 0;
  if (campgroundReady && Array.isArray(campgroundReady.picture)) {
    pic = campgroundReady.picture.length;
  }
  let i = 0;

  return (
    <main className="block w-full h-auto flex flex-col justify-center space-y-16 my-10 items-center">
      <div className="w-[90%] h-[70vh] border-4 border-bg-black flex flex-col justify-center  space-y-5 top-1/2 rounded-2xl p-5 items-center">
        <div className="w-[100%] h-[30%] flex flex-row h-auto justify-center items-center">
          <div className="block items-left w-[45%]">
            <div> {campgroundReady.name} </div>
            <div> {campgroundReady.rating} </div>
            <div>
              {" "}
              {campgroundReady.address} {campgroundReady.district}{" "}
              {campgroundReady.postalcode} {campgroundReady.tel}
            </div>
          </div>
          <div className="top-0 right-0 h-[100%] w-[45%] text-2xl items-end text-right text-end">
            <h1 className="h-full"> {campgroundReady.price} Baht</h1>
          </div>
        </div>
        <div className="w-[100%] h-[70%] flex flex-row h-auto justify-center items-center">
          <div className="w-[45%] h-[40vh] rounded-lg p-3 mx-3 my-auto flex items-center justify-center relative">
            <Image
              src={campgroundReady.coverpicture}
              alt="campground picture0"
              layout="fill"
              objectFit="fill"
              className="rounded-lg relative"
            />
          </div>
          <div className="w-[45%] h-[40vh] rounded-lg p-3 mx-3 my-auto flex flex-col items-center justify-center relative">
            <div className="w-[100%] h-[20vh] rounded-lg mx-3 my-2 flex flex-row items-center justify-center relative">
              <div className=" w-[50%] h-full rounded-lg relative m-2">
                <Image
                  src={
                    i < pic ? campgroundReady.picture[i++] : "/img/card2.jpg"
                  }
                  alt="campground picture1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg relative"
                />
              </div>
              <div className="w-[50%] h-full rounded-lg relative">
                <Image
                  src={
                    i < pic ? campgroundReady.picture[i++] : "/img/card2.jpg"
                  }
                  alt="campground picture2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg relative"
                />
              </div>
            </div>
            <div className="w-[100%] h-[20vh] rounded-lg mx-3 my-auto flex flex-row items-center justify-center relative">
              <div className=" w-[50%] h-full rounded-lg relative m-2">
                <Image
                  src={
                    i < pic ? campgroundReady.picture[i++] : "/img/card2.jpg"
                  }
                  alt="campground picture3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg relative"
                />
              </div>
              <div className="w-[50%] h-full rounded-lg relative">
                <Image
                  src={
                    i < pic ? campgroundReady.picture[i++] : "/img/card2.jpg"
                  }
                  alt="campground picture4"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[30vh] flex flex-row justify-center space-x-5 rounded-2xl p-5 items-center">
        <div className="w-[100%] h-[35vh] border-4 border-bg-black flex flex-col justify-center rounded-2xl m-5 items-center">
          {campgroundReady.description}
        </div>
        <div className="w-[100%] h-[35vh] border-4 border-bg-black flex flex-col justify-center rounded-2xl m-5 items-center">
          <div className="text-center">Want to Reserve?</div>
          <Link href="/booking">
            <button
              className="bg-orange-600 px-5 py-3 rounded-lg"
              onClick={ReserveCampground}
            >
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
