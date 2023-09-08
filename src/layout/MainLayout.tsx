import { Outlet } from "react-router-dom";
import NewsLetter from "../components/Home/NewLetter";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
