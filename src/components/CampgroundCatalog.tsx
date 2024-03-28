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
import { useState } from "react";

export default async function CampgroundCatalog({
  campgroundJson,
}: {
  campgroundJson: Promise<CampgroundJson>;
}) {
  const [valueMax, setMaxValue] = useState<number | null>(null);
  const [valueMin, setMinValue] = useState<number | null>(null);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [cityFilter, setCityFilter] = useState<string>("");

  const campgroundReady = await campgroundJson;

  const handleStarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (selectedStars.includes(value)) {
      setSelectedStars(selectedStars.filter((star) => star !== value));
    } else {
      setSelectedStars([...selectedStars, value]);
    }
  };

  const filteredData = campgroundReady.data.filter((item) => {
    const passedStarFilter =
      selectedStars.length === 0 || selectedStars.includes(item.rating);
    const passedPriceFilter =
      (valueMin === null || item.price >= valueMin) &&
      (valueMax === null || item.price <= valueMax);
    const passedCityFilter =
      cityFilter === "" ||
      item.province.toLowerCase().includes(cityFilter.toLowerCase());
    return passedStarFilter && passedPriceFilter && passedCityFilter;
  });

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
                      control={
                        <Checkbox
                          checked={selectedStars.includes(1)}
                          onChange={handleStarChange}
                          value={1}
                          size="small"
                        />
                      }
                      label={<Rating value={1} max={1} readOnly />}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedStars.includes(2)}
                          onChange={handleStarChange}
                          value={2}
                          size="small"
                        />
                      }
                      label={<Rating value={2} max={2} readOnly />}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedStars.includes(3)}
                          onChange={handleStarChange}
                          value={3}
                          size="small"
                        />
                      }
                      label={<Rating value={3} max={3} readOnly />}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedStars.includes(4)}
                          onChange={handleStarChange}
                          value={4}
                          size="small"
                        />
                      }
                      label={<Rating value={4} max={4} readOnly />}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedStars.includes(5)}
                          onChange={handleStarChange}
                          value={5}
                          size="small"
                        />
                      }
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
                      value={valueMin || ""}
                      label={"min"}
                      type="number"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setMinValue(parseInt(e.target.value) || null);
                      }}
                    />
                  </div>
                  <div className="m-2">-</div>
                  <div className="m-2 ">
                    <TextField
                      value={valueMax || ""}
                      label={"max"}
                      type="number"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setMaxValue(parseInt(e.target.value) || null);
                      }}
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div className="p-8 space-y-2">
                <div className="text-lg text-left">City</div>

                <div className="items-left text-left">
                  <TextField
                    value={cityFilter}
                    label={"Name of City"}
                    helperText="Ex. Chiangmai, Bangkok"
                    onChange={(e) => setCityFilter(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] relative items-center">
          {filteredData.map((campgroundItem) => (
            <Link
              href={`/campground/${campgroundItem.id}`}
              className="w-[95%]"
              key={campgroundItem.id}
            >
              <Card
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
