import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.to("indicator", {
  duration: 3,
  repeat: -1, // Sonsuz döngü için
  ease: "none",
  motionPath: {
    path: "#myPath",
    align: "#myPath",
    autoRotate: true, // Öğeyi yol boyunca döndürür
  },
});

export default function GsapPath() {
  return (
    <div>
      <svg width="1470" height="600">
        <path
          id="myPath"
          d="M408.693,-73.824 C416.766,-104.348 416.97,-41.129 417.987,64.285 418.703,139.272 61.258,77.147 45.722,112.89 29.84,160.107 52.918,293.901 52.494,393.813 52.124,480.789 481.814,381.549 471.441,421.972 "
          fill="none"
          stroke="black"
        />
      </svg>
      <div
        id="indicator"
        className="absolute w-4 h-4 bg-red-500 rounded-full"
      ></div>
    </div>
  );
}
