import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Modal,
  ModalBody,
  ModalHeader,
} from "flowbite-react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/UserSlice";
import axios from "axios";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.user);
  const [showModal, setShowModal] = useState(false);
  const firstName = currentUser?.name.split(" ")[0];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const checkAuthentication = async () => {
    try {
      const response = await axios.get("http://localhost:8080/auth/authenticate", {
        withCredentials: true,
      });
      if (response.data && response.data.isAuthenticated) {
        setIsAuthenticated(true);
        setUserData(response.data.user);
        dispatch(signInSuccess(response.data.user));
      } else {
        setIsAuthenticated(false);
        setUserData(null);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setIsAuthenticated(false);
      setUserData(null);
    }
  };

  const handleSignOut = async () => {
    try {
      await axios.post("http://localhost:8080/auth/sign-out", {}, { withCredentials: true });
      setIsAuthenticated(false);
      setUserData(null);
      navigate("/sign-in");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="fixed w-full h-16 px-5 flex items-center border-b bg-white z-50">
      <div className="flex justify-between items-center w-full">
        <Link to="/home" className="w-[13%]">
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
              {currentUser ? null : (
                <Link to="/sign-in">
                  <button className="w-20 h-10 text-soft-black hover:bg-gray-100 rounded-lg transition-all ease-out duration-300">
                    Giriş Yap
                  </button>
                </Link>
              )}
              <Link to="/">
                <button className="w-32 h-10 rounded-full bg-brand-color text-white font-medium hover:shadow-lg transition-all ease-out duration-300">
                  Araç Kirala
                </button>
              </Link>
            </div>
          </div>
        </aside>

        <div className="w-[17%] hidden sm:flex gap-3 items-center">
          {currentUser?.token ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <div className="flex h-10 px-3 rounded-full bg-gray-100 items-center">
                  <p className="font-medium">{firstName}</p>
                  <MdKeyboardArrowDown size={15} />
                </div>
              }
              placement="bottom-end"
            >
              <Link to={"/profile"}>
                <DropdownItem icon={FiUser}>Profil</DropdownItem>
              </Link>
              <DropdownDivider />
              <DropdownItem icon={FiLogOut} onClick={() => setShowModal(true)}>
                Çıkış Yap
              </DropdownItem>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <button className="w-20 h-10 text-soft-black hover:bg-gray-100 rounded-lg transition-all ease-out duration-300">
                Giriş Yap
              </button>
            </Link>
          )}
          <Link to="/">
            <button className="w-32 h-10 rounded-full bg-brand-color text-white font-medium hover:shadow-lg transition-all ease-out duration-300">
              Araç Kirala
            </button>
          </Link>
        </div>
      </div>
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          popup
          size="md"
          className="text-gray-500"
        >
          <ModalHeader className="p-6">Çıkış Yap</ModalHeader>
          <ModalBody>
            <p className="text-sm text-justify">
              Çıkış yapmak istediğinize emin misiniz?
            </p>

            <div className="flex justify-end gap-x-2 mt-5">
              <Button
                color="light"
                className="font-extralight text-red-600 border border-red-600"
                onClick={() => setShowModal(false)}
                size="sm"
                pill
              >
                İptal
              </Button>
              <Button
                onClick={handleSignOut}
                color="failure"
                className="font-extralight"
                size="sm"
                pill
              >
                Çıkış Yap
              </Button>
            </div>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}
