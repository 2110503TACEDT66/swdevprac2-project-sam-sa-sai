"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white shadow-md p-8">
      <h1 className="text-6xl font-bold mb-8 text-center">
        Booking successful!
      </h1>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Your booking has been confirmed.
      </h1>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Check your booking on Booking page
      </h1>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="py-3 px-6 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        OK
      </button>
    </div>
  );
}
