import { useState } from "react";
import { Link } from "react-router-dom";
import LoginImage from "../../../public/Mosaic.png";
import Logo from "../../../public/XMLID_127_.png";
import MagicKey from "../../../public/magic-line.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    privateKey: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" min-h-screen bg-[#0C0C0C]  flex p-6">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 border-2 border-white rounded-md bg-[#1F2A37] p-6">
          <div className="">
            <div className="text-center flex justify-center items-center flex-col">
              <img src={Logo} alt="XOXO COINS" className="h-10 w-auto" />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white">
              Sign in to our platform
            </h2>
          </div>

          <div className="">
            <form className="mt-8  space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4 ">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block text-sm w-full px-3 py-2 bg-gray-400  rounded-md outline-none text-black placeholder-gray-400 "
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="privateKey"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Enter Private Key
                  </label>
                  <input
                    id="privateKey"
                    name="privateKey"
                    type="password"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-400  rounded-md outline-none text-black placeholder-gray-400 "
                    placeholder="••••••••"
                    value={formData.privateKey}
                    onChange={(e) =>
                      setFormData({ ...formData, privateKey: e.target.value })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                      checked={formData.rememberMe}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          rememberMe: e.target.checked,
                        })
                      }
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      href="/lost-key"
                      className="text-blue-500 hover:text-blue-400"
                    >
                      Lost Private Key?
                    </Link>
                  </div>
                </div>
              </div>

              <Link to={"/home"}>
                <button
                  type="submit"
                  className="w-full flex mt-2 text-black justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-white"
                >
                  <img src={MagicKey} alt="" className="mr-1" />
                  Login with Private Key
                </button>
              </Link>

              <div className=" text-sm">
                <span className="text-gray-400">Not registered? </span>
                <Link
                  href="/create-account"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative">
        <div>
          <img
            src={LoginImage}
            alt="Main NFT character"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
