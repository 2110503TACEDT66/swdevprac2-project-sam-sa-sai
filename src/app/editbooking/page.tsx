"use client";
import { FormControl } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CreateBookingItem, UserJson } from "../../../interface";
import getCampground from "@/libs/getCampground";
import { useSession } from "next-auth/react";
import createBooking from "@/libs/createBooking";
import { BookingItem, BookingOneJson } from "../../../interface";
import getOneBooking from "@/libs/getOneBooking";
import getUserProfile from "@/libs/getUserProfile";
import Link from "next/link";

export default function EditBooking() {
  const router = useRouter();
  const session = useSession();
  // console.log(session.data.user);

  const urlParams = useSearchParams();
  const id = urlParams.get(`id`);
  const [bookingResponse, setBookingResponse] = useState<null | BookingItem>(
    null
  );
  const [name, setName] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [tel, setTel] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session && session.data && session.data.user) {
          const booking = await getOneBooking(
            id as string,
            session.data?.user.token
          );
          setBookingResponse(booking.data);
          const profile = await getUserProfile(session.data.user.token);
          setName(profile.data.name);
          setEmail(profile.data.email);
          setTel(profile.data.tel);
          // console.log(booking.data);
          // const campgrounddetail = await getCampground(booking.campground.id);
          // setCampground(campgrounddetail as CampgroundItem);
          // console.log(campgrounddetail);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, session.data?.user]);

  const [checkin, setCheckin] = useState<Dayjs>(
    dayjs(bookingResponse?.apptDate)
  );

  if (!session || !session.data) return null;

  const makeReservation = () => {
    if (id && bookingResponse && session.data) {
      try {
        const item: CreateBookingItem = {
          apptDate: dayjs(checkin).toISOString(),
          user: session.data.user._id,
          campground: id,
        };
        createBooking(item, session.data.user.token);
      } catch (error) {
        console.log(error);
      }
      // dispatch(addBooking(item));
      router.push("/success");
    } else {
      alert("edit success");
    }
  };

  return (
    <main className="w-[100%]  block items-center space-y-4 mb-10 justify-center">
      <div className="text-2xl mx-5 mt-10 text-center relative">
        {bookingResponse?.campground.name}
      </div>
      <div className="text-sm mx-5 text-center relative text-gray-500">
        bookingID: {bookingResponse?._id}
      </div>
      <div
        className="w-[100%] h-[65vh] items-center justify-center
                      space-x-5 flex flex-row relative"
      >
        <FormControl
          className="w-[100%] h-[90%] space-x-16 flex items-center justify-center relative"
          style={{ flexDirection: "row" }}
        >
          <div className="w-[35%] h-[90%] border border-black rounded-xl flex flex-col relative ">
            <div className="px-5 pt-5 pb-1">
              {bookingResponse?.campground?.address}
              {bookingResponse?.campground?.district} district,{" "}
              {bookingResponse?.campground?.province}
              {bookingResponse?.campground?.postalcode}
            </div>
            <a href={bookingResponse?.campground.url}>
              <div className="pl-5 text-sky-500 text-sm">
                Visit campground website
              </div>
            </a>
            <div className="border-b border-black">
              <div
                className="mt-4 w-[100%] flex flex-row items-center justify-center space-x-5 p-5"
                style={{ flexDirection: "row" }}
              >
                <div className="text-right">New Date</div>
                <div>
                  <DateReserve
                    onDateChange={(value: Dayjs) => {
                      setCheckin(value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-5 pl-5 text-xl">Contact Information</div>
            <div className="pt-3 pl-10 pb-5 text-gray-500">
              <div>Name: {name}</div>
              <div>Email: {email}</div>
              <div>Tel: {tel}</div>
            </div>
          </div>
          <div className="w-[35%] h-[90%] flex flex-col justify-start content-start border border-black rounded-xl relative">
            <div className="text-lg text-left w-[100%] pl-10 pt-10">Price</div>
            <div className="text-2xl text-left w-[100%] h-[20%] pl-10">
              THB {bookingResponse?.campground.price}/night
            </div>
            <div className="text-lg text-left w-[100%] h-[30%] pl-10">
              Current Date:{" "}
              {dayjs(bookingResponse?.apptDate).format("YYYY/MM/DD")}
            </div>
            <div className="w-[100%] h-[20%] flex flex-row justify-center items-center space-x-10 my-5">
              <button
                type="submit"
                name="Book Vaccine"
                className="block rounded-lg bg-orange-600 hover:bg-white hover:ring-red-300 hover:text-orange-600
                           px-3 py-2 text-white shadow-sm w-[30%] border-2 border-orange-600"
                onClick={makeReservation}
              >
                Cancel
              </button>
              <button
                type="submit"
                name="Book Vaccine"
                className="block rounded-lg bg-orange-600 hover:bg-green-600 hover:ring-green-300 
          px-3 py-2 text-white shadow-sm w-[30%] border-2 border-orange-600 hover:border-green-300"
                onClick={makeReservation}
              >
                Save edit
              </button>
            </div>
          </div>
        </FormControl>
      </div>
    </main>
  );
}
