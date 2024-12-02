import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CarTypes() {
  useEffect(() => {
    const imageElement = document.querySelector(".car") as HTMLImageElement;

    ScrollTrigger.create({
      trigger: ".scroll-container",
      start: "32% top",
      end: "+=900",
      pin: true,
      scrub: true,
    });

    gsap.to(".eco", {
      y: -550,
      scrollTrigger: {
        trigger: ".main",
        start: "90px top",
        end: "700px",
        scrub: true,
      },
    });

    gsap.to(".mid", {
      y: -1100,
      scrollTrigger: {
        trigger: ".main",
        start: "300px top",
        end: "900px",
        scrub: true,
        onEnter: () => {
          imageElement.src = "/car_images/megane.jpg";
        },
        onLeaveBack: () => {
          imageElement.src = "/car_images/clio.jpg";
        },
      },
    });

    gsap.to(".lux", {
      y: -500,
      scrollTrigger: {
        trigger: ".main",
        start: "600px top",
        end: "1000px",
        scrub: true,
        onEnter: () => {
          imageElement.src = "/car_images/audi.jpeg";
        },
        onLeaveBack: () => {
          imageElement.src = "/car_images/megane.jpg";
        },
      },
    });
  }, []);

  return (
    <div className="scroll-container text-alt-black mt-32 pl-28">
      <h2 className="text-5xl font-bold">Araç sınıflarımız ile</h2>
      <h2 className="text-silver text-5xl font-bold">
        her bütçeye uygun çözümler.
      </h2>
      <p className="text-silver font-medium text-3xl w-[67%] mt-10 leading-normal">
        Her ihtiyaca ve bütçeye uygun seçenekler sunarak{" "}
        <span className="text-alt-black">konforlu</span>
        <span className="text-alt-black"> ve pratik</span> bir sürüş deneyimini
        kolayca yaşamanızı sağlıyoruz. Seyahatlerinizi daha keyifli hale
        getirmek için buradayız.
      </p>

      <div className="flex justify-end mt-20">
        <div className="relative w-[94.5%] h-[975px] rounded-tl-2xl rounded-bl-2xl border-t-4 border-b-4 border-l-4 border-alt-black">
          <div className="absolute top-44 -left-24 w-[610px] h-[610px] rounded-2xl border-4 border-alt-black">
            <div className="absolute w-[610px] h-[610px] border-r-8 border-b-8 border-alt-black rounded-2xl"></div>
            <img
              className="w-full h-full rounded-2xl car"
              src="/car_images/clio.jpg"
              alt=""
            />
          </div>

          <div className="main">
            <div className="eco absolute top-[384px] right-52 w-[450px]">
              <h3 className="font-bold text-alt-black text-4xl">Ekonomi</h3>
              <p className="text-silver text-2xl mt-4">
                Ekonomi sınıfı araçlar, bütçe dostu seyahatler için ideal bir
                seçimdir. Yakıt tasarruflu ve kompakt tasarımlarıyla konforlu
                bir deneyim sunar.
              </p>
            </div>
            <div className="mid absolute top-[700px] pt-40 right-52 w-[450px]">
              <h3 className="font-bold text-alt-black text-4xl">Orta Sınıf</h3>
              <p className="text-silver text-2xl mt-4">
                Orta sınıf araçlar, konfor ve genişlik arayanlar için mükemmel
                bir tercih. Daha uzun seyahatlerde ekstra rahatlık sunar.
              </p>
            </div>
            <div className="lux absolute top-[800px] pt-16 right-52 w-[450px]">
              <h3 className="font-bold text-alt-black text-4xl">Lüks</h3>
              <p className="text-silver text-2xl mt-4">
                Lüks sınıf araçlar, prestij ve konforu bir arada sunar. Şık
                tasarımları ve üst düzey donanımlarıyla ayrıcalıklı bir sürüş
                deneyimi yaşayın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
