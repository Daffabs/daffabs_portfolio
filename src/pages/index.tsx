import React from "react";
import HalSatu from "@/components/halSatu";
import HalDua from "@/components/halDua";
import HalTiga from "@/components/halTiga";
import HalEmpat from "@/components/halEmpat";
import HalLima from "@/components/halLima";
import HalEnam from "@/components/halEnam";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <HalSatu />
        <HalDua />
      </div>
      <HalTiga />
      <div className="container mx-auto px-12">
        <HalEmpat />
      </div>
      <HalLima />
      <div className="container mx-auto px-12">
        <HalEnam />
      </div>
    </main>
  );
};
