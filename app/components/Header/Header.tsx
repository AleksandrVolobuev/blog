import React from "react";
import { Navbar } from "./Navbar";

export default function Header() {
  return (
   <header className="sticky top-0 z-50 w-full bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-md">
      <Navbar />
    </header>
  );
}
