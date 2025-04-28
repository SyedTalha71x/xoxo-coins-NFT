import toast from "react-hot-toast";
import { FireApi } from "../../utils/FireApi";

const CreatClass = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const classSymbol = formData.get("class_symbol");
    if (classSymbol.length > 10) {
      toast.error("Class symbol must be less than 10 characters");
      return;
    }
    try {
      const createClass = await FireApi("/create-class", "POST", formData);
      toast.success(createClass?.message || "Class created successfully");

      e.target.reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white p-4 lg:p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold">Create Your Class</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg space-y-4"
      >
        <div>
          <label
            htmlFor="class_name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Class Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="class_name"
            name="class_name"
            className="w-full p-2 rounded bg-[#D9D9D9] text-black text-sm placeholder-gray-400 outline-none"
            placeholder="Enter class name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="class_symbol"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Class Symbol<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="class_symbol"
            name="class_symbol"
            className="w-full p-2 rounded bg-[#D9D9D9] text-black text-sm placeholder-gray-400 outline-none"
            placeholder="Enter class symbol"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Description<span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
            placeholder="Enter description"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="uri"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            URI (Optional)
          </label>
          <input
            type="text"
            id="uri"
            name="uri"
            className="w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
            placeholder="Enter URI (optional)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#00C853] py-2 text-center text-white transition-colors hover:bg-green-600py-2 rounded"
        >
          Create Class
        </button>
      </form>
    </div>
  );
};

export default CreatClass;