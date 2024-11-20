import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="fixed w-full h-16 px-5 flex items-center border-b tracking-normal overflow-x-hidden bg-white z-50">
      <div className="flex justify-between items-center w-full">
        <Link to="/home" className="w-[15%]">
          <h1 className="font-airone text-alt-black text-3xl sm:text-4xl mt-1 sm:mt-0">
            RESH.
          </h1>
        </Link>

        {/* Hamburger Menü */}
        <div className="sm:hidden block relative" onClick={toggleMenu}>
          <div className="flex flex-col gap-2 items-center justify-center w-8 h-8 cursor-pointer">
            <span
              className={`block w-5 h-0.5 rounded-full bg-icon-color transform transition-transform duration-300 ease-in-out ${
                isOpen && "rotate-45 translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 rounded-full bg-icon-color transform transition-transform duration-300 ease-in-out ${
                isOpen && "-rotate-45 -translate-y-1.5"
              }`}
            ></span>
          </div>
        </div>

        {/* Desktop Menü */}
        <div className="w-[60%] hidden sm:flex justify-center items-center gap-5">
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

        {/* Mobile Menü */}
        <aside
          className={`transition-all ease-linear duration-500 fixed top-16 left-0 w-full bg-white ${
            isOpen ? "h-full opacity-100" : "opacity-0 h-0"
          } z-40 overflow-hidden`}
        >
          <div className="flex flex-col gap-y-10">
            <ul className="flex flex-col gap-y-5 justify-start items-center h-full mt-24">
              <Link
                to="/home"
                className={`w-[90%] text-lg py-3 rounded-md hover:bg-gray-50 text-center cursor-pointer transition-all duration-200 ease-linear ${
                  location.pathname === "/home" && "bg-gray-50"
                }`}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/vehicles"
                className={`w-[90%] text-lg py-3 rounded-md hover:bg-gray-50 text-center cursor-pointer transition-all duration-200 ease-linear ${
                  location.pathname === "/vehicles" && "bg-gray-50"
                }`}
              >
                Araçlar
              </Link>
              <Link
                to="/dealerships"
                className={`w-[90%] text-lg py-3 rounded-md hover:bg-gray-50 text-center cursor-pointer transition-all duration-200 ease-linear ${
                  location.pathname === "/dealerships" && "bg-gray-50"
                }`}
              >
                Bayiler
              </Link>
              <Link
                to="/about"
                className={`w-[90%] text-lg py-3 rounded-md hover:bg-gray-50 text-center cursor-pointer transition-all duration-200 ease-linear ${
                  location.pathname === "/about" && "bg-gray-50"
                }`}
              >
                Hakkımızda
              </Link>
              <Link
                to="/contact"
                className={`w-[90%] text-lg py-3 rounded-md hover:bg-gray-50 text-center cursor-pointer transition-all duration-200 ease-linear ${
                  location.pathname === "/contact" && "bg-gray-50"
                }`}
              >
                İletişim
              </Link>
            </ul>
            <div className="flex justify-center gap-x-5">
              <Link to="/sign-in">
                <button className="w-24 h-10 text-soft-black hover:bg-gray-100 rounded-lg transition-all ease-out duration-300">
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
        </aside>

        <div className="w-[15%] hidden sm:flex gap-3">
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
