import { useEffect, useState } from "react";
import ProfileContext from "../Context/ProfileContext";
import { FireApi } from "../utils/FireApi";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const GetUserProfile = async () => {
    try {
      const response = await FireApi("/my-profile", "GET");
      console.log(response, 'my-profile');
      setUser(response);
    } catch (error) {
      console.error("Error in GetUserProfile:", error);
    }
  };

  useEffect(() => {
    GetUserProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ user, setUser, GetUserProfile }}>
      {children}
    </ProfileContext.Provider>
  )
};

export default UserProvider;