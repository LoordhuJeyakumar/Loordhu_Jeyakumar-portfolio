import mongodbIcon from "../assets/images/icons/mongodb.png";
import expressJSIcon from "../assets/images/icons/express-js.png";

import reactIcon from "../assets/images/icons/react-js.png";
import nodeJsIcon from "../assets/images/icons/node-js.png";
import HTMLIcon from "../assets/images/icons/html-5.png";
import javaScriptIcon from "../assets/images/icons/js.png";
import cssIcon from "../assets/images/icons/css-3.png";
import bootstrapIcon from "../assets/images/icons/bootstrap-5-logo-icon.png";
import reactRouterIcon from "../assets/images/icons/react-router.svg";
import reduxIcon from "../assets/images/icons/redux.png";
import gitIcon from "../assets/images/icons/git-icon.png";
import vsCodeIcon from "../assets/images/icons/visual-studio-code-icon.png";
import postManIcon from "../assets/images/icons/postman-icon.png";

import awsIcon from "../assets/images/icons/aws-icon.png";
import pythonIcon from "../assets/images/icons/python-programming-language-icon.png";
import typeScriptIcon from "../assets/images/icons/typescript-programming-language-icon.png";
import nextJsIcon from "../assets/images/icons/nextjs-icon.png";

import englishIcon from "../assets/images/icons/lang-en.png";
import tamilIcon from "../assets/images/icons/lang-ta.png";
import { motion } from "framer-motion";

function Skills() {
  const programmingSkills = [
    {
      name: "MongoDB",
      level: "Advanced Beginner",
      iconUrl: mongodbIcon,
    },
    {
      name: "Express.js",
      level: "Proficient",
      iconUrl: expressJSIcon,
    },
    {
      name: "React.js",
      level: "Proficient",
      iconUrl: reactIcon,
    },

    {
      name: "Node.js",
      level: "Proficient",
      iconUrl: nodeJsIcon,
    },
    {
      name: "JavaScript",
      level: "advanced",
      iconUrl: javaScriptIcon,
    },
    {
      name: "HTML",
      level: "advanced",
      iconUrl: HTMLIcon,
    },
    {
      name: "CSS",
      level: "advanced",
      iconUrl: cssIcon,
    },
    {
      name: "Bootstrap",
      level: "advanced",
      iconUrl: bootstrapIcon,
    },
    {
      name: "React Router",
      level: "Proficient",
      iconUrl: reactRouterIcon,
    },
    {
      name: "Redux",
      level: "Proficient",
      iconUrl: reduxIcon,
    },
  ];

  const toolsAndOthers = [
    {
      name: "Git",
      level: "Proficient",
      iconUrl: gitIcon,
    },
    {
      name: "VS Code",
      level: "Proficient",
      iconUrl: vsCodeIcon,
    },
    {
      name: "Postman",
      level: "Proficient",
      iconUrl: postManIcon,
    },
  ];

  const learnings = [
    {
      name: "Aws",
      level: "Beginner",
      iconUrl: awsIcon,
    },
    {
      name: "Python",
      level: "Beginner",
      iconUrl: pythonIcon,
    },
    {
      name: "TypeScript",
      level: "Beginner",
      iconUrl: typeScriptIcon,
    },
    {
      name: "NextJS",
      level: "Beginner",
      iconUrl: nextJsIcon,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
    exit: { opacity: 0, y: 30 },
  };
  return (
    <div id="skills" className="bg-light-background dark:bg-dark-background ">
      <>
        <div className="p-5 ms-5">
          <hr className="horizontal dark" />
          <div className="skill-heading d-flex justify-content-start align-items-start flex-column">
            <motion.h1
              className="text-light-primaryText dark:text-dark-primaryText"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              My Skills
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              I love to work with
            </motion.p>
          </div>
          <hr className="vertical " />
          <div className="container text-light-primaryText dark:text-dark-primaryText">
            <motion.h3
              className="skill-label"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Programming languages | framework | library
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="skill-cards-container"
            >
              {programmingSkills.map((eachSkill, i) => {
                return (
                  <motion.div
                    className="div-card cursor-pointer
                    text-light-secondaryText dark:text-dark-secondaryText
                    hover:text-light-primaryText dark:hover:text-dark-primaryText
                    "
                    key={i}
                    custom={i}
                    variants={fadeIn}
                  >
                    <div
                      className="div-card-item cursor-pointer
                  
                      "
                      title={`Level :${eachSkill.level}`}
                    >
                      <img
                        src={eachSkill.iconUrl}
                        alt={eachSkill.name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <span>{eachSkill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="skill-label"
            >
              Tools &amp; Other Skills
            </motion.h3>
            <motion.div
              className="skill-cards-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {toolsAndOthers.map((eachSkill, i) => {
                return (
                  <motion.div
                    className="div-card cursor-pointer
                    text-light-secondaryText dark:text-dark-secondaryText
                    hover:text-light-primaryText dark:hover:text-dark-primaryText"
                    key={i}
                    custom={i}
                    variants={fadeIn}
                  >
                    <div
                      className="div-card-item"
                      title={`Level :${eachSkill.level}`}
                    >
                      <img
                        src={eachSkill.iconUrl}
                        alt={eachSkill.name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <span>{eachSkill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="skill-label"
            >
              I&#39;m currently learning:
            </motion.h3>
            <motion.div
              className="skill-cards-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {learnings.map((eachSkill, i) => {
                return (
                  <motion.div
                    className="div-card cursor-pointer
                    text-light-secondaryText dark:text-dark-secondaryText
                    hover:text-light-primaryText dark:hover:text-dark-primaryText"
                    key={i}
                    custom={i}
                    variants={fadeIn}
                  >
                    <div
                      className="div-card-item"
                      title={`Level :${eachSkill.level}`}
                    >
                      <img
                        src={eachSkill.iconUrl}
                        alt={eachSkill.name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <span>{eachSkill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="skill-label"
            >
              Communication Skills
            </motion.h3>
            <motion.div
              className="skill-cards-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="div-card cursor-pointer
              text-light-secondaryText dark:text-dark-secondaryText
              hover:text-light-primaryText dark:hover:text-dark-primaryText
              "
                variants={fadeIn}
              >
                <div
                  className="div-card-item english"
                  title="Level : Proficient"
                >
                  {" "}
                  <img
                    src={englishIcon}
                    alt={"English"}
                    style={{ width: "100%" }}
                  />
                </div>
                <span>English</span>
              </motion.div>
              <motion.div
                className="div-card cursor-pointer text-light-secondaryText dark:text-dark-secondaryText hover:text-light-primaryText dark:hover:text-dark-primaryText"
                variants={fadeIn}
              >
                <div
                  className="div-card-item tamil"
                  title="Level : Advanced Beginner"
                >
                  {" "}
                  <img
                    src={tamilIcon}
                    alt={"Tamil"}
                    style={{ width: "100%" }}
                  />
                </div>
                <span>Tamil</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Skills;
