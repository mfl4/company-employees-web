import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Sidebar } from "./components/sidebar/Sidebar";
// import { Topbar } from "./components/topbar/Topbar";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import { UserPage } from "./pages/user/UserPage";
import "./App.css";

const App = () => {
  return (
    // <>
    //   <Topbar />

    //   <div className="container">
    //     <Sidebar />
    //     <HomePage />
    //   </div>
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
