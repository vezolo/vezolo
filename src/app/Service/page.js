"use client";

import Category from "@/components/Category";
import React, { useState } from "react";

const Service = () => {
  const [activeCategory, setActiveCategory] = useState("Overview");
  const categories = [
    {
      title: "Overview",
    },
    {
      title: "Finance",
    },
    {
      title: "Reminder",
    },
  ];

  return (
    <div className="container">
      <Category
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
      Service
    </div>
  );
};

export default Service;
