import React from "react";
import Footer from "../Footer/Footer";
import RotatingText from "./RoatatingText";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-black ">
        <video
          className="w-full h-full object-fill"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/HomepageVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <RotatingText/>
      <Footer />
    </>
  );
};

export default Home;
