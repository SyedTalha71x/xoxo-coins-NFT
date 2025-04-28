import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StateProvider } from "./Context/StateContext.jsx";
import UserProvider from "./Provider/userProvider.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <StateProvider>
      <App />
    </StateProvider>
  </UserProvider>
);
