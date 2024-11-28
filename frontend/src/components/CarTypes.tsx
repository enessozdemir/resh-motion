export default function CarTypes() {
  return (
    <div className="relative bg-dots flex flex-col gap-40 w-full px-20 py-40 text-alt-black">
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
