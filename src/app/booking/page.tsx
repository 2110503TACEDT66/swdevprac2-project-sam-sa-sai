"use client";
import { FormControl } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";
import { useRouter } from "next/navigation";

export default function Booking() {
  const ruoter = useRouter();

  const urlParams = useSearchParams();
  const id = urlParams.get(`id`);

  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (id) {
      const item: BookingItem = {
        campgroundid: id,
        checkin: dayjs(checkin).format("YYYY/MM/DD"),
        checkout: dayjs(checkout).format("YYYY/MM/DD"),
      };
      dispatch(addBooking(item));
      ruoter.push("/success");
    }
  };

  const [checkin, setCheckin] = useState<Dayjs | null>(null);
  const [checkout, setCheckout] = useState<Dayjs | null>(null);

  return (
    <main className="w-[100%]  flex flex-wrap flex-col items-center space-y-4 ">
      <div className="w-[90%] h-[60vh] flex flex-wrap flex-col border border-black items-center m-10 rounded-xl">
        <div className="text-4xl mx-5 mt-5 text-center">Campground Booking</div>
        <FormControl className="rounded-md w-[80%] p-5 space-y-4 items-center flex flex-col justify-center">
          <div className="mt-4 w-[100%] flex flex-row items-center justify-center space-x-5">
            <div>Check-In</div>
            <DateReserve
              onDateChange={(value: Dayjs) => {
                setCheckin(value);
              }}
            />
          </div>
          <div className="mt-4 w-[100%] flex flex-row items-center justify-center space-x-5">
            <div>Check-Out</div>
            <DateReserve
              onDateChange={(value: Dayjs) => {
                setCheckout(value);
              }}
            />
          </div>

          <div className="m-5 w-[100%] h-[10vh] flex flex-col justify-center items-center">
            <button
              type="submit"
              name="Book Vaccine"
              className="block rounded-lg bg-orange-600 hover:bg-green-600 hover:ring-green-300 
          px-3 py-2 text-white shadow-sm w-[60%] h-[80%] text-lg"
              onClick={makeReservation}
            >
              Book Campground
            </button>
          </div>
        </FormControl>
      </div>
    </main>
  );
}

/*
<div
        className="space-y-1 w-[60vw] rounded-xl bg-slate-100 border-slate-500 border 
            flex flex-col justify-start text-left items-start "
      >
        <table className="table-auto border-separate border-spacing-2 m-5">
          <tbody>
            <tr>
              <td>id : </td>
              <td>{profile.data._id}</td>
            </tr>
            <tr>
              <td>Name : </td>
              <td>{profile.data.name}</td>
            </tr>
            <tr>
              <td>Email : </td>
              <td>{profile.data.email}</td>
            </tr>
            <tr>
              <td>Tel. : </td>
              <td>{profile.data.tel}</td>
            </tr>
            <tr>
              <td>Member Since : </td>
              <td>{createdAt.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
*/
