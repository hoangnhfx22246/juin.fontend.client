import { Outlet } from "react-router-dom";
import Navigation from "./Components/Layout/Navigation";
import Footer from "./Components/Layout/Footer";
import { Toaster } from "sonner";

export default function Root() {
  return (
    <>
      <div className="min-h-screen text-green-950 font-sans">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
