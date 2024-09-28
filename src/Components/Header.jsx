// Header.js
import { TypeAnimation } from "react-type-animation";
import "./Css/header.css";
import business from "./modelImage/buinesslogo.jpg-removebg-preview.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Clock from "../Clock"; 

const Header = () => {
  return (
    <header className="py-8 bg-gradient-to-r from-black to-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="business">
            <motion.a
              href="#"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }} 
            >
              <img src={business} alt="My name" />
            </motion.a>
          </div>
          

          <Clock />

          <motion.button
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: "false", amount: 0.7 }}
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            transition={{ duration: 0.3 }}
            className="btn btn-sm"
          >
            <TypeAnimation sequence={["Let me Work for you", 1000]} />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
