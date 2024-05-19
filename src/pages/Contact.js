import React from "react";
import "./Web.css"
import { motion } from "framer-motion"
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div class="outer">
      <div class="middle">
        <div class="inner">
          <Media icon={<MdMailOutline size={350} />} url={"mailto:pghosh@uwaterloo.ca"}/>
          <Media icon={<FaLinkedin size={350} />} url={"https://www.linkedin.com/in/priyanshu-ghosh-261322179/"} />
          <Media icon={<FaGithub size={350} />} url={"https://github.com/Priyanshu-g"} />
        </div>
      </div>
    </div>
  );
};

const Media = ({icon, url}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.2, 
        rotate: 360,
      }}
      whileTap={{ 
        scale: 1.1 
      }}
      drag = {!url}
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer"
      style={{color: 'var(--text-color)',}}
      >
        {icon}
      </a>
    </motion.div>
  )
}

export default Contact;
