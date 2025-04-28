import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/page";
import Home from "./pages/home/page";
import Footer from "./components/Footer/page";
import Login from "./pages/login/page";
import Signup from "./pages/Signup/page";

import DashboardLayout from "./Layout/DashboardLayout";
import Overview from "./pages/Overview/page";
import MintNFTs from "./pages/MintNFTs/page";
import TransferNFT from "./pages/TransferNFT/page";
import MyNFT from "./pages/MyNFT/page";
import GuestRoute from "./components/GuestRoute";
import AuthRoute from "./components/AuthRoute";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import Profile from "./components/DashboardComponents/Profile";
import CreatClass from "./components/DashboardComponents/CreatClass";
import ClassList from "./components/DashboardComponents/ClassList";

function App() {
  return (
    <Router>
      <MainApp />
      <Toaster/>
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const [isAppLoading, setIsAppLoading] = useState(true);

  const hideHeaderFooter =
    location.pathname.startsWith("/dashboard") ||
    // location.pathname === "/" ||
    location.pathname === "/signup";


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) return <Loading />;

  return (
    <div className="">
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route element={<AuthRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="overview" element={<Overview />} />
            <Route path="mint-nfts" element={<MintNFTs />} />
            <Route path="transfer-nft" element={<TransferNFT />} />
            <Route path="my-nft" element={<MyNFT />} />
            <Route path="profile" element={<Profile />} />
            <Route path="create-class" element={<CreatClass />} />
            <Route path="my-classes" element={<ClassList />} />
          </Route>
        </Route>
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
