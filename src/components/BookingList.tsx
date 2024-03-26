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
            key={reservationItem.id}
          >
            <div className="text-xl pl-2">
              {/* {reservationItem.name} {reservationItem.surname} */}
            </div>
            <table className="table-auto border-separate border-spacing-2">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>{reservationItem.id}</td>
                </tr>
                <tr>
                  <td>Hospital</td>
                  <td>{reservationItem.campground}</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>{reservationItem.checkin.toString()}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="block bg-cyan-700 text-white border border-white 
                         p-2 rounded-lg relative bottom-0
                         hover:bg-white hover:text-cyan-700 
                         hover:border-cyan-700 hover:border-2"
              onClick={() => dispatch(removeBooking(reservationItem.id))}
            >
              Remove Vaccine Booking
            </button>
          </div>
        ))
      ) : (
        <h1 className="text-center text-3xl m-16">"No Vaccine Booking"</h1>
      )}
    </>
  );
}
