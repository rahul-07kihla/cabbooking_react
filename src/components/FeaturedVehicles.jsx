import { Link } from "react-router-dom";
import { VehicleCard } from "./VehicleCard";
import { getFeaturedVehicles } from "../lib/vehicles";

export function FeaturedVehicles() {
  const featuredVehicles = getFeaturedVehicles();

  return (
    <section id="featured-cars" className="pb-28 border-b border-slate-800">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide text-center">
          Hot deals right now
        </h2>
          <Link to='/' >
            <VehicleCard />
          </Link>
    </section>
  );
}
