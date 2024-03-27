import { CreateBookingItem } from "../../interface";

const createBooking = async (campground: CreateBookingItem, token: string) => {
  try {
    const response = await fetch(
      `https://project-backend-eight.vercel.app/api-informations/campgrounds/${campground.campground}/reservations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(campground),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to create Booking");
    }

    return responseData;
  } catch (error) {
    alert("You create more than 3 reservation");
    throw error;
  }
};

export default createBooking;
