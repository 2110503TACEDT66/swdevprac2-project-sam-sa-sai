import { HospitalDetail } from "../../interface";
//const fetch = require("node-fetch");

export default async function getHospital(id: string): Promise<HospitalDetail> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://vaccine-app-backend.vercel.app/api/v1/hospitals/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch hospital");
  }

  return await response.json();
}
