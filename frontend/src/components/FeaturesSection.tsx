export default function FeaturesSection() {
  return (
    <div className="px-28 bg-dots text-alt-black mt-32 pb-10">
      <h2 className="text-5xl font-bold">Hızlı hizmetin</h2>
      <h2 className="text-silver text-5xl font-bold">tüm özellikleri.</h2>

      <div className="container mx-auto h-[450px] flex gap-2 mt-10">
        <div className="bg-[#def7e5] border-4 border-alt-black rounded-xl w-1/3 h-full">
          <img
            className="w-60 h-60 flex mx-auto mt-5"
            src="/feature_images/feature_calendar.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center px-5">
            <h3 className="text-2xl font-medium">Hızlı Rezervasyon</h3>
            <p className="text-xl text-silver">
              Kolayca rezervasyon yaparak zamandan tasarruf edin.
            </p>
          </div>
        </div>
        <div className="bg-[#e9defe] border-4 border-alt-black rounded-xl w-1/3 h-full">
          <img
            className="w-60 h-60 flex mx-auto"
            src="/feature_images/feature_car.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center mt-5 px-5">
            <h3 className="text-2xl font-medium">Araçları Görüntüle</h3>
            <p className="text-xl text-silver">
              Size uygun araçları kolayca inceleyin.
            </p>
          </div>
        </div>
        <div className="bg-[#ccf9ff] border-4 border-alt-black rounded-xl w-1/3 h-full">
          <img
            className="w-52 h-48 flex ml-28 mt-10 rounded-full"
            src="/feature_images/feature_card.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center mt-6 px-5">
            <h3 className="text-2xl font-medium">Güvenli Ödeme</h3>
            <p className="text-xl text-silver">
              Ödemelerinizi güvenle gerçekleştirin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
