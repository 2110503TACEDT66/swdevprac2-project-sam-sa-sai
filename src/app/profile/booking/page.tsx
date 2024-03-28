"use client";
import getUserProfile from "@/libs/getUserProfile";
import Link from "next/link";
import DateReserve from "@/components/DateReserve";
import userLogOut from "@/libs/userLogout";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useState } from "react";
import getBookings from "@/libs/getBooking";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { BookingItem } from "../../../../interface";
import { useEffect } from "react";
import deleteBooking from "@/libs/deleteBooking";
import LogoutModal from "@/components/LogoutModel";
// import { useRouter } from "next/navigation";

export default function Profile() {
  // const router = useRouter();

  // const [isEditing, setIsEditing] = useState(false);
  // const [name, setName] = useState(null);

  const session = useSession();
  console.log(session);

  const [reservation, setreservation] = useState<null | BookingItem[]>(null);
  const [name, setName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const fetchData = async () => {
    if (session.data?.user) {
      const res = await getBookings(session.data.user.token);
      const roleuser = await getUserProfile(session.data.user.token);
      setreservation(res.data);
      setName(roleuser.data.name);
    }
  };

  useEffect(() => {
    fetchData();
  }, [session.data?.user]);

  return (
    <div className="w-full h-[100vh] flex flex-row justtify-center items-center">
      <div className="w-[30%] h-full bg-slate-200 flex flex-col items-center py-10 space-y-5 relative">
        <div className="h-[30%] w-[60%] relative">
          <Image
            src={"/img/logo2.png"}
            alt="profile picture"
            objectFit="cover"
            width={300}
            height={300}
          />
        </div>
        <div className="h-[5%] w-[90%] relative">
          <div className="text-3xl text-center mt-12">{name}</div>
        </div>
        <div className="h-[20%] w-[95%] space-y-2 flex-1 itemscenter relative">
          <Link href={"/profile/information"}>
            <div className="pb-2 pl-5 border-b border-black mt-16 hover:text-bold hover:border-b-2">
              Profile
            </div>
          </Link>
          <Link href={"/profile/booking"}>
            <div className="pb-2 pl-5 border-b border-black mt-5 hover:text-bold hover:border-b-2">
              Booking
            </div>
          </Link>
        </div>
        <div className="h-[75%] w-[95%] flex items-end">
          <div
            className="w-[100%] pb-2 pl-5 border-b border-black bottom-4 cursor-pointer flex flex-row hover:text-bold hover:border-b-2"
            onClick={() => setShowLogoutModal(true)}
          >
            Logout
            <Image
              src={"/img/logoutprofile.png"}
              alt="logout logo"
              width={20}
              height={10}
              className="ml-2 scale-75"
            />
          </div>
        </div>
      </div>
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      />
      <div className="w-[70%] h-full text-left mx-20 mt-48">
        <div className="text-4xl ml-4 mb-8 underline ml-5">Booking</div>
        {reservation && reservation.length > 0 ? (
          <div className="px-5 mt-10 py-5 flex flex-col justify-center">
            <div className="pl-2 flex flex-row h-[20px] items-center text-black text-xl">
              <p className="w-[50%] flex-wrap justify-lefy">Camground Name</p>
              <p className="w-[25%] flex-wrap justify-center">Date</p>
              <div className="w-[25%] flex-wrap space-x-3 justify-end items-right"></div>
            </div>
          </div>
        ) : null}
        <div className="flex flex-col space-y-4 m-4 p-3 overflow-y-scroll overscroll-y-auto bg-slate-100 h-[60vh] relative">
          {reservation && reservation.length > 0 ? (
            reservation.map((reservationItem) => (
              <div
                className="bg-slate-200 rounded-lg  px-5 py-5 flex flex-col justify-center"
                key={reservationItem._id}
              >
                <div className="pl-2 flex flex-row h-[20px] items-center ">
                  <p className="w-[50%] flex-wrap justify-lefy">
                    {reservationItem.campground.name}
                  </p>
                  <p className="w-[25%] flex-wrap justify-center">
                    {dayjs(reservationItem.createdAt).format("YYYY-MM-DD")}
                  </p>
                  <div className="w-[25%] flex-wrap space-x-3 justify-end items-right">
                    <Link href={`/editbooking?id=${reservationItem._id}`}>
                      <button className="py-2 px-3 bg-stone-600 rounded-lg text-white hover:bg-stone-800">
                        edit
                      </button>
                    </Link>
                    <button
                      disabled={isDeleting}
                      className={
                        isDeleting
                          ? "py-2 px-3 bg-stone-400 rounded-lg text-white"
                          : "py-2 px-3 bg-stone-600 rounded-lg text-white hover:bg-stone-800"
                      }
                      onClick={async () => {
                        if (session.data) {
                          setIsDeleting(true);
                          try {
                            await deleteBooking(
                              reservationItem._id,
                              session.data?.user.token
                            );
                            fetchData();
                          } catch (error) {
                            console.log(error);
                          } finally {
                            alert("delete reservation successful");
                            setIsDeleting(false);
                          }
                        }
                      }}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-2xl m-16">
              "No Campground Booking"
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
