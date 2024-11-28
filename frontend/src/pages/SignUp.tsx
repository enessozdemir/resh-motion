import { useState, useRef } from "react";
// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearError } from "../redux/user/UserSlice";
import { Alert } from "flowbite-react";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import TextInput from "../components/Input/TextInput";
import PasswordInput from "../components/Input/PasswordInput";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithRedirect,
//   getRedirectResult,
// } from "firebase/auth";
// import { app } from "../firebase";

interface SignUpForm {
  email: string;
  password: string;
  name: string;
  phone_number: string;
  address: string;
}

export default function SignUp() {
  const [loginForm, setLoginForm] = useState<SignUpForm>({
    email: "",
    password: "",
    name: "",
    phone_number: "",
    address: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRef = useRef<HTMLInputElement>(null);
  // const auth = getAuth(app);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const handlePasswordValidation = (password: string) => {
    setPasswordValid(password.length >= 8);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(clearError());

    setLoginForm((prevState) => {
      const updatedForm = { ...prevState, [name]: value };

      if (name === "password") {
        handlePasswordValidation(updatedForm.password);
      }

      return updatedForm;
    });
  };

  // const handleGoogleSignIn = async () => {
  //   const googleProvider = new GoogleAuthProvider();
  //   try {
  //     // Use signInWithRedirect instead of signInWithPopup
  //     await signInWithRedirect(auth, googleProvider);

  //     // User will be redirected to Google for sign-in and back to your app
  //   } catch (err) {
  //     setError("Google ile giriş sırasında bir hata oluştu.");
  //     console.error(err);
  //   }
  // };

  // const handleRedirectResult = async () => {
  //   try {
  //     const result = await getRedirectResult(auth);
  //     if (result) {
  //       const idToken = await result.user.getIdToken();

  //       if (!idToken) {
  //         throw new Error("ID Token alınamadı");
  //       }

  //       const response = await fetch("http://localhost:8080/users/auth/google", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ idToken }),
  //         mode: "cors",
  //       });

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         return setError(errorData.message || "Bir hata oluştu!");
  //       }

  //       setShowSuccess(true);
  //       setTimeout(() => {
  //         navigate("/home");
  //         setShowSuccess(false);
  //       }, 3000);
  //     }
  //   } catch (err) {
  //     setError("Google ile giriş sırasında bir hata oluştu.");
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   handleRedirectResult();
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !loginForm.email ||
      !loginForm.password ||
      !loginForm.name ||
      !loginForm.phone_number ||
      !loginForm.address ||
      loginForm.password.length < 8
    ) {
      return setError("Lütfen tüm alanları doldurun!");
    }

    try {
      setError(null);
      const response = await fetch("http://localhost:8080/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return setError(errorData.message || "Bir hata oluştu!");
      }

      const data = await response.json();
      if (data.success) {
        setLoginForm({
          name: "",
          email: "",
          password: "",
          phone_number: "",
          address: "",
        });
      }
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/sign-in");
      }, 3000);
    } catch (error: any) {
      setError("Bir hata oluştu! Lütfen tekrar deneyin.");
    }
  };
  
  return (
    <div className="flex w-full justify-between items-start text-alt-black">
      {showSuccess && (
        <Alert className="fixed top-5 right-[29%]" color="dark">
          Hesabınız başarıyla oluşturuldu. Giriş yapabilirsiniz.
        </Alert>
      )}

      <div className="w-full sm:w-1/4 h-screen px-7 py-10 overflow-y-auto">
        <h1 className="font-airone text-4xl">Resh.</h1>
        <div className="flex flex-col gap-3 mt-10">
          <p className="text-3xl font-serif">Hesabınızı oluşturun </p>
          <p className="text-opacity-90 text-md font-semibold">
            Hesabınız var mı?{" "}
            <Link className="text-brand-color" to={"/sign-in"}>
              Giriş Yapın
            </Link>
          </p>
        </div>

        {/* <div className="mt-5 text-white tracking-wide">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="bg-alt-black hover:shadow-lg w-full flex items-center justify-center gap-3 py-2.5 rounded-lg mt-2 transition-all ease-in-out duration-150"
          >
            <FcGoogle className="w-7 h-7" />
            <span className="text-md">Google</span>
          </button>
        </div> */}

        <div className="w-[92%] ml-3 opacity-80 mt-8 mb-5">
          <hr />
        </div>

        <div>
          <form onSubmit={handleSubmit} className="pb-1">
            <div>
              <TextInput
                name={"email"}
                id={"email"}
                type={"email"}
                value={loginForm.email}
                handleChange={handleChange}
                label="Email"
              />
            </div>
            <div className="mt-3">
              <TextInput
                name={"name"}
                id={"name"}
                type={"text"}
                value={loginForm.name}
                handleChange={handleChange}
                label="Full Name"
              />
            </div>
            <div>
              <PasswordInput
                name={"password"}
                id={"password"}
                handleChange={handleChange}
                handleClick={handleShowPassword}
                showPassword={showPassword}
                label="Şifre"
              />
              <div className="mt-2">
                <div className="flex items-center gap-1">
                  {passwordValid ? (
                    <CiCircleCheck className="text-green-600" />
                  ) : (
                    <CiCircleRemove className="text-silver" />
                  )}
                  <p
                    className={`text-xs ${
                      passwordValid ? "text-green-600" : "text-silver"
                    }`}
                  >
                    Şifreniz en az 8 karakter olmalıdır
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <TextInput
                name={"phone_number"}
                id={"phone_number"}
                type={"text"}
                value={loginForm.phone_number}
                handleChange={handleChange}
                label="Phone Number"
              />
            </div>
            <div className="mt-3">
              <TextInput
                name={"address"}
                id={"address"}
                type={"text"}
                value={loginForm.address}
                handleChange={handleChange}
                label="Address"
              />
            </div>
            <button
              type="submit"
              className="bg-alt-black text-white hover:shadow-xl text-md mt-10 w-full py-2.5 rounded-lg transition-all ease-in-out duration-300"
            >
              Kayıt Ol
            </button>
            {error && (
              <Alert className="mt-5" color="failure">
                {error}
              </Alert>
            )}
          </form>
        </div>
      </div>

      <div className="hidden sm:block w-3/4 border-l-2">
        <img
          className="w-full h-screen object-fill"
          src="/login-bg.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
