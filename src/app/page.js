"use client";

import { useEffect } from "react";
import TopSection from "./components/topSection";
import Features from "./components/features";
import AnimationSection from "./components/animationSection";
import DownloadSection from "./components/downloadSection";
import Footer from "./components/footer";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <TopSection />
      <Features />
      <AnimationSection />
      <marquee behavior="scroll" direction="left" scrollamount="5" loop="infinite">
        <div className='content'>
          <img src='/marquee-logo.png' alt='logo' />Download Comera App Now
        </div>
        <div className='content'>
          <img src='/marquee-logo.png' alt='logo' />Download Comera App Now
        </div>
        <div className='content'>
          <img src='/marquee-logo.png' alt='logo' />Download Comera App Now
        </div>
        <div className='content'>
          <img src='/marquee-logo.png' alt='logo' />Download Comera App Now
        </div>
        <div className='content'>
          <img src='/marquee-logo.png' alt='logo' />Download Comera App Now
        </div>
        <div className='content'>
          <img src='/marquee-logo.png' alt='logo' />Download Comera App Now
        </div>
      </marquee>
      <DownloadSection />
      <Footer />
    </div>
  );
}
