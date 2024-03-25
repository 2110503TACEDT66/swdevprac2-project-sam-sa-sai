"use client";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {
  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (id && hospital && name && lastname) {
      const item: BookingItem = {
        name: name,
        surname: lastname,
        id: id,
        hospital: hospital,
        bookDate: dayjs(pickupDate).format("YYYY/MM/DD"),
      };
      dispatch(addBooking(item));
    }
  };

  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [lastname, setLastname] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [hospital, setHospital] = useState<string | null>(null);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-4xl mx-5 mt-5">Vaccine Booking</div>
      <FormControl className="rounded-md w-[80%] p-5 space-y-4 items-center">
        <div
          className="space-y-4 w-[60vw] py-12 rounded-xl bg-slate-100 border-cyan-700 border-4 
            flex flex-col justify-center text-center items-center "
        >
          <TextField
            name="Name"
            label="Name"
            className="rounded-md bg-white w-[70%]"
            variant="outlined" //test case last assignment variant="standard"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            name="Lastname"
            label="Lastname"
            className="rounded-md bg-white w-[70%]"
            variant="outlined" //test case last assignment variant="standard"
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
          <TextField
            name="Citizen ID"
            label="Citizen ID"
            className="rounded-md bg-white w-[70%]"
            variant="outlined" //test case last assignment variant="standard"
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
          <FormControl className="w-[70%]">
            <InputLabel id="select-hospital-label">Hospital</InputLabel>
            <Select
              id="hospital"
              labelId="select-hospital-label"
              label="Hospital"
              name="Hospital"
              className="rounded-md bg-white hover:bg-slate-100 text-left"
              variant="outlined"
              onChange={(event) => {
                setHospital(event.target.value as string);
              }}
            >
              <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
              <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
              <MenuItem value="Thammasat">
                Thammasat University Hospital
              </MenuItem>
            </Select>
            <div className="mt-4 w-[100%] w-[100%]">
              <DateReserve
                onDateChange={(value: Dayjs) => {
                  setPickupDate(value);
                }}
              />
            </div>
          </FormControl>
        </div>
        <div className="m-5 w-[100%] h-[10vh] flex flex-col justify-center items-center">
          <button
            type="submit"
            name="Book Vaccine"
            className="block rounded-lg bg-cyan-700 hover:bg-green-600 hover:ring-green-300 
          px-3 py-2 text-white shadow-sm w-[60%] h-[80%] text-lg"
            onClick={makeReservation}
          >
            Book Vaccine
          </button>
        </div>
      </FormControl>
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
