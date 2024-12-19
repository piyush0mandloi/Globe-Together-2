import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TrendingPage from "../components/TrendingPage";
import Footer from "../components/Footer";
import backgroundImage from "../public/assets/bgImg.jpg";
import Signin from "./Signin";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import Notification from "./Notification";
import PostsSection from "../components/PostsSection";
import MoreDestinations from "../components/MoreDestinations";
import Chatbot from "../components/Chatbot";

const Dashboard = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  // Ref for Posts Section
  const postsSectionRef = useRef(null);
  // Scroll function
  const scrollToPosts = () => {
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="App">
        <div
          className="main-header relative w-full h-[360px] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Navbar
            openLogin={() => setLoginModalOpen(true)}
            scrollToPosts={scrollToPosts} // Pass scroll function to Navbar//
          />
          <Header />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <TrendingPage />
                <div ref={postsSectionRef}>
                  <PostsSection />
                </div>
              </>
            }
          />
          <Route path="/destinations" element={<MoreDestinations />} />
          {/* <Route path="/posts" element={<PostsSection />} /> New Route for Posts */}
        </Routes>

        <Footer />

        {/* Notification Popup */}
        <Notification />

        {/* Modal */}
        <Signin
          isOpen={isLoginModalOpen}
          onClose={() => setLoginModalOpen(false)}
          onSignupOpen={() => {
            setLoginModalOpen(false);
            setSignupModalOpen(true);
          }}
          onForgotPasswordOpen={() => {
            setLoginModalOpen(false);
            setForgotPasswordOpen(true);
          }}
        />
        {/* Signup Modal */}
        <Signup
          isOpen={isSignupModalOpen}
          onClose={() => setSignupModalOpen(false)}
          onLoginOpen={() => {
            setSignupModalOpen(false);
            setLoginModalOpen(true);
          }}
        />
        <ForgetPassword
          isOpen={isForgotPasswordOpen}
          onClose={() => setForgotPasswordOpen(false)}
          onLoginOpen={() => {
            setForgotPasswordOpen(false);
            setLoginModalOpen(true);
          }}
        />

        {/* Chatbot popup */}
      </div>
      <Chatbot />
    </Router>
  );
};

export default Dashboard;
