import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <div className="flex w-full justify-between items-start text-alt-black">
        <div className="w-1/4 h-screen px-7 py-20">
          <h1 className="font-integral text-3xl sm:text-4xl">
            Resh.
          </h1>
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

          <div className="">
            <form action="">
              <div>
                <label className=" text-sm font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  className="px-2 outline-none mt-1 bg-transparent w-full h-11 border border-alt-black rounded-lg"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mt-6">
                <label className="text-sm font-bold" htmlFor="password">
                  Şifre
                </label>
                <input
                  type="password"
                  className="ring-0 focus:ring-0 px-2 mt-1 bg-transparent outline-none w-full h-11 border border-alt-black focus:border-alt-black rounded-lg"
                  name="password"
                  id="password"
                />
              </div>
              <button className="bg-alt-black text-white hover:shadow-xl text-md mt-10 w-full py-2.5 rounded-lg transition-all ease-in-out duration-300">
                Giriş Yap
              </button>
            </form>
          </div>
        </div>

        <div className="w-3/4 border-l-2">
          <img className="w-full h-screen object-fill" src="/login-bg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
