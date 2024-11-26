import { useEffect, useState } from "react";
export default function HomePage() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const response = await fetch("http://localhost:8080/cars");
    if (!response.ok) {
      console.error("Error fetching cars");
      return;
    } else {
      const data = await response.json();
      setCars(data);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="container mx-auto py-20 px-5 sm:px-0 min-h-screen">
      <div className="flex flex-col gap-5">
        {cars &&
          cars.map((car: any) => (
            <div key={car?.id} className="flex gap-5">
              <div>
                <img
                  className="w-[650px] h-96 border rounded-lg"
                  src={car?.defaultPhotoUrl}
                  alt="car"
                />
              </div>
              <div>
                <h1 className="text-5xl font-semibold">
                  {car?.brand} {car?.model}
                </h1>

                <p>{car?.price_per_day} ₺</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
