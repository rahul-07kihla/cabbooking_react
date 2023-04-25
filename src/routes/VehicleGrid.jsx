import { useState, useEffect } from "react";
import { VehicleCard } from "../components/VehicleCard";
import { Icons } from "../components/Icons";
import { urlprefix } from '../utils/common';

export function VehicleGrid() {
  const url = urlprefix() + "car";
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
      <VehicleCard />
    </>
  );
}

function FilterSelected({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="capitalize flex flex-row items-center justify-baseline gap-x-3 cursor-pointer py-[6px] px-5 bg-gray-800 border border-transparent hover:border-neutral-700 rounded-3xl"
    >
      <span>{item}</span> <Icons.Close className="w-5 h-5" />
    </button>
  );
}
