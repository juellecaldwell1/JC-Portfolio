'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {

  const [hoveredSection, setHoveredSection] = useState(null)

  const sections = [
    {
      title: 'Summary',
      content: `A passionate web developer with a focus on creating responsive and user-friendly applications. 
      Skilled in JavaScript, React, and back-end development.Really excited to learn, collaborate, and contribute to lots of projects. 
      Currently pursuing an Associate's Degree in Web Development at Ranken Technical College, expected to graduate in 2025.`
    },
    {
      title: 'Experience',
      content: `Currently seeking hands-on experience and mentorship from industry experts to further develop my skills. 
      In the meantime, I have worked on several personal projects, including:
      - **Portfolio Website**: Built with React, deployed on Vercel. [GitHub](#)
      - **Note-Taking App**: MERN stack with user authentication. [GitHub](#)
      - **Game Tracker App**: C# application for tracking game trophies (beginner friendly application)`
    },
    {
      title: 'Education',
      content: `Ranken Technical College (Associate's Degree in Web Development, expected 2024)
      Relevant Coursework: Full-Stack Development, Databases, Object-Oriented Programming`
    },
    {
      title: 'Skills',
      content: `**Languages**: JavaScript, HTML, CSS, C#, SQL
      **Frameworks**: React, Node.js, Express
      **Databases**: MongoDB, SQL
      **Tools**: Git, GitHub, Postman, Visual Studio, Bootstrap, Axios`
    },
    {
      title: 'Certifications & Achievements',
      content: `- JavaScript Algorithms and Data Structures (FreeCodeCamp)
      `
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
          <p className="text-xl text-gray-600">Beginner Web Developer</p>
          <p className="text-md text-gray-500">Email: Juellecc@gmail.com| Phone: (314) 986-9400 | <a className='text-blue-500' href="https://github.com/juellecaldwell1/JC-Portfolio">GitHub</a></p>
        </header>

        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            className={`mb-6 p-4 rounded-lg transition-all duration-300 ease-in-out ${hoveredSection === index ? 'bg-red-50 shadow-lg scale-105' : 'bg-white'}`}
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-2">{section.title}</h2>
            <div className="text-gray-700 whitespace-pre-line">{section.content}</div>
          </motion.section>
        ))}
        <div className="flex gap-x-8 items-center mb-12">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff" }}
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
}

export default Resume;
