import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { HospitalJson, HospitalItem } from "../../../../interface";

export default function Hospital() {
  const hospitals = getHospitals();
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select Your Hospital</h1>
      <Suspense
        fallback={
          <p className="m-10">
            <p className="text-xl mb-5">Loading ...</p>
            <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalsJson={hospitals} />
      </Suspense>
    </main>
  );
}
