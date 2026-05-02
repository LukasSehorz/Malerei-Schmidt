import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "./components/IntroScreen";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Awards from "./pages/Awards";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Process from "./pages/Process";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

export default function App() {
  const [introComplete, setIntroComplete] = useState(
    () => sessionStorage.getItem("hoser-intro-shown") === "1"
  );

  return (
    <BrowserRouter>
      <AnimatePresence>
        {!introComplete && (
          <IntroScreen key="intro" onComplete={() => {
            sessionStorage.setItem("hoser-intro-shown", "1");
            setIntroComplete(true);
          }} />
        )}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ueber-uns" element={<AboutUs />} />
        <Route path="/auszeichnungen" element={<Awards />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/preise" element={<Pricing />} />
        <Route path="/prozess" element={<Process />} />
        <Route path="/projekte" element={<Projects />} />
        <Route path="/projekte/:id" element={<Project />} />
        <Route path="/leistungen" element={<Services />} />
        <Route path="/referenzen" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}
