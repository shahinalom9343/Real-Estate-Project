import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      alert("Password must be at least 6 Characters");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      toast("Password must have at least an Uppercase & a lowercase Letter");
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("User Created Successfully !!!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="py-4 font-alegreya">
      <Helmet>
        <title>Axis Commercial | Register</title>
      </Helmet>
      <div
        className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border-2 mx-auto bg-slate-50"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h1 className="text-2xl font-bold text-center text-orange-600">
          Please Register Here
        </h1>
        <form noValidate="" className="space-y-6" onSubmit={handleRegister}>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-600 font-bold ">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-600 font-bold ">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-3 border-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-600 font-bold ">
              Photo URL:
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="PhotoURL Here"
              className="w-full px-4 py-3 border-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label className="block dark:text-gray-600 font-bold">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 border-2 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <span
              className="absolute text-2xl bottom-3 right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button className="block w-full bg-green-300 font-bold p-3 text-center rounded-xl dark:text-white dark:bg-violet-600">
            REGISTER
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="underline dark:text-purple-600 font-bold text-base"
          >
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
