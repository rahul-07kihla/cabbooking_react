import { useReducer, useState, useEffect } from "react";
import { filtersReducer, INITIAL_STATE } from "../filtersReducer";
import { FILTER_ACTION_TYPES } from "../filterActionTypes";
import { Link, ScrollRestoration } from "react-router-dom";
import { VehicleCard } from "../components/VehicleCard";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import { Slider } from "../components/ui/slider";
import { cn } from "../lib/utils";
import { getBackgroundColorClass } from "../lib/utils";
import { formatNumberAsCurrency } from "../lib/utils";
import {
  getBrands,
  getColors,
  getBrandById,
  getColorById,
  getVehicles,
  getCountSelectedBrands,
  getCountSelectedColors,
  getCountAllSelectedFilters,
} from "../lib/vehicles";
import { Icons } from "../components/Icons";
import { Button } from "../components/ui/button";

export function VehicleGrid() {
  const url = "http://192.168.0.116:8000/api/car";
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
