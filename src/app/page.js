"use client"

import { useEffect } from "react";
import TopSection from "./components/topSection";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <TopSection />
    </div>
  );
}
