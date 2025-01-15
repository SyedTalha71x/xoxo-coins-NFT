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

import DashboardLayout from "./Layout/DashboardLayout";
import Overview from "./pages/Overview/page";
import MintNFTs from './pages/MintNFTs/page'
import TransferNFT from './pages/TransferNFT/page'
import MyNFT from './pages/MyNFT/page'

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <div className="">
      {!isDashboardRoute && location.pathname !== "/login" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="mint-nfts" element={<MintNFTs />} />
          <Route path="transfer-nft" element={<TransferNFT />} />
          <Route path="my-nft" element={<MyNFT />} />
        </Route>
      </Routes>

      {!isDashboardRoute && location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
