import { useEffect, useRef } from "react";
import "../assets/textition/textition";
import Wrapper from "../components/Wrapper";
/* import $ from "jquery"; */

function About() {
  const divBox = useRef(null);

  useEffect(() => {
    if (divBox.current !== null) {
      console.log(divBox);
      $(divBox.current).textition({
        speed: 1.5,
        animation: "ease-out",
        map: { x: 200, y: 100, z: 0 },
        autoplay: true,
        interval: 3.5,
      });
    }
  }, []);

  return (
    <div id="home">
      <Wrapper>
        <div className="">
          <div className="d-flex vh-100 about row align-items-center  justify-content-center row">
            <div className="col-12">
              <div className="nameBox ps-5 ms-5">
                <h2 className="m-0 p-0">Hi i'm </h2>
                <h1 className="fw-bold no-wrap display-3 m-0 p-0">
                  Loordhu Jeyakumar{" "}
                </h1>{" "}
              </div>
              <div className=" w-100 textanimation mb-3 ps-5 ms-5" ref={divBox}>
                <div className=" text-success">Full Stack Developer</div>
                <div className="text-warning ">Back-end Developer</div>
                <div className=" text-danger">Front-end Developer</div>
                <div className="text-primary ">Technical Support Specilist</div>
                <div className=" text-danger-emphasis">Self-Learner</div>
                <div className=" text-success">Tech enthusiast</div>
              </div>
            </div>
            <div className="d-flex ps-5 ms-5">
              <div className=" aboutMeJsonBox ">
                <pre>
                  <code className="aboutMeJson">
                    <ul>
                      &#123;{" "}
                      <li className="propertyName">"about_me" : &#123;</li>
                      <li className="propertyName ps-4">
                        "name":{" "}
                        <span className="value">"Loordhu Jeyakumar",</span>
                      </li>
                      <li className="propertyName ps-4">
                        "title":{" "}
                        <span className="value">
                          "Full STack Developer", | "Back-end Developer", |
                          "Front-end Developer"
                        </span>
                      </li>
                      <li className="propertyName ps-4">
                        "summery":{" "}
                        <span className="value text-wrap">
                          “I am an aspiring full-stack developer with a strong
                          foundation in the MERN Stack. I’ve completed multiple
                          projects and currently work at Satya Technosoft India
                          Private Limited, where I excel in troubleshooting
                          technical issues. My adaptability and passion for
                          learning drive my desire to transition into software
                          development. 👩‍💻🚀”
                        </span>
                      </li>
                      <li className="propertyName ps-4">
                        "skills":{" "}
                        <span className="value">
                          <span className="arrayBracket">&#91;</span>{" "}
                          "JavaScript","NodeJS", "React","MongoDb", "ExpressJS",
                          "HTML","CSS", "Programming Fundamentals",
                          "Problem-solving", "Learning Agility", "Teamwork"{" "}
                          <span className="arrayBracket">&#93;</span>
                        </span>
                      </li>
                      <li className="propertyName ps-4">
                        "latestProject": &#123;
                        <ul>
                          <li className="propertyName">
                            "title":{" "}
                            <span className="value">"PettyCash Manager",</span>
                          </li>
                          <li className="propertyName">
                            "description":{" "}
                            <span className="value">
                              "IMPREST-IVE is your comprehensive solution for
                              managing petty cash effortlessly and efficiently.
                              Designed with simplicity and functionality in
                              mind, our application streamlines the process of
                              handling income and expenses, ensuring that your
                              business’s financial transactions are tracked with
                              precision.",
                            </span>
                          </li>
                          <li className="propertyName ">
                            "link":{" "}
                            <span className="value">
                              "https://imprest-ive-pettycash-manager.netlify.app/",
                            </span>
                          </li>
                          &#125;
                        </ul>
                      </li>
                      <li className="propertyName ps-4">
                        "latestProject": &#123;
                        <ul>
                          <li className="propertyName">
                            "email":{" "}
                            <span className="value">
                              "loordhujeyakumar@gmail.com",
                            </span>
                          </li>
                          <li className="propertyName">
                            "mobile":{" "}
                            <span className="value">9600693684 ,</span>
                          </li>
                          <li className="propertyName">
                            "linkedin":{" "}
                            <span className="value">
                              "https://www.linkedin.com/in/loordhu-jeyakumar/",
                            </span>
                          </li>
                          &#125;
                        </ul>
                      </li>
                      &#125;
                    </ul>
                  </code>
                </pre>
              </div>
              {/*  <div className="environment ">
              <img src={environment} alt="" /> 
          </div> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default About;
