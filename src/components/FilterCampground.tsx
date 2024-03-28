import React, { useState } from "react";
import {
  TextField,
  Rating,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

interface FilterProps {
  setMinValue: React.Dispatch<React.SetStateAction<number | null>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedStars: React.Dispatch<React.SetStateAction<number[]>>;
  setCityFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({
  setMinValue: setMin,
  setMaxValue: setMax,
  setSelectedStars: setStars,
  setCityFilter: setCity,
}: FilterProps) {
  const [valueMax, setMaxValue] = useState<number | null>(null);
  const [valueMin, setMinValue] = useState<number | null>(null);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [cityFilter, setCityFilter] = useState<string>("");

  const handleStarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (selectedStars.includes(value)) {
      setSelectedStars(selectedStars.filter((star) => star !== value));
    } else {
      setSelectedStars([...selectedStars, value]);
    }
  };

  return (
    <div className="bg-white w-full my-auto block border border-black rounded-lg">
      <div className="w-[100%] block items-center">
        <div className="p-8 border-b border-black">
          <div className="text-lg text-left">Stars</div>
          <div>
            <FormGroup>
              {[1, 2, 3, 4, 5].map((value) => (
                <FormControlLabel
                  key={value}
                  control={
                    <Checkbox
                      checked={selectedStars.includes(value)}
                      onChange={handleStarChange}
                      value={value.toString()}
                      size="small"
                    />
                  }
                  label={<Rating value={value} max={5} readOnly />}
                />
              ))}
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
                  setMin(parseInt(e.target.value) || null);
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
                  setMax(parseInt(e.target.value) || null);
                }}
              />
            </div>
          </div>
        </div>
        <div className="p-8 space-y-2">
          <div className="text-lg text-left">City</div>
          <div className="items-left text-left">
            <TextField
              value={cityFilter}
              label={"Name of City"}
              helperText="Ex. Chiangmai, Bangkok"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
