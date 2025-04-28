import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FireApi } from "../../utils/FireApi";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    create_password: "",
    confirm_password: "",
    terms_condition: false,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signupFormData = new FormData();
    signupFormData.append("email", formData.email);
    signupFormData.append("username", formData.username);
    signupFormData.append("create_password", formData.create_password);
    signupFormData.append("confirm_password", formData.confirm_password);
    signupFormData.append("terms_condition", 'True');

    try {
      const res = await FireApi("/register", "POST", signupFormData);
      console.log(res, 'register user')
      localStorage.setItem("user-visited-dashboard", res.access_token);
      toast.success("Signup successful");
      navigate("/dashboard/overview");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
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
                    htmlFor="create_password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Create Password
                  </label>
                  <input
                    id="create_password"
                    name="create_password"
                    type="password"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-400 rounded-md outline-none text-black placeholder-gray-400"
                    placeholder="••••••••"
                    value={formData.create_password}
                    onChange={(e) =>
                      setFormData({ ...formData, create_password: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPrivateKey"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-400 rounded-md outline-none text-black placeholder-gray-400"
                    placeholder="••••••••"
                    value={formData.confirm_password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirm_password: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms_condition"
                    name="terms_condition"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                    checked={formData.terms_condition}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        terms_condition: e.target.checked,
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
