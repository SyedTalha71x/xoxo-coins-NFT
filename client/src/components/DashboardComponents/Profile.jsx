import { useState, useContext } from "react";
import {
  Avatar,
  Button,
  Box,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import ProfileContext from "../../Context/ProfileContext";
import { FireApi, imageURL } from "../../utils/FireApi";
import { AiTwotoneEdit } from "react-icons/ai";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, GetUserProfile } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    profile_image: user?.profile_image || "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profile_image: reader.result, // Set Base64 string
        }));
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("Profile updated:", formData);
      await updateProfile();
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const updateProfile = async () => {
    try {
      const res = await FireApi("/update-profile", "PUT", formData);
      console.log(res);
      toast.success(res?.message || "Profile updated successfully");
      GetUserProfile();
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white p-4 lg:p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold">My Profile</h1>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "black",
            textTransform: "capitalize",
          }}
          startIcon={<AiTwotoneEdit />}
          onClick={handleOpen}
        >
          Edit Profile
        </Button>
      </div>

      <Box
        className="bg-zinc-900 rounded-xl p-6 max-w-2xl mx-auto"
        sx={{ boxShadow: 3 }}
      >
        <div className="flex flex-col items-center mb-6">
          <Avatar
            alt={user?.username}
            src={
              user?.profile_image?.includes("data:image")
                ? user.profile_image
                : user?.profile_image?.includes("http")
                ? user.profile_image
                : `${imageURL}${user?.profile_image}`
            }
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              border: "3px solid #3b82f6",
            }}
          />
          <Typography variant="h6" className="font-bold">
            @{user?.username}
          </Typography>
        </div>

        <div className="space-y-4">
          <div className="bg-zinc-800 px-4 py-1 rounded-lg">
            <Typography variant="subtitle1" className="text-gray-400">
              Username
            </Typography>
            <Typography variant="body1">{user?.username}</Typography>
          </div>

          <div className="bg-zinc-800 px-4 py-1 rounded-lg">
            <Typography variant="subtitle1" className="text-gray-400">
              Email
            </Typography>
            <Typography variant="body1">{user?.email}</Typography>
          </div>
        </div>
      </Box>

      {/* Edit Profile Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="bg-zinc-900 text-white font-bold">
          Edit Profile
        </DialogTitle>
        <DialogContent className="bg-zinc-900 text-white">
          <Box sx={{ mt: 2 }} className="space-y-4">
            <div className="flex flex-col items-center">
              <Avatar
                alt={formData.username}
                src={
                  formData.profile_image?.includes("data:image")
                    ? formData.profile_image
                    : formData.profile_image?.includes("http")
                    ? formData.profile_image
                    : `${imageURL}${formData.profile_image}`
                }
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profile-image-upload"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="profile-image-upload">
                <Button
                  variant="outlined"
                  component="span"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    textTransform: "capitalize",
                  }}
                >
                  Change Photo
                </Button>
              </label>
            </div>

            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#27272a", // bg-zinc-800 equivalent
                  "& fieldset": {
                    borderColor: "#3f3f46", // border-zinc-700 equivalent
                  },
                  "&:hover fieldset": {
                    borderColor: "#52525b", // border-zinc-600 equivalent
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "white", // White text for input
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#a1a1aa", // text-gray-400 equivalent
                  "&.Mui-focused": {
                    color: "#a1a1aa", // Keep same color when focused
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#27272a", // bg-zinc-800 equivalent
                  "& fieldset": {
                    borderColor: "#3f3f46", // border-zinc-700 equivalent
                  },
                  "&:hover fieldset": {
                    borderColor: "#52525b", // border-zinc-600 equivalent
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "white", // White text for input
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#a1a1aa", // text-gray-400 equivalent
                  "&.Mui-focused": {
                    color: "#a1a1aa", // Keep same color when focused
                  },
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions className="bg-zinc-900">
          <Button
            onClick={handleClose}
            sx={{ color: "white", textTransform: "capitalize" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;
