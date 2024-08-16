import React from "react";

export default function MainContent() {
  return (
    <main
      id="main-container"
      className="flex min-h-screen flex-col items-center justify-between px-12"
    >
      <div className="bg-red-700 w-full h-[1000px]"></div>
      <div className="bg-primary w-full h-[1000px]"></div>
    </main>
  );
}
