import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {

  const useAuth = localStorage.getItem("user-visited-dashboard");
  if (!useAuth) {
    return <Navigate to="/login" replace/>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default AuthRoute;
