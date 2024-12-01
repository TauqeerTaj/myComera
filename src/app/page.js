"use client";

import { useEffect } from "react";
import TopSection from "./components/topSection";
import Features from "./components/features";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      {/* <TopSection /> */}
      <Features />
    </div>
  );
}
