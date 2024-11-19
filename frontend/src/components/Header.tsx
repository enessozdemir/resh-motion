import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky h-16 px-5 flex items-center border-b tracking-normal">
      <div className="flex justify-between w-full">
        <Link to="/" className="w-[15%]">
          <h1 className="font-airone text-alt-black text-4xl">RESH.</h1>
        </Link>
        <div className="w-[60%] flex gap-5 justify-center items-center">
          <a
            className="text-center pt-2 w-20 h-10 text-soft-black hover:bg-gray-100 rounded-lg transition-all ease-out duration-300"
            href=""
          >
            Araçlar
          </a>
          <a
            className="text-center pt-2 w-24 h-10 text-soft-black hover:bg-gray-100 rounded-lg transition-all ease-out duration-300"
            href=""
          >
            Bayiler
          </a>
          <Link
            className="text-center pt-2 w-24 h-10 text-soft-black hover:bg-gray-100 rounded-lg transition-all ease-out duration-300"
            to="/about"
          >
            Hakkımızda
          </Link>
          <Link
            className="text-center pt-2 w-24 h-10 text-soft-black hover:bg-gray-100 rounded-lg transition-all ease-out duration-300"
            to="/contact"
          >
            İletişim
          </Link>
        </div>
        <div className="w-[15%] flex gap-3">
          <Link to="/sign-in">
            <button className="w-20 h-10 text-soft-black hover:bg-gray-100 rounded-lg transition-all ease-out duration-300">
              Giriş Yap
            </button>
          </Link>
          <Link to="/">
            <button className="w-32 h-10 rounded-full bg-brand-color text-white font-medium hover:shadow-lg transition-all ease-out duration-300">
              Araç Kirala
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
