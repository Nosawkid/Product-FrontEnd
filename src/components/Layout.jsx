import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column h-100">
      <Header />
      <div className="w-full flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
