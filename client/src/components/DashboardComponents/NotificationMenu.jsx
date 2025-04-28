import { Box, Fade, Menu, Typography, Badge, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { FireApi } from "../../utils/FireApi";
import { GoRead, GoUnread } from "react-icons/go";
import toast from "react-hot-toast";

const NotificationMenu = () => {
  const [anchorE2, setAnchorE2] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const open2 = Boolean(anchorE2);

  // Fetch notifications
  const GetNotifications = async () => {
    try {
      const notRes = await FireApi("/notifications", "GET");
      setNotifications(notRes);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Fetch unread count
  const GetUnreadCount = async () => {
    try {
      const countRes = await FireApi("/notifications/unread-count", "GET");
      setUnreadCount(countRes?.unread_count || 0);
    } catch (error) {
      console.error("Error fetching unread count:", error);
    }
  };

  // Mark individual notification as read
  const MarkAsRead = async (notificationId) => {
    try {
      const res = await FireApi(`/notifications/${notificationId}/mark-read`, "POST");
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.notification_id === notificationId
            ? { ...notif, is_read: true }
            : notif
        )
      );
      GetUnreadCount(); 
      toast.success(res?.message || "Notification marked as read");
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  // Mark individual notification as unread
  const MarkAsUnread = async (notificationId) => {
    try {
      const unreadRes = await FireApi(`/notifications/${notificationId}/mark-unread`, "POST");
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.notification_id === notificationId
            ? { ...notif, is_read: false }
            : notif
        )
      );
      GetUnreadCount(); 
      toast.success(unreadRes?.message || "Notification marked as read");

    } catch (error) {
      console.error("Error marking notification as unread:", error);
    }
  };

  // Mark all notifications as read
  const MarkAllAsRead = async () => {
    try {
      const markAllRead =  await FireApi("/notifications/mark-all-read", "POST");
      setNotifications((prev) =>
        prev.map((notif) => ({ ...notif, is_read: true }))
      );
      GetUnreadCount();
      toast.success(markAllRead?.message || "All notifications marked as read");
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
    }
  };

  const handleNotificationClick = (event) => {
    setAnchorE2(event.currentTarget);
    GetNotifications();
  };

  const handleNotificationClose = () => {
    setAnchorE2(null);
  };

  // Polling for unread count
  useEffect(() => {
    GetUnreadCount();
    const interval = setInterval(() => {
      GetUnreadCount();
    }, 10000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <IconButton onClick={handleNotificationClick}>
        <Badge badgeContent={unreadCount} color="error">
          <FaBell size={19} className="text-white cursor-pointer" />
        </Badge>
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorE2}
        open={open2}
        onClose={handleNotificationClose}
        TransitionComponent={Fade}
        sx={{
          "& .MuiPaper-root": {
            ml: -7,
            width: 300,
            px: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>Notifications</Typography>
          <IconButton onClick={MarkAllAsRead}>
            <GoRead className="text-[18px]" />
          </IconButton>
        </Box>

        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <Box
              key={notif.notification_id}
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 2,
                p: 2,
                borderRadius: 2,
                backgroundColor: notif.is_read ? "#27272a" : "#1f2937",
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "#eae8e8" }}>
                {notif.title}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#d3d3d3" }}>
                {notif.message}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography sx={{ fontSize: 12, color: "#c6c0c0" }}>
                  {new Date(notif.created_at).toLocaleString()}
                </Typography>
                <IconButton
                  onClick={() =>
                    notif.is_read
                      ? MarkAsUnread(notif.notification_id)
                      : MarkAsRead(notif.notification_id)
                  }
                  size="small"
                >
                  {notif.is_read ? (
                    <GoRead className="text-[16px] text-zinc-300" />
                  ) : (
                    <GoUnread className="text-[16px] text-zinc-300" />
                  )}
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <Typography sx={{ textAlign: "center", mt: 2 }}>
            No notifications
          </Typography>
        )}
      </Menu>
    </>
  );
};

export default NotificationMenu;