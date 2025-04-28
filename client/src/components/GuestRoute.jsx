import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
 
    const useAuth = localStorage.getItem("user-visited-dashboard");
    if (useAuth) {
      return <Navigate to="/" replace/>;
    }

    return (
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
    </Suspense>
  )
}

export default GuestRoute