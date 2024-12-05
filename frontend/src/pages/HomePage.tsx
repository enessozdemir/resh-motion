import { useEffect, useState } from "react";
import CarTypes from "../components/CarTypes";
import Dealerships from "../components/Dealerships";
import FeaturesSection from "../components/FeaturesSection";

export default function HomePage() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const response = await fetch("http://localhost:8080/cars");
    if (!response.ok) {
      console.error("Araçlar alınırken hata:", response);
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
    <div className="text-alt-black sm:py-20 py-10 min-h-screen overflow-x-hidden">
      {/* <div>
        <h1 className="text-5xl font-semibold">Araçlar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cars &&
            cars.map((car: any) => (
              <div key={car?.id} className="border rounded-lg p-5">
                <img
                  className="w-full h-44 object-cover rounded-lg"
                  src={car?.defaultPhotoUrl}
                  alt="car"
                />
                <h1 className="text-2xl font-semibold">
                  {car?.brand} {car?.model}
                </h1>
                <p>{car?.price_per_day} ₺</p>
              </div>
            ))}
        </div>  
      </div> */}
      <div className="flex flex-col container mx-auto gap-7 font-poppins leading-none sm:mt-24 mt-40">
        <div className="flex flex-col gap-1 sm:text-[76px] text-[30px] justify-center items-center font-bold">
          <h1 className="text-silver">
            Türkiye'nin <span className="underline">#1</span>
          </h1>
          <h1 className="">Araç Kiralama Platformu</h1>
        </div>
        <p className="font-gabarito sm:text-2xl text-xl text-silver text-center">
          Modern, yenilikçi ve bütçe dostu bir çözümle araç kiralama işlerinizi{" "}
          <br className="sm:block hidden" />
          kolayca yönetin
        </p>
        <div className="text-center">
          <button className="border border-brand-color rounded-full sm:w-1/3 w-2/3 sm:h-16 h-14 text-xl hover:text-white hover:bg-brand-color transition-all ease-in-out duration-300 py-3 px-10 ">
            Hemen Kirala
          </button>
        </div>
      </div>

      {/* <div className="w-full h-1/2 z-[-1] mt-20">
        <Lottie
          animationData={linesAnimation}
          loop={false}
          style={{ width: "100%" }}
        />
      </div> */}
      <div>
        <Dealerships />
      </div>

      <div>
        <FeaturesSection />
      </div>

      <div>
        <CarTypes />
      </div>
    </div>
  );
}
