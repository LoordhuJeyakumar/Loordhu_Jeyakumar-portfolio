import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTransition, animated } from "@react-spring/web";

// Mockup for About Me JSON
const ABOUT_ME = {
  about_me: {
    name: "Loordhu Jeyakumar",
    title: [
      "Full Stack Developer",
      "Back-end Developer",
      "Front-end Developer",
      "Technical Support Specialist",
      "Self-Learner",
      "Tech Enthusiast",
    ],
    summary:
      "I am an aspiring full-stack developer with a strong foundation in the MERN Stack. I’ve completed multiple projects and currently work at Satya Technosoft India Private Limited, where I excel in troubleshooting technical issues. My adaptability and passion for learning drive my desire to transition into software development. 👩‍💻🚀",
    skills: [
      "JavaScript",
      "NodeJS",
      "React",
      "MongoDb",
      "ExpressJS",
      "HTML",
      "CSS",
      "Bootstrap",
      "TailwindCSS",
      "Redux",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "Canva",
      "Jira",
      "Microsoft Office",
      "Programming Fundamentals",
      "Problem-solving",
      "Learning Agility",
      "Teamwork",
      "Adaptability",
      "Self-Learning",
      "Tech Enthusiast",
      "Quick Learner",
      "Technical Support Specialist",
      "Technical Documentation",
      "Technical Communication",
      "Technical Support",
      "Problem-solving",
    ],
    latestProject: [
      {
        title: "PettyCash Manager",
        description:
          "IMPREST-IVE is your comprehensive solution for managing petty cash effortlessly and efficiently. Designed with simplicity and functionality in mind, our application streamlines the process of handling income and expenses, ensuring that your business’s financial transactions are tracked with precision.",
        link: "https://imprest-ive-pettycash-manager.netlify.app/",
      },
    ],
    contact: {
      email: "loordhujeyakumar@gmail.com",
      mobile: "9600693684",
      linkedin: "https://www.linkedin.com/in/loordhu-jeyakumar/",
    },
  },
};

function About() {
  const [index, setIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  // React-Spring Transition for Title Animation
  const transitions = useTransition(ABOUT_ME.about_me.title[index], {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 500 },
    delay: 500, // Add delay here
  });

  // Update index to change title every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ABOUT_ME.about_me.title.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Typing Effect on JSON Data
  useEffect(() => {
    if (typingIndex < ABOUT_ME.about_me.summary.length) {
      const timer = setTimeout(() => {
        setTypingIndex(typingIndex + 1);
      }, 50); // Adjust typing speed
      return () => clearTimeout(timer);
    } else {
      setIsTypingDone(true);
    }
  }, [typingIndex]);

  return (
    <div id="about" className="">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Welcome Section with Animation */}
        <motion.div
          className="h-screen flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-medium text-light-secondaryText dark:text-dark-secondaryText">
            Welcome to My Portfolio
          </h2>
          <span className="text-2xl font-bold dark:text-dark-primaryText text-light-primaryText">
            Hi, I&apos;m
          </span>
          <h1 className="text-5xl font-bold ">
            <span className="dark:text-dark-primaryText text-light-primaryText">
              {ABOUT_ME.about_me.name.split(" ")[0]}{" "}
            </span>
            <span className="text-light-accent dark:text-dark-accent">
              {ABOUT_ME.about_me.name.split(" ")[1]}
            </span>
          </h1>
          {/* Animated Titles */}
          <div className="relative h-10 mb-2 w-full">
            {transitions((style, item) => (
              <animated.div
                style={style}
                className="absolute w-full text-2xl font-medium  dark:text-dark-highlight text-light-highlight"
              >
                {item}
              </animated.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg max-w-lg dark:text-dark-secondaryText text-light-secondaryText"
          >
            I am passionate about technology, software development, and solving
            problems. Here&apos;s a little bit about me.
          </motion.p>
          {/* CTA Button and Social Links */}
          <div className="flex flex-col items-center">
            <motion.a
              href="https://drive.google.com/file/d/1aC36SxwfEDlDURusvuu14SI9otdYWhnO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Download Resume
            </motion.a>
            <div className="social-links mt-4 flex gap-4 items-center justify-center">
              <motion.a
                href={ABOUT_ME.about_me.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
              <motion.a
                href={`mailto:${ABOUT_ME.about_me.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fas fa-envelope"></i>
              </motion.a>
              <motion.a
                href={`tel:${ABOUT_ME.about_me.contact.mobile}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fas fa-phone"></i>
              </motion.a>
              <motion.a
                href={ABOUT_ME.about_me.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="github-link"
              >
                <i className="fab fa-github"></i>
              </motion.a>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="scroll-down mt-24"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <a href="#about-me" className="scroll-down-link">
              <i className="fas fa-arrow-down"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* About Me Section */}
        <motion.section
          className="section py-16 dark:bg-dark-background bg-light-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center text-light-primaryText dark:text-dark-primaryText">
            <motion.div
              className="w-3/4  p-4 rounded shadow dark:shadow-dark-accent    dark:text-lime-300 mt-8"
              id="about-me"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="text-left">
                <div className="text-sm font-mono  overflow-auto">
                  <motion.p
                    className="whitespace-pre-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * typingIndex, duration: 0.3 }}
                  >
                    {ABOUT_ME.about_me.summary.slice(0, typingIndex)}
                    {isTypingDone ? "" : "_"}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="w-3/4  p-4 rounded shadow mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-medium  mb-4">Skills</h3>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: { staggerChildren: 0.1, staggerDirection: -1 },
                }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {ABOUT_ME.about_me.skills.map((skill, index) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    key={index}
                    className="skill-item text-center  p-4 rounded-lg shadow hover:bg-light-secondaryText dark:hover:bg-dark-secondaryText hover:text-dark-primaryText dark:hover:text-light-primaryText"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <p className="font-medium">{skill}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Latest Project Section */}
            <motion.div
              className="w-3/4 s p-4 rounded shadow mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium  mb-4">Latest Project</h3>
              <p className="text-sm ">
                {ABOUT_ME.about_me.latestProject[0].title}
              </p>
              <p className="text-sm ">
                {ABOUT_ME.about_me.latestProject[0].description}
              </p>
              <a
                href={ABOUT_ME.about_me.latestProject[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;
