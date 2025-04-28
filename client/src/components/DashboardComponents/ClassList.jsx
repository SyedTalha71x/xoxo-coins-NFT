import { useEffect, useState } from "react";
import { FireApi } from "../../utils/FireApi";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const ClassList = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoading(true);
        const response = await FireApi("/get-blockchain-classes", "GET");
        
        if (Array.isArray(response)) {
          setClasses(response);
        } else {
          console.error("Expected array response but got:", response);
          toast.error("Failed to load classes data");
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
        toast.error(error.message || "Failed to load classes");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-black text-white p-4 flex justify-center items-center">
        <CircularProgress className="text-white" />
      </div>
    );
  }

  if (classes.length === 0) {
    return (
      <div className="min-h-screen w-full bg-black text-white p-4 flex justify-center items-center">
        <p>No classes found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black text-white p-4 lg:p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold">My Classes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <div 
            key={classItem.class_id} 
            className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-medium">{classItem.class_name}</h2>
              <span className="bg-green-600 text-xs px-2 py-1 rounded">
                {classItem.class_symbol}
              </span>
            </div>
            
            <p className="text-gray-300 text-sm mb-3">
              {classItem.description}
            </p>
            
            {classItem.uri && (
              <div className="mb-2">
                <span className="text-xs text-gray-400">URI:</span>
                <a 
                  href={classItem.uri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm ml-1 break-all hover:underline"
                >
                  {classItem.uri}
                </a>
              </div>
            )}
            
            <div className="text-gray-400 text-xs">
              Created: {new Date(classItem.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassList;