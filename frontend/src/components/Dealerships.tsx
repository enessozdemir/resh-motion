import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { motion } from "framer-motion";
import tt, { Map } from "@tomtom-international/web-sdk-maps";
import React, { useRef, useState, useEffect } from "react";
import { PiMapPinFill } from "react-icons/pi";
import ReactDOM from "react-dom/client";
import { CiMail, CiMapPin, CiMobile1 } from "react-icons/ci";

interface Dealership {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  long: number;
  lat: number;
}

const Dealerships: React.FC = () => {
  const mapElement = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);
  const API_KEY = import.meta.env.VITE_MAP_API_KEY;
  const [dealerships, setDealerships] = useState([]);
  const [dealershipInfos, setDealershipInfos] = useState<Dealership>({
    id: 1,
    name: "Köroğlu Otomotiv",
    city: "İstanbul",
    address: "Zümrütevler, Keskin Sk. No:6, Maltepe/İstanbul",
    phone: "+90 534 772 01 45",
    email: "korogluotomotiv@reshmotion.com",
    long: 29.15133,
    lat: 40.92928,
  });

  useEffect(() => {
    const getDealerships = async () => {
      try {
        const response = await fetch("http://localhost:8080/dealerships");
        if (response.ok) {
          const data = await response.json();
          setDealerships(data);
        } else {
          console.error("Bayiler alınırken hata:", response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDealerships();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && mapElement.current) {
      if (!API_KEY) {
        console.error("API key is missing.");
        return;
      }

      const mapInstance = tt.map({
        key: API_KEY,
        container: mapElement.current,
        center: [35.17822, 39.55488],
        zoom: 4.9,
        style:
          "https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAZVM4OHRMeEtZdElMZllDajtlZWJmOWZjMy1hYTRiLTQ3YTAtOTkxZC0xMzU3ZjBmNmUyNzA=/drafts/0.json",
      });

      mapInstance.scrollZoom.disable();
      mapInstance.dragRotate.disable();
      mapInstance.touchZoomRotate.disable();

      setMap(mapInstance);

      return () => {
        mapInstance.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (map && dealerships.length > 0) {
      dealerships.forEach((dShip: any) => {
        const createCustomMarkerElement = () => {
          const div = document.createElement("div");
          div.className = "custom-marker";
          div.style.width = "25px";
          div.style.height = "25px";
          div.style.cursor = "pointer";

          const root = ReactDOM.createRoot(div);
          root.render(
            <PiMapPinFill
              size={25}
              color="#FF5252"
              onClick={() => {
                setDealershipInfos({
                  id: dShip?.id,
                  name: dShip?.name,
                  city: dShip?.city,
                  address: dShip?.address,
                  phone: dShip?.phone_number,
                  email: dShip?.email,
                  long: dShip?.longitude,
                  lat: dShip?.latitude,
                });
              }}
            />
          );

          return div;
        };

        new tt.Marker({
          element: createCustomMarkerElement(),
        })
          .setLngLat([dShip.longitude, dShip.latitude])
          .addTo(map);
      });
    }
  }, [map, dealerships]);

  return (
    <div className="w-11/12 text-alt-black mt-60 rounded-tr-2xl rounded-br-2xl border-t-4 border-b-4 border-r-4 border-alt-black ">
      <div className="flex">
        <motion.div
          className="w-full sm:w-4/6 h-[600px] sm:h-[650px] rounded-tr-2xl rounded-br-2xl bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div ref={mapElement} className="w-full h-full"></div>
        </motion.div>

        <div className="w-2/6 mt-10 px-10">
          <div className="flex flex-col gap-32">
            <div className="flex flex-col">
              <div>
                <h3 className="text-4xl font-bold">{dealershipInfos.name}</h3>
                <p className="text-silver text-lg leading-none">
                  {dealershipInfos.city}
                </p>
              </div>

              <div className="flex flex-col gap-5 mt-10 font-medium">
                <div className="flex gap-2 items-center">
                  <CiMapPin size={22} color="#FF5252" />
                  <p className="text-md">{dealershipInfos.address}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CiMobile1 size={22} color="#FF5252" />
                  <p className="text-md">{dealershipInfos.phone}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CiMail size={22} color="#FF5252" />
                  <p className="text-md">{dealershipInfos.email}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-2xl text-silver font-semibold">
                <span className="text-alt-black">Bayilerimiz,</span> şehir
                merkezlerine yakın konumlarıyla size en hızlı ve kolay erişimi
                sunuyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealerships;
