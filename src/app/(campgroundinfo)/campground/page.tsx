"use client";
import CardPanel from "@/components/CardPanel";
import getCampgrounds from "@/libs/getCampgrounds";
import CampgroundCatalog from "@/components/CampgroundCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { CampgroundJson, CampgroundItem } from "../../../../interface";

export default function Campground() {
  const campgrounds = getCampgrounds();
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select Your Campground</h1>
      <Suspense
        fallback={
          <p className="m-10">
            <p className="text-xl mb-5">Loading ...</p>
            <LinearProgress />
          </p>
        }
      >
        <CampgroundCatalog campgroundJson={campgrounds} />
      </Suspense>
    </main>
  );
}
