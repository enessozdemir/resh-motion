import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CarTypes() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (mediaQuery.matches) {
      const scrollContainer = document.getElementById(
        "scroll-container"
      ) as HTMLDivElement;

      const mainElement = document.getElementById("main") as HTMLDivElement;

      if (scrollContainer && mainElement) {
        scrollContainer.classList.add("scroll-container");
        mainElement.classList.add("main");
      }
    }

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
    <div
      id="scroll-container"
      className="text-alt-black sm:mt-32 mt-96 sm:pl-28 py-5"
    >
      <div className="sm:block hidden">
        <h2 className="sm:text-5xl text-3xl font-bold">
          Araç sınıflarımız ile
        </h2>
        <h2 className="text-silver sm:text-5xl text-3xl font-bold">
          her bütçeye uygun çözümler.
        </h2>
        <p className="text-silver font-medium sm:text-3xl text-xl sm:w-[67%] w-full mt-10 leading-normal">
          Her ihtiyaca ve bütçeye uygun seçenekler sunarak{" "}
          <span className="text-alt-black">konforlu</span>
          <span className="text-alt-black"> ve pratik</span> bir sürüş
          deneyimini kolayca yaşamanızı sağlıyoruz. Seyahatlerinizi daha keyifli
          hale getirmek için buradayız.
        </p>
      </div>

      <div className="flex justify-end mt-20">
        <div className="relative sm:w-[94.5%] w-full sm:h-[975px] h-full border-y-4 sm:rounded-tl-2xl sm:rounded-bl-2xl sm:border-t-4 sm:border-b-4 sm:border-l-4 border-alt-black">
          <div className="sm:hidden block px-5 pt-20">
            <h2 className="sm:text-5xl text-3xl font-bold">
              Araç sınıflarımız ile
            </h2>
            <h2 className="text-silver sm:text-5xl text-3xl font-bold">
              her bütçeye uygun çözümler.
            </h2>
            <p className="text-silver font-medium sm:text-3xl text-xl sm:w-[67%] w-full mt-10 leading-normal">
              Her ihtiyaca ve bütçeye uygun seçenekler sunarak{" "}
              <span className="text-alt-black">konforlu</span>
              <span className="text-alt-black"> ve pratik</span> bir sürüş
              deneyimini kolayca yaşamanızı sağlıyoruz. Seyahatlerinizi daha
              keyifli hale getirmek için buradayız.
            </p>
          </div>

          <div className="sm:block hidden absolute top-44 -left-24 sm:w-[610px] sm:h-[610px] w-[300px] h-[300px] rounded-2xl border-4 border-alt-black">
            <div className="absolute w-[610px] h-[610px] border-r-8 border-b-8 border-alt-black rounded-2xl"></div>
            <img
              className="w-full h-full rounded-2xl car"
              src="/car_images/clio.jpg"
              alt=""
            />
          </div>

          <div id="main" className="sm:block hidden">
            <div className="eco absolute top-[384px] right-52 w-[450px]">
              <h3 className="font-bold text-alt-black text-4xl">Ekonomi</h3>
              <p className="text-silver text-2xl mt-4">
                Ekonomi sınıfı araçlar, bütçe dostu seyahatler için ideal bir
                seçimdir. Yakıt tasarruflu ve kompakt tasarımlarıyla konforlu
                bir deneyim sunar.
              </p>
            </div>
            <div className="mid absolute top-[710px] pt-40 right-52 w-[450px]">
              <h3 className="font-bold text-alt-black text-4xl">Orta Sınıf</h3>
              <p className="text-silver text-2xl mt-4">
                Orta sınıf araçlar, konfor ve genişlik arayanlar için mükemmel
                bir tercih. Daha uzun seyahatlerde ekstra rahatlık sunar.
              </p>
            </div>
            <div className="lux absolute top-[810px] pt-16 right-52 w-[450px]">
              <h3 className="font-bold text-alt-black text-4xl">Lüks</h3>
              <p className="text-silver text-2xl mt-4">
                Lüks sınıf araçlar, prestij ve konforu bir arada sunar. Şık
                tasarımları ve üst düzey donanımlarıyla ayrıcalıklı bir sürüş
                deneyimi yaşayın.
              </p>
            </div>
          </div>

          <div className="sm:hidden flex gap-7 mt-20 px-5 pb-10 overflow-x-auto">
            <div className="">
              <div className="w-[260px] h-[250px] border-4 border-alt-black rounded-2xl">
                <img
                  className="w-full h-full rounded-2xl car"
                  src="/car_images/clio.jpg"
                  alt=""
                />
              </div>
              <div className="mt-3 px-1">
                <h3 className="font-bold text-alt-black text-2xl">Ekonomi</h3>
                <p className="text-silver text-xl mt-4">
                  Ekonomi sınıfı araçlar, bütçe dostu seyahatler için ideal bir
                  seçimdir. Yakıt tasarruflu ve kompakt tasarımlarıyla konforlu
                  bir deneyim sunar.
                </p>
              </div>
            </div>

            <div className="">
              <div className="w-[260px] h-[250px] border-4 border-alt-black rounded-2xl">
                <img
                  className="w-full h-full rounded-2xl car"
                  src="/car_images/megane.jpg"
                  alt=""
                />
              </div>
              <div className="mt-3 px-1">
                <h3 className="font-bold text-alt-black text-2xl">
                  Orta Sınıf
                </h3>
                <p className="text-silver text-xl mt-4">
                  Orta sınıf araçlar, konfor ve genişlik arayanlar için mükemmel
                  bir tercih. Daha uzun seyahatlerde ekstra rahatlık sunar.
                </p>
              </div>
            </div>

            <div className="">
              <div className="w-[260px] h-[250px] border-4 border-alt-black rounded-2xl">
                <img
                  className="w-full h-full rounded-2xl car"
                  src="/car_images/audi.jpeg"
                  alt=""
                />
              </div>
              <div className="mt-3 px-1">
                <h3 className="font-bold text-alt-black text-2xl">Lüks</h3>
                <p className="text-silver text-xl mt-4">
                  Lüks sınıf araçlar, prestij ve konforu bir arada sunar. Şık
                  tasarımları ve üst düzey donanımlarıyla ayrıcalıklı bir sürüş
                  deneyimi yaşayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
