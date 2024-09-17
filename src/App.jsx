import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import TaskBoard from "./Task/TaskBoard";
import Footer from "./Footer";
import TaskProvider from "./provider/TaskProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <body className="bg-[#191D26]  font-[Inter] text-white">
        <NavBar />
        <HeroSection />
        <TaskProvider>
          <ToastContainer>
            <TaskBoard />
          </ToastContainer>
          <TaskBoard />
        </TaskProvider>

        <Footer />
      </body>
    </>
  );
}

export default App;
