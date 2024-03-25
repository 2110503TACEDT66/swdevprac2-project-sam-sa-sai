import Link from "next/link";
import Card from "./Card";
import { HospitalItem, HospitalJson } from "../../interface";

export default async function HospitalCatalog({
  hospitalsJson,
}: {
  hospitalsJson: Promise<HospitalJson>;
}) {
  const hospitalsReady = await hospitalsJson;
  return (
    <>
      Choose 1 of {hospitalsReady.count} hospitals in our catalog
      <div className="m-5 flex flex-row flex-wrap justify-center">
        {hospitalsReady.data.map((HospitalItem) => (
          <Link href={`/hospital/${HospitalItem.id}`} className="w-1/5 m-5">
            <Card
              key={HospitalItem.name}
              hospitalName={HospitalItem.name}
              imgSrc={HospitalItem.picture}
            />
          </Link>
        ))}
        {/* {Array.from(ratingList).map(([hospitalName, { rating, img }]) => (
          <h1></h1>
        ))} */}
      </div>
    </>
  );
}
