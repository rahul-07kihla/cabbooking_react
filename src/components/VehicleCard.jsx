import React, { useState, useEffect } from "react";
import { getBackgroundColorClass } from "../lib/utils";
import { formatNumberAsCurrency } from "../lib/utils";
import { Icons } from "./Icons";
import { Button } from "./ui/button";

export function VehicleCard() {
  const url = "http://127.0.0.1:8000/api/car";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
    <div className="h1 text-center">Vahicle Grid</div>
    <div className="container">
      <div className="row d-flex text-center">
        {data.map((dataObj, index) => {
          return (
            <div className="col-md-3 mt-4 text-center">
              <div key={index}>
                <img
                  src={dataObj.image}
                  alt=""
                  className="h-60 w-100 object-cover object-center object-no-repeat group-hover:grayscale group-hover:scale-105 transition-all ease-in rounded img-fluid"
                  loading="lazy"
                  decoding="async"/>
                <div className="h2"><b>{dataObj.name}</b></div>
                <div>{dataObj.model_name}</div>
                <div>Seats: {dataObj.available_seat}</div>
                <Button className="mt-3 font-semibold md:w-56 bg-white text-black px-2 py-[10px] rounded-md text-lg border hover:bg-transparent hover:text-white hover:border-white transition-colors duration-150">Book</Button>
              </div>
            </div>
          );
        })}
    </div>
    </div>
    </>
  );
}
