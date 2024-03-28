import ReservationBooking from "@/components/BookingList";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function myBooking() {
  return (
    <main>
      <Suspense
        fallback={
          <p className="m-10">
            <p className="text-xl mb-5">Loading ...</p>
            <LinearProgress />
          </p>
        }
      >
        <ReservationBooking />;
      </Suspense>
    </main>
  );
}
