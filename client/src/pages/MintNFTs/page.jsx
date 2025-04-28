import { useState } from "react";
import FalseButton from "../../../public/delete-bin-line.png";
import InfoButton from "../../../public/info.png";
import MagicKey from "../../../public/magic-line.png";
import toast from "react-hot-toast";
import { FireApi } from "../../utils/FireApi";

export default function Page() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    attributes: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMinted, setIsMinted] = useState(false);
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // Store the first file
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    }
    if (!file) {
      newErrors.file = "Please upload a file";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("attributes", formData.attributes);
      formDataToSend.append("amount", formData.amount);
      formDataToSend.append("file", file); 

      // Make the API call
      const res = await FireApi("/create-nft", "POST", formDataToSend);

      console.log(res, "create nft");
      toast.success(res?.message || "NFT minted successfully");
      setIsMinted(true);
      setFormData({
        title: "",
        description: "",
        attributes: "",
        amount: "",
      });
      setFile(null); // Reset the file state
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black lg:p-6 md:p-4 sm:p-2 p-2">
      <h1 className="mb-6 text-2xl font-bold text-white">Mint NFT</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded bg-[#1F2A37] p-4">
            <h2 className="mb-2 flex gap-1 items-center text-lg text-gray-200 font-bold">
              File upload
              <div>
                <img
                  src={InfoButton || "/placeholder.svg"}
                  className="h-5 w-5"
                  alt=""
                />
              </div>
            </h2>

            <div
              onClick={() => document.getElementById("fileInput").click()}
              className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-gray-600 bg-gray-600 p-4 text-center hover:border-gray-500 transition-colors"
            >
              <input
                type="file"
                id="fileInput"
                onChange={handleFileInputChange}
                className="hidden"
              />
              <svg
                className="mb-2 h-8 w-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-sm text-gray-400">Click to upload a file</p>
              <p className="text-xs text-gray-500">Supports: JPG, PNG, GIF, WEBP</p>
              {errors.file && (
                <p className="mt-2 text-xs text-red-500">{errors.file}</p>
              )}
            </div>

            {file && (
              <div className="mt-4 flex items-center justify-between rounded bg-gray-800 p-2">
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-white truncate max-w-[180px]">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
                <button
                  onClick={() => setFile(null)}
                  className="rounded-full bg-red-500/10 p-1 h-6 w-6 text-red-500 hover:bg-red-500/20"
                >
                  <img
                    src={FalseButton || "/placeholder.svg"}
                    className="h-4 w-4"
                    alt="Remove"
                  />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="rounded bg-[#1F2A37] p-4">
          <h2 className="mb-2 flex gap-1 items-center text-lg text-gray-200 font-bold">
            General Information
            <div>
              <img
                src={InfoButton || "/placeholder.svg"}
                className="h-5 w-5"
                alt=""
              />
            </div>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <label className="mb-1 block text-sm text-white">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
                placeholder="Enter title"
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-500">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="h-32 w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
                placeholder="Add description of NFT here"
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.description}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Attributes (optional)
              </label>
              <input
                type="text"
                name="attributes"
                value={formData.attributes}
                onChange={handleInputChange}
                className="w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
                placeholder="Add new Attributes"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Amount<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
                placeholder="Amount"
              />
              {errors.amount && (
                <p className="mt-1 text-xs text-red-500">{errors.amount}</p>
              )}
            </div>

            {isLoading ? (
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-gray-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-center text-sm text-gray-400">
                  Minting in Progress
                </p>
                <p className="text-center text-sm text-gray-400">
                  Progress: {progress}%
                </p>
              </div>
            ) : isMinted ? (
              <button
                type="button"
                className="w-full flex justify-center border-[1px] border-slate-200 items-center rounded-full text-sm bg-[#00C853] py-2 text-center text-white transition-colors"
                disabled
              >
                <img
                  src={MagicKey || "/placeholder.svg"}
                  alt="Mint"
                  className="w-5 h-5 mr-2 filter invert"
                />
                NFT Minted Successfully
              </button>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center border-[1px] border-slate-200 items-center rounded-full text-sm bg-[#00C853] py-2 text-center text-white transition-colors hover:bg-green-600"
              >
                <img
                  src={MagicKey || "/placeholder.svg"}
                  alt="Mint"
                  className="w-5 h-5 mr-2 filter invert"
                />
                Mint your NFT
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}