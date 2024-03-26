"use client";
import Link from "next/link";
import Card from "./Card";
import { CampgroundJson } from "../../interface";
import {
  TextField,
  Rating,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export default async function CampgroundCatalog({
  campgroundJson,
}: {
  campgroundJson: Promise<CampgroundJson>;
}) {
  const campgroundReady = await campgroundJson;
  return (
    <>
      <div className="w[95%] m-5 p-5 flex flex-row flex-wrap space-x-10 justify-center items-start">
        <div className="w-[25%] relative items-start">
          <div className="bg-white w-full my-auto block border border-black rounded-lg">
            <div className="w-[100%] block items-center">
              <div className="p-8 border-b border-black">
                <div className="text-lg text-left">Stars</div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label={<Rating value={1} max={1} readOnly />}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label={<Rating value={2} max={2} readOnly />}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label={<Rating value={3} max={3} readOnly />}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label={<Rating value={4} max={4} readOnly />}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label={<Rating value={5} max={5} readOnly />}
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="p-8 border-b border-black">
                <div>
                  <div className="text-lg">Prices Range (per night)</div>
                </div>
                <div className="flex flex-row">
                  <div className="m-2 ">
                    <TextField
                      label={"min"}
                      type="number"
                      size="small"
                      variant="outlined"
                    />
                  </div>
                  <div className="m-2">-</div>
                  <div className="m-2 ">
                    <TextField
                      label={"max"}
                      type="number"
                      size="small"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-2">
                <div className="text-lg text-left">City</div>

                <div className="items-left text-left">
                  <TextField
                    label={"Name of City"}
                    helperText="Ex. Chiangmai, Bangkok"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] relative items-center">
          {campgroundReady.data.map((campgroundItem) => (
            <Link href={`/campground/${campgroundItem.id}`} className="w-[95%]">
              <Card
                key={campgroundItem.name}
                campgroundName={campgroundItem.name}
                imgSrc={campgroundItem.coverpicture}
                price={campgroundItem.price}
                province={campgroundItem.province}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
