export default function FeaturesSection() {
  return (
    <div className="sm:px-28 px-10 bg-dots text-alt-black sm:mt-32 mt-20 pb-20">
      <h2 className="sm:text-5xl text-4xl font-bold">Hızlı hizmetin</h2>
      <h2 className="text-silver sm:text-5xl text-4xl font-bold">
        tüm özellikleri.
      </h2>

      <div className="container mx-auto h-[450px] flex flex-col sm:flex-row gap-2 mt-10">
        <div className="bg-[#def7e5] border-4 border-alt-black rounded-xl sm:w-1/3 w-full h-full py-5">
          <img
            className="sm:w-60 sm:h-60 w-40 h-40 flex mx-auto mt-5"
            src="/feature_images/feature_calendar.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center px-5">
            <h3 className="text-2xl font-medium">Hızlı Rezervasyon</h3>
            <p className="sm:text-xl text-lg text-silver text-center">
              Kolayca rezervasyon yaparak zamandan tasarruf edin.
            </p>
          </div>
        </div>
        <div className="bg-[#e9defe] border-4 border-alt-black rounded-xl sm:w-1/3 w-full h-full py-5">
          <img
            className="sm:w-60 sm:h-60 w-40 h-40 flex mx-auto"
            src="/feature_images/feature_car.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center mt-5 px-5">
            <h3 className="text-2xl font-medium">Araçları Görüntüle</h3>
            <p className="sm:text-xl text-lg text-silver text-center">
              Size uygun araçları kolayca inceleyin.
            </p>
          </div>
        </div>
        <div className="bg-[#ccf9ff] border-4 border-alt-black rounded-xl sm:w-1/3 w-full h-full py-5">
          <img
            className="sm:w-52 sm:h-48 w-32 h-32 flex mx-auto mt-10 rounded-full"
            src="/feature_images/feature_card.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center mt-6 px-5">
            <h3 className="text-2xl font-medium">Güvenli Ödeme</h3>
            <p className="sm:text-xl text-lg text-silver text-center">
              Ödemelerinizi güvenle gerçekleştirin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
