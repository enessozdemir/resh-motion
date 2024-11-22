import { useState, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
  clearError,
} from "../redux/user/UserSlice";
import { Alert } from "flowbite-react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface SignInForm {
  email: string;
  password: string;
}

export default function SignIn() {
  const [loginForm, setLoginForm] = useState<SignInForm>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { error } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearError());
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginForm.email || !loginForm.password) {
      return dispatch(signInFailure("Lütfen tüm alanları doldurun!"));
    }

    try {
      dispatch(signInStart());
      const response = await fetch("http://localhost:8080/users/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.detail || "Bir hata oluştu!";
        return dispatch(signInFailure(errorMessage));
      }

      dispatch(signInSuccess(data));
      navigate("/home");
    } catch (err) {
      dispatch(signInFailure("Bir hata oluştu! Lütfen tekrar deneyin."));
    }
  };

  return (
    <div className="flex w-full justify-between items-start text-alt-black">
      <div className="w-1/4 h-screen px-7 py-20">
        <h1 className="font-integral text-3xl sm:text-4xl">Resh.</h1>
        <div className="flex flex-col gap-3 mt-10">
          <p className="text-3xl font-serif">Hesabınıza giriş yapın</p>
          <p className="text-opacity-90 text-md font-semibold">
            Hesabınız yok mu?{" "}
            <Link className="text-brand-color" to={"/sign-up"}>
              Kayıt Ol
            </Link>
          </p>
        </div>

        <div className="mt-5 text-white tracking-wide">
          <button
            type="button"
            className="bg-alt-black hover:shadow-lg w-full flex items-center justify-center gap-3 py-2.5 rounded-lg mt-2 transition-all ease-in-out duration-150"
          >
            <FcGoogle className="w-7 h-7" />
            <span className="text-md">Google</span>
          </button>
        </div>

        <div className="w-[92%] ml-3 opacity-40 my-10">
          <hr />
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="px-2 ring-0 focus:ring-0 focus:outline-none mt-1 bg-transparent w-full h-11 border border-alt-black focus:border-alt-black rounded-lg"
                name="email"
                id="email"
                type="email"
                onChange={handleChange}
              />
            </div>
            <div className="mt-6">
              <label className="text-sm font-bold" htmlFor="password">
                Şifre
              </label>
              <div className="flex justify-between ring-0 focus:ring-0 pr-2 mt-1 bg-transparent outline-none w-full h-11 border border-alt-black focus:border-alt-black rounded-lg">
                {showPassword ? (
                  <input
                    className="w-[90%] rounded-lg ring-0 focus:ring-0 focus:outline-none border-none focus:border-alt-black"
                    name="password"
                    id="password"
                    type="text"
                    ref={passwordRef}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    className="w-[90%] rounded-lg ring-0 focus:ring-0 focus:outline-none border-none focus:border-alt-black"
                    name="password"
                    id="password"
                    type="password"
                    ref={passwordRef}
                    onChange={handleChange}
                  />
                )}
                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="focus:outline-none"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-alt-black text-white hover:shadow-xl text-md mt-10 w-full py-2.5 rounded-lg transition-all ease-in-out duration-300"
            >
              Giriş Yap
            </button>
            {error && (
              <Alert className="mt-5" color="failure">
                {error}
              </Alert>
            )}
          </form>
        </div>
      </div>

      <div className="w-3/4 border-l-2">
        <img
          className="w-full h-screen object-fill"
          src="/login-bg.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
