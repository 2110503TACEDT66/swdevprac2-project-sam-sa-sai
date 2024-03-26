import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";
import { useRef } from "react";
import { CampgroundJson, CampgroundItem } from "../../interface";

export default async function TopCampgroundCatalog({
  campgroundJson,
}: {
  campgroundJson: Promise<CampgroundJson>;
}) {
  const campgroundJsonReady = await campgroundJson;

  return (
    <>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        {campgroundJsonReady?.data.map((campgroundItem: CampgroundItem) => (
          <Link href={`/campground/${campgroundItem.id}`} className="w-1/5">
            <Card
              campgroundName={campgroundItem.name}
              imgSrc={campgroundItem.coverpicture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
