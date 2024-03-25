"use client";
import Card from "./Card";
import { useReducer, useState, useEffect } from "react";
import Link from "next/link";
import getHospitals from "@/libs/getHospitals";
import { HospitalJson } from "../../interface";

// const hospitalRating = new Map([
//   ["Chulalongkorn Hospital", { rating: 5, img: "/img/chula.jpg" }],
//   ["Rajavithi Hospital", { rating: 5, img: "/img/rajavithi.jpg" }],
//   ["Thammasat University Hospital", { rating: 5, img: "/img/thammasat.jpg" }],
// ]);

/**
 *  Mock data for Demontration Only
 */
const mockHospitalRepo = [
  {
    hid: "001",
    name: "Chulalongkorn Hospital",
    img: "/img/chula.jpg",
    rating: 5,
  },
  {
    hid: "002",
    name: "Rajavithi Hospital",
    img: "/img/rajavithi.jpg",
    rating: 5,
  },
  {
    hid: "003",
    name: "Thammasat University Hospital",
    img: "/img/thammasat.jpg",
    rating: 5,
  },
];

export default function CardPanel() {
  const [hospitalsResponse, sethospitalsResponse] =
    useState<null | HospitalJson>(null);

  useEffect(() => {
    const fetchData = async () => {
      const hospitals = await getHospitals();
      sethospitalsResponse(hospitals);
      fetchData();
    };
  }, []);

  const showRatingReducer2 = (
    ratingList: Map<string, { rating: number; img: string }>,
    action: { type: string; hospitalName: string; rating: number }
  ) => {
    const newMap = new Map(ratingList);
    switch (action.type) {
      case "set": {
        const hospital = newMap.get(action.hospitalName);
        if (hospital) {
          newMap.set(action.hospitalName, {
            ...hospital,
            rating: action.rating,
          });
        }
        return newMap;
      }
      case "remove": {
        const hospital = newMap.get(action.hospitalName);
        if (hospital) {
          newMap.set(action.hospitalName, {
            ...hospital,
            rating: 0,
          });
        }
        //newMap.delete(action.hospitalName);
        return newMap;
      }
      default:
        return newMap;
    }
  };

  const showRatingReducer = (
    ratingList: { hid: string; name: string; img: string; rating: number }[],
    action: { type: string; hospitalName: string; rating: number }
  ) => {
    const newRatingList = [...ratingList];
    switch (action.type) {
      case "set": {
        const hospitalIndex = newRatingList.findIndex(
          (hospital) => hospital.name === action.hospitalName
        );
        if (hospitalIndex !== -1) {
          newRatingList[hospitalIndex].rating = action.rating;
        }
        return newRatingList;
      }
      case "remove": {
        const hospitalIndex = newRatingList.findIndex(
          (hospital) => hospital.name === action.hospitalName
        );
        if (hospitalIndex !== -1) {
          newRatingList[hospitalIndex].rating = 0;
        }
        return newRatingList;
      }
      default:
        return newRatingList;
    }
  };

  const [ratingList, dispatchShowRating] = useReducer(
    showRatingReducer,
    mockHospitalRepo
  );

  if (!hospitalsResponse) return <p>Hospital Panel is Loading ...</p>;
  return (
    <div className="w-full block space-y-5 items-center">
      <div className="m-5 flex flex-row flex-wrap justify-center">
        {hospitalsResponse.data.map((hospitalItem) => (
          <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5 m-5">
            <Card
              key={hospitalItem.name}
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.picture}
            />
          </Link>
        ))}
        {/* {Array.from(ratingList).map(([hospitalName, { rating, img }]) => (
          <h1></h1>
        ))} */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="underline text-center text-xl items-center">Rating</div>
        <div className="my-4 text-right items-center">
          {Array.from(ratingList).map((hospital) =>
            hospital.rating ? (
              <div
                data-testid={hospital.name}
                key={hospital.name}
                onClick={() => {
                  {
                    dispatchShowRating({
                      type: "remove",
                      hospitalName: hospital.name,
                      rating: hospital.rating,
                    });
                  }
                }}
              >
                {hospital.name} : {hospital.rating}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
