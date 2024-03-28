"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs ,{ Dayjs } from "dayjs";
import { useState } from "react";

export default function DateReserve({
  onDateChange,
}: {
  onDateChange: Function;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const currentDate = dayjs();

  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white rounded-lg"
          value={reserveDate}
          onChange={(value) => {
            //if (value && value.diff(currentDate) > 0 ) {
            setReserveDate(value);
            onDateChange(value);
            // } else {
            //   alert(" NOT OK ")
            // }
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
