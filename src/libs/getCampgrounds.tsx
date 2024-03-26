import { CampgroundJson } from "../../interface";
//const fetch = require("node-fetch");

export default async function getCampgrounds(): Promise<CampgroundJson> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    "https://vaccine-app-backend.vercel.app/api/v1/hospitals"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch campgrounds");
  }

  return await response.json();
}
