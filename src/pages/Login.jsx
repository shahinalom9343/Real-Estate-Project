import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn, googleLogIn, facebookLogIn, githubLogIn } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    signIn(email, password);
    navigate(location?.state ? location.state : "/");
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleFacebookLogIn = () => {
    facebookLogIn()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubLogIn = () => {
    githubLogIn()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="py-4">
      <Helmet>
        <title>Axis Commercial | Login</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border-2 mx-auto bg-slate-50 animate__animated animate__fadeInRight">
        <h1 className="text-2xl font-bold text-center text-blue-500">
          Login Here
        </h1>
        <form className="space-y-6" onSubmit={handleLogIn}>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="username"
              className="block dark:text-gray-600 font-bold "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-3 border-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label
              htmlFor="password"
              className="block dark:text-gray-600 font-bold"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-4 border-2 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-2xl top-8 right-3"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            <div className="flex justify-end text-xs dark:text-gray-600 pt-2">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full bg-orange-500 font-bold p-3 text-center rounded-xl text-white dark:bg-violet-600">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Log in with Google"
            onClick={handleGoogleLogIn}
            className="p-3 rounded-sm"
          >
            <FaGoogle></FaGoogle>
          </button>
          <button
            aria-label="Log in with Twitter"
            onClick={handleFacebookLogIn}
            className="p-3 rounded-sm"
          >
            <FaFacebook></FaFacebook>
          </button>
          <button
            aria-label="Log in with GitHub"
            onClick={handleGithubLogIn}
            className="p-3 rounded-sm"
          >
            <FaGithub></FaGithub>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Do not have an account? Please
          <Link
            to="/register"
            className="underline dark:text-green-600 font-bold text-sm"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
