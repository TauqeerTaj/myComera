"use client";

import { useEffect } from "react";
import TopSection from "./components/topSection";
import Features from "./components/features";
import AnimationSection from "./components/animationSection";
import DownloadSection from "./components/downloadSection";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      {/* <TopSection /> */}
      {/* <Features /> */}
      {/* <AnimationSection /> */}
      <DownloadSection />
    </div>
  );
}
