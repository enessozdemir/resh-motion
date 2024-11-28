import { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function CarTypes() {
  useEffect(() => {
    gsap.to("#movingObject", {
      duration: 20,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: "#carPath",
        align: "#carPath",
        alignOrigin: [0.5, 0.62],
        autoRotate: true,
      },
    });
  }, []);
  return (
    <div className="relative bg-dots flex flex-col gap-40 w-full px-20 py-40 text-alt-black">
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="carPath"
          d="M1390 10 
            L1390 610 
            Q1390 640 1340 640
            L100 640 
            Q75 640 75 680
            L75 1150 
            Q75 1190 100 1190
            L1340 1190 
            Q1390 1190 1390 1240
            L1390 1800"
          fill="none"
          stroke-width="7"
          strokeDasharray={20}
        />
      </svg>

      <div id="movingObject" className="absolute w-24 h-24">
        <img
          className="-rotate-90 pointer-events-none"
          src="/car_images/move.png"
          alt=""
        />
      </div>
      <div className="flex justify-start">
        <div className=" w-1/2 h-[395px] border-4 border-black rounded-tl-lg rounded-bl-lg">
          <img
            className="object-cover"
            src="/car_images/clio.jpg"
            alt="Ekonomi"
          />
        </div>
        <div className="w-10 hover:w-1/3 flex flex-col justify-center items-center bg-brand-color rounded-tr-lg rounded-br-lg transition-all ease-in-out duration-500 group">
          <h3 className="font-semibold text-white text-3xl rotate-90 group-hover:rotate-0 transition-all ease-in-out duration-500">
            Ekonomi
          </h3>
          <p className="hidden group-hover:block text-white text-opacity-80 text-md mt-4 px-4">
            Ekonomi sınıfı araçlar, bütçe dostu seyahatler için ideal bir
            seçimdir. Yakıt tasarruflu ve kompakt tasarımlarıyla konforlu bir
            deneyim sunar.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-10 hover:w-1/3 flex flex-col justify-center items-center bg-brand-color rounded-tl-lg rounded-bl-lg transition-all ease-in-out duration-500 group">
          <h3 className="font-semibold text-white text-3xl rotate-90 group-hover:rotate-0 transition-all ease-in-out duration-500">
            Orta
          </h3>
          <p className="hidden group-hover:block text-white text-opacity-80 text-md mt-4 px-4">
            Orta segment araçlar, geniş iç hacimleri ve dengeli
            performanslarıyla hem konforlu hem de ekonomik bir sürüş sağlar.
          </p>
        </div>
        <div className="w-1/2 h-[395px] border-4 border-black rounded-tr-lg rounded-br-lg">
          <img
            className="w-full h-full object-cover"
            src="https://3dcache.makolab.net/PRODUCTION/SA/new-megane-sedan/new-megane-sedan_GRADIENT_EXT_TERPR_CUIR02_4F9DEE8EC60DEB3A8F14F5294B4D92B5_04.jpg"
            alt="Orta Segment"
          />
        </div>
      </div>

      <div className="flex justify-start">
        <div className=" w-1/2 h-[395px] border-4 border-black rounded-tl-lg rounded-bl-lg">
          <img
            className="object-cover"
            src="/car_images/audi.jpeg"
            alt="Ekonomi"
          />
        </div>
        <div className="w-10 hover:w-1/3 flex flex-col justify-center items-center bg-brand-color rounded-tr-lg rounded-br-lg transition-all ease-in-out duration-500 group">
          <h3 className="font-semibold text-white text-3xl rotate-90 group-hover:rotate-0 transition-all ease-in-out duration-500">
            Lüks
          </h3>
          <p className="hidden group-hover:block text-white text-opacity-80 text-md mt-4 px-4">
            Lüks sınıf araçlar, prestij ve konforu bir arada sunar. Şık
            tasarımları ve üst düzey donanımlarıyla ayrıcalıklı bir sürüş
            deneyimi yaşayın.
          </p>
        </div>
      </div>
    </div>
  );
}
