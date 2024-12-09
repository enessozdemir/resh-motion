import { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(MotionPathPlugin);

export default function MotionPath() {
  const navigate = useNavigate();
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
    <div className="relative flex flex-col gap-40 w-full px-20 py-40 text-alt-black">
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="carPath"
          d="
            M200 40 
            L1300 40 
            Q1380 40 1380 90
            L1380 120
            Q1380 170 1320 170
            L180 170
            Q120 170 120 120
            L120 90
            Q120 40 200 40
            "
          fill="none"
          stroke-width="2"
        />
      </svg>
      <div id="movingObject" className="absolute w-24 h-24">
        <img
          onClick={() => navigate("/cars")}
          className="rotate-90 cursor-pointer"
          src="/car_images/move.png"
          alt=""
        />
      </div>
    </div>
  );
}
