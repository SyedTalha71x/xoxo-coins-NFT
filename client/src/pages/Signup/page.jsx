import { useState } from "react";
import { Link } from "react-router-dom";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    privateKey: "",
    confirmPrivateKey: "",
    agreeTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] flex p-6">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 border-2 border-white rounded-md bg-[#1F2A37] p-6">
          <div className="">
            <div className="text-center flex justify-center items-center flex-col">
              <img src="/XMLID_127_.png" alt="XOXO COINS" />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white">
              Create your account
            </h2>
          </div>

          <div className="">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
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
                    className="mt-1 block text-sm w-full px-3 py-2 bg-gray-400 rounded-md outline-none text-black placeholder-gray-400"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="mt-1 block text-sm w-full px-3 py-2 bg-gray-400 rounded-md outline-none text-black placeholder-gray-400"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="privateKey"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Create Private Key
                  </label>
                  <input
                    id="privateKey"
                    name="privateKey"
                    type="password"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-400 rounded-md outline-none text-black placeholder-gray-400"
                    placeholder="••••••••"
                    value={formData.privateKey}
                    onChange={(e) =>
                      setFormData({ ...formData, privateKey: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPrivateKey"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Confirm Private Key
                  </label>
                  <input
                    id="confirmPrivateKey"
                    name="confirmPrivateKey"
                    type="password"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-400 rounded-md outline-none text-black placeholder-gray-400"
                    placeholder="••••••••"
                    value={formData.confirmPrivateKey}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPrivateKey: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeTerms: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="agree-terms"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-blue-500 hover:text-blue-400"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>

              <Link to={"/"}>
                <button
                  type="submit"
                  className="w-full flex mt-2 text-black justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-white"
                >
                  <img
                    src="/magic-line.png"
                    alt=""
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  Create Account
                </button>
              </Link>

              <div className="text-sm">
                <span className="text-gray-400">Already have an account? </span>
                <Link to="/" className="text-blue-500 hover:text-blue-400">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative">
        <img src="/Mosaic.png" alt="Main NFT character" />
      </div>
    </div>
  );
}
