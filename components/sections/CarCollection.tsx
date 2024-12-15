"use client";

import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/cars/CarCard";
import { DUMMY_CARS } from "@/lib/constants/cars";
import { useCarFilter, FilterType } from "@/lib/hooks/useCarFilter";

const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All Cars' },
  { value: 'new', label: 'New Cars' },
  { value: 'used', label: 'Used Cars' },
];

export default function CarCollection() {
  const { filter, setFilter, filteredCars } = useCarFilter(DUMMY_CARS);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Browse Our Collection</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {FILTER_OPTIONS.map(option => (
            <Button 
              key={option.value}
              variant={filter === option.value ? "default" : "outline"}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}