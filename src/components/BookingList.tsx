"use client";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function ReservationBooking() {
  const bookItems = useAppSelector(
    (state) => state.reduxPersistedReducer.bookSlice.bookItems
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {bookItems.length > 0 ? (
        bookItems.map((reservationItem) => (
          <div
            className="bg-slate-200 rounded-lg  px-5 mx-5 py-5 my-4"
            key={reservationItem.campgroundid}
          >
            <div className="text-xl pl-2">
              {/* {reservationItem.name} {reservationItem.surname} */}
            </div>
            <table className="table-auto border-separate border-spacing-2">
              <tbody>
                <tr>
                  <td>Campground ID</td>
                  <td>{reservationItem.campgroundid}</td>
                </tr>
                <tr>
                  <td>Date Check-In</td>
                  <td>{reservationItem.checkout.toString()}</td>
                </tr>
                <tr>
                  <td>Date Check-Out</td>
                  <td>{reservationItem.checkin.toString()}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="block bg-orange-600 text-white border border-white 
                         p-2 rounded-lg relative bottom-0
                         hover:bg-white hover:text-cyan-700 
                         hover:border-cyan-700 hover:border-2"
              onClick={() =>
                dispatch(removeBooking(reservationItem.campgroundid))
              }
            >
              Remove Vaccine Booking
            </button>
          </div>
        ))
      ) : (
        <h1 className="text-center text-3xl m-16">"No Campground Booking"</h1>
      )}
    </>
  );
}
