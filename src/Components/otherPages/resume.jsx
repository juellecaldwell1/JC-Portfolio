"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      title: "Summary",
      content: `Passionate web developer with experience in React, C#, and ASP.NET MVC. 
      Currently pursuing an Associate’s Degree in Web Development at Ranken Technical College (expected 2025). 
      Skilled in building user-friendly applications, problem-solving, and leveraging AI-powered tools. 
      Seeking hands-on opportunities to further develop my skills and contribute to a development team.`,
    },
    {
      title: "Technical Skills",
      content: `**Languages**:
      - JavaScript (Fetch API, Async/Await, Axios)
      - HTML (Forms, Accessibility)
      - CSS (Flexbox, Tailwind CSS, Bootstrap)
      - C# (LINQ, Entity Framework, ASP.NET MVC)
      - SQL (Joins, Queries)

      **Frameworks & Libraries**:
      - React (Hooks, Framer Motion, State Management, UseState, UseEffect)
      - Node.js (Express, REST APIs)
      - ASP.NET MVC (Razor, Controllers, Views)

      **Databases**:
      - MongoDB (Mongoose, Aggregations)
      - SQL Server (Performing Queries, Join Tables)

      **Tools & Technologies**:
      - Git, GitHub, Postman, Visual Studio, ChatGPT, NPM, REST APIs`,
    },
    {
      title: "Education",
      content: `Ranken Technical College – Associate’s Degree in Web Development (Expected 2025)
      Relevant Coursework: Full-Stack Development, Databases, Object-Oriented Programming`,
    },
    {
      title: "Projects",
      content: `- **Portfolio Website** – Built with React, deployed on Vercel.
      - **Note-Taking App** – Full-stack MERN app with user authentication & CRUD operations.
      - **Game Tracker App** – C# desktop app for tracking game trophies.
      - **Issue Tracker App** – MERN stack app with user authentication & CRUD operations.
      - **Inventory Manager Website** – ASP.NET MVC project for managing product inventory.`,
    },
    {
      title: "Certifications & Achievements",
      content: `- JavaScript Algorithms & Data Structures – FreeCodeCamp
      - Portfolio Website: [juelles-portfolio.vercel.app](https://juelles-portfolio.vercel.app)`,
    },
  ];

  return (
    <div className="resume">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white text-gray-800 p-4 sm:p-8"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Juelle Caldwell</h1>
          <p className="text-xl text-gray-600">Developer</p>
          <p className="text-md text-gray-500">
            📧 Juellecc@gmail.com | 📞 (314) 986-9400 | 📍 St. Louis, MO (63116)
          </p>
        </header>

        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            className={`mb-6 p-4 rounded-lg transition-all duration-300 ease-in-out ${
              hoveredSection === index
                ? "bg-red-50 shadow-lg scale-105"
                : "bg-white"
            }`}
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-2">
              {section.title}
            </h2>
            <div className="text-gray-700 whitespace-pre-line">{section.content}</div>
          </motion.section>
        ))}
        <div className="flex gap-x-8 items-center mb-12">
          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#4f46e5",
                color: "#fff",
              }}
              transition={{ duration: 0.3 }}
              className="btn btn-lg"
            >
              Go Back
            </motion.button>
          </Link>
        </div>
        <footer className="mt-8 text-center text-gray-500">
          <p>© 2024 Juelle Caldwell. All rights reserved.</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Resume;
