import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Sidebar } from "./components/sidebar/Sidebar";
// import { Topbar } from "./components/topbar/Topbar";
// import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import "./App.css";
// import { HomePage } from "./pages/home/HomePage";

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
        {/* <Route path="/" component={<HomePage />} /> */}
        <Route path="/login" component={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
