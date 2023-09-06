import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
