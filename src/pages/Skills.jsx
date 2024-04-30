import React from "react";
import Wrapper from "../components/Wrapper";
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
  return (
    <div id="skills">
      <Wrapper>
        <div className="p-5 ms-5">
          <hr className="horizontal dark" />
          <div className="skill-heading d-flex justify-content-start align-items-start flex-column">
            <h1 className="">My Skills</h1>
            <p>I love to work with</p>
          </div>
          <hr className="vertical " />
          <div className="container">
            <h3 className="skill-label">
              Programming languages | framework | library
            </h3>
            <div className="skill-cards-container">
              {programmingSkills.map((eachSkill, i) => {
                return (
                  <div className="div-card" key={i}>
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
                  </div>
                );
              })}
            </div>

            <h3 className="skill-label">Tools &amp; Other Skills</h3>
            <div className="skill-cards-container">
              {toolsAndOthers.map((eachSkill, i) => {
                return (
                  <div className="div-card" key={i}>
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
                  </div>
                );
              })}
            </div>
            <h3 className="skill-label">I'm currently learning:</h3>
            <div className="skill-cards-container">
              {learnings.map((eachSkill, i) => {
                return (
                  <div className="div-card" key={i}>
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
                  </div>
                );
              })}
            </div>
            <h3 className="skill-label">Communication Skills</h3>
            <div className="skill-cards-container">
              <div className="div-card">
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
              </div>
              <div className="div-card">
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
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Skills;
