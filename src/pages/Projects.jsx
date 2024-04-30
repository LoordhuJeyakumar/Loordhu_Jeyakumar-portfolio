import React from "react";
import Wrapper from "../components/Wrapper";
import pettyCashManagerImg from "../assets/images/icons/pettycash.png";
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
import mongoDB from "../assets/images/icons/mongodb.png";
import expressJSIcon from "../assets/images/icons/express-js.png";

import studentTeacher from "../assets/images/icons/student-teacher-management.png";
import weather from "../assets/images/icons/weather_Air-polution_Application.png";
import userManagement from "../assets/images/icons/user-management.png";
import passwordReset from "../assets/images/icons/password-reset-flow.png";
import mealFinder from "../assets/images/icons/meal-and-receipi-finder.png";
import qrCodeWebsite from "../assets/images/icons/qr-code-generator.png";

function Projects() {
  return (
    <div className="ps-3 ms-3">
      <Wrapper>
        <hr className="horizontal dark" />
        <h1 className="project-heading p-3 m-2">Projects</h1>
        <div className="d-flex w-100 projectCard row p-3 m-3">
          <div className="projectContents col-md-6">
            <div className="projectDetails">
              <h3 className=" fw-bold text-light">PettyCash Manager</h3>
              <p className="text-secondary">
                IMPREST-IVE is your comprehensive solution for managing petty
                cash effortlessly and efficiently. Designed with simplicity and
                functionality in mind, our application streamlines the process
                of handling income and expenses, ensuring that your business’s
                financial transactions are tracked with precision.
              </p>
            </div>

            <div className="tectStacks d-flex flex-wrap justify-content-evenly p-2 m-2">
              <span className="badge text-bg-warning">
                React <img src={reactIcon} alt="ReactJS" width={15} />
              </span>
              <span className="badge text-bg-warning">
                MongoDB <img src={mongoDB} alt="MongoDB" width={15} />
              </span>
              <span className="badge text-bg-warning">
                NodeJS <img src={nodeJsIcon} alt="NodeJs" width={15} />
              </span>
              <span className="badge text-bg-warning">
                Express <img src={expressJSIcon} alt="ExpressJS" width={15} />
              </span>
              <span className="badge text-bg-warning">
                Redux <img src={reduxIcon} alt="ExpressJS" width={15} />
              </span>
              <span className="badge text-bg-warning">
                React Router Dom{" "}
                <img src={reactRouterIcon} alt="ExpressJS" width={15} />
              </span>
            </div>
            <div className="d-flex justify-content-evenly p-2 m-2">
              <a
                href="https://github.com/LoordhuJeyakumar/pettycash-manager-fe"
                target="_blank"
                className="btn btn-info"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://imprest-ive-pettycash-manager.netlify.app/"
                target="_blank"
                className="btn btn-info"
              >
                view <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <a
              href="https://imprest-ive-pettycash-manager.netlify.app/"
              target="_blank"
            >
              <div className="projectImage w-100">
                <img src={pettyCashManagerImg} alt="Pettycash Manager" />
              </div>
            </a>
          </div>
        </div>
        <div className="d-flex w-100 projectCard row p-3 m-3">
          <div className="projectContents col-md-6">
            <div className="projectDetails">
              <h3 className=" fw-bold text-light">
                Student Teacher management system
              </h3>
              <p className="text-secondary">
                The Student Teacher Management System is a comprehensive
                solution for efficiently managing students and teachers.
                Designed with simplicity and functionality in mind, our
                application streamlines the process of creating, editing, and
                deleting teacher and student details. Additionally, it tracks
                online status. While features like course content and className
                scheduling are still under construction, the system aims to
                enhance educational administration
              </p>
            </div>

            <div className="tectStacks d-flex flex-wrap justify-content-evenly p-2 m-2">
              <span className="badge text-bg-warning">
                React <img src={reactIcon} alt="ReactJS" width={15} />
              </span>
              <span className="badge text-bg-warning">JSON Server</span>
              <span className="badge text-bg-warning">Toastify</span>
              <span className="badge text-bg-warning">
                React Router Dom{" "}
                <img src={reactRouterIcon} alt="ExpressJS" width={15} />
              </span>
            </div>
            <div className="d-flex justify-content-evenly p-2 m-2">
              <a
                href="https://github.com/LoordhuJeyakumar/React-App/tree/student-teacher-management"
                target="_blank"
                className="btn btn-info"
              >
                Github <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://student-teacher-management-react-crud.netlify.app/"
                target="_blank"
                className="btn btn-info"
              >
                view <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <a
              href="https://student-teacher-management-react-crud.netlify.app/"
              target=""
            >
              <div className="projectImage w-100">
                <img src={studentTeacher} alt="Student Teacher Manager" />
              </div>
            </a>
          </div>
        </div>

        <div className="d-flex w-100 projectCard row p-3 m-3">
          <div className="projectContents col-md-6">
            <div className="projectDetails">
              <h3 className=" fw-bold text-light">
                Weather and Air-polution Application
              </h3>
              <p className="text-secondary">
                A Weather and Air Pollution Application combines real-time
                weather forecasts with air quality data. It serves as a valuable
                tool for users to make informed decisions about their daily
                activities, health, and environmental impact.
              </p>
            </div>

            <div className="tectStacks d-flex flex-wrap justify-content-evenly p-2 m-2">
              <span className="badge text-bg-warning">
                HTML <img src={HTMLIcon} alt="HTML" width={15} />
              </span>
              <span className="badge text-bg-warning">
                Bootstrap <img src={bootstrapIcon} alt="Boostrap" width={15} />
              </span>
              <span className="badge text-bg-warning">JSON</span>
              <span className="badge text-bg-warning">RESTApi</span>
              <span className="badge text-bg-warning">
                CSS <img src={cssIcon} alt="CSS" width={15} />
              </span>
            </div>
            <div className="d-flex justify-content-evenly p-2 m-2">
              <a
                target="_blank"
                href="https://github.com/LoordhuJeyakumar/Tasks/tree/main/Day_19/WeatherApplication"
                className="btn btn-info"
              >
                GitHub <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://weather-and-air-polution-application.netlify.app/"
                target="_blank"
                className="btn btn-info"
              >
                view <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <a
              href="https://weather-and-air-polution-application.netlify.app/"
              target="_blank"
            >
              <div className="projectImage w-100">
                <img src={weather} alt="Weather and Air-polution Application" />
              </div>
            </a>
          </div>
        </div>

        <div className="d-flex w-100 projectCard row p-3 m-3">
          <div className="projectContents col-md-6">
            <div className="projectDetails">
              <h3 className=" fw-bold text-light">User Management System</h3>
              <p className="text-secondary">
                The User Management System is a web application that efficiently
                handles user-related tasks within an organization or platform.
                It allows administrators to create, edit, and delete user
                accounts while managing their roles and permissions.
                Additionally, users can update their profiles and access
                relevant features based on their assigned roles. The system
                ensures security, scalability, and ease of use for both
                administrators and users.
              </p>
            </div>

            <div className="tectStacks d-flex flex-wrap justify-content-evenly p-2 m-2">
              <span className="badge text-bg-warning">
                React <img src={reactIcon} alt="ReactJS" width={15} />
              </span>
              <span className="badge text-bg-warning">
                Bootstrap <img src={bootstrapIcon} alt="Boostrap" width={15} />
              </span>
              <span className="badge text-bg-warning">JSON</span>
              <span className="badge text-bg-warning">RESTApi</span>
              <span className="badge text-bg-warning">
                CSS <img src={cssIcon} alt="CSS" width={15} />
              </span>
            </div>
            <div className="d-flex justify-content-evenly p-2 m-2">
              <a
                href="https://github.com/LoordhuJeyakumar/React-App/tree/user-management"
                target="_blank"
                className="btn btn-info"
              >
                GitHub <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://user-management-react-crud.netlify.app/"
                target="_blank"
                className="btn btn-info"
              >
                view <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <a
              href="https://user-management-react-crud.netlify.app/"
              target="_blank"
            >
              <div className="projectImage w-100">
                <img src={userManagement} alt="User Management System" />
              </div>
            </a>
          </div>
        </div>

        <div className="d-flex w-100 projectCard row p-3 m-3">
          <div className="projectContents col-md-6">
            <div className="projectDetails">
              <h3 className=" fw-bold text-light">Password Reset Flow</h3>
              <p className="text-secondary">
                Password Reset Flow Website that utilizes Nodemailer for email
                verification and JWT (JSON Web Tokens) for secure access: The
                Password Reset Flow Website provides a robust mechanism for
                users to create account and login to that account and reset
                their forgotten passwords.
              </p>
            </div>

            <div className="tectStacks d-flex flex-wrap justify-content-evenly p-2 m-2">
              <span className="badge text-bg-warning">
                React <img src={reactIcon} alt="ReactJS" width={15} />
              </span>
              <span className="badge text-bg-warning">
                Bootstrap <img src={bootstrapIcon} alt="Boostrap" width={15} />
              </span>
              <span className="badge text-bg-warning">
                MongoDB <img src={mongoDB} alt="MongoDB" width={15} />
              </span>
              <span className="badge text-bg-warning">
                NodeJS <img src={nodeJsIcon} alt="NodeJs" width={15} />
              </span>
              <span className="badge text-bg-warning">
                Express <img src={expressJSIcon} alt="ExpressJS" width={15} />
              </span>

              <span className="badge text-bg-warning">
                React Router Dom{" "}
                <img src={reactRouterIcon} alt="ExpressJS" width={15} />
              </span>
              <span className="badge text-bg-warning">RESTApi</span>
              <span className="badge text-bg-warning">
                CSS <img src={cssIcon} alt="CSS" width={15} />
              </span>
            </div>
            <div className="d-flex justify-content-evenly p-2 m-2">
              <a
                href="https://github.com/LoordhuJeyakumar/password-reset-fe"
                target="_blank"
                className="btn btn-info"
              >
                GitHub <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://password-reset-flow-nodejs.netlify.app/"
                target="_blank"
                className="btn btn-info"
              >
                view <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <a
              href="https://password-reset-flow-nodejs.netlify.app/"
              target="_blank"
            >
              <div className="projectImage w-100">
                <img src={passwordReset} alt="Password Reset Flow" />
              </div>
            </a>
          </div>
        </div>

        <div className="d-flex w-100 projectCard row p-3 m-3">
          <div className="projectContents col-md-6">
            <div className="projectDetails">
              <h3 className=" fw-bold text-light">
                The Meal and recipe finder{" "}
              </h3>
              <p className="text-secondary">
                The Meal and Recipe Finder Website is an online platform that
                helps users discover delicious meals and cooking inspiration. It
                provides a vast collection of recipes, categorized by cuisine,
                dietary preferences, and ingredients. Users can search for
                specific dishes, explore step-by-step instructions, and even
                save their favorite recipes. Whether you’re a seasoned chef or a
                beginner in the kitchen, this website offers a delightful
                culinary journey. 🍽️👩‍🍳🌟
              </p>
            </div>

            <div className="tectStacks d-flex flex-wrap justify-content-evenly p-2 m-2">
              <span className="badge text-bg-warning">
                HTML <img src={HTMLIcon} alt="HTML" width={15} />
              </span>
              <span className="badge text-bg-warning">
                Bootstrap <img src={bootstrapIcon} alt="Boostrap" width={15} />
              </span>

              <span className="badge text-bg-warning">RESTApi</span>
              <span className="badge text-bg-warning">
                CSS <img src={cssIcon} alt="CSS" width={15} />
              </span>
              <span className="badge text-bg-warning">JSON</span>
            </div>
            <div className="d-flex justify-content-evenly p-2 m-2">
              <a
                href="https://github.com/LoordhuJeyakumar/Tasks/tree/main/Day_19/Meal_Finder"
                target="_blank"
                className="btn btn-info"
              >
                GitHub <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://the-meal-finder-101.netlify.app/"
                target="_blank"
                className="btn btn-info"
              >
                view <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <a href="https://the-meal-finder-101.netlify.app/" target="_blank">
              <div className="projectImage w-100">
                <img src={mealFinder} alt="The Meal and recipe finder" />
              </div>
            </a>
          </div>
        </div>

        <div className="d-flex w-100 projectCard row p-3 m-3">
          <div className="projectContents col-md-6">
            <div className="projectDetails">
              <h3 className=" fw-bold text-light">QR Code generator </h3>
              <p className="text-secondary">
                The Custom QR Code Generator is an online tool that allows users
                to create personalized QR codes. Users can input any text, URL,
                or contact information, and the website generates a unique QR
                code. These QR codes can be used for various purposes, such as
                sharing website links, adding contact details to business cards,
                or promoting events. Users can customize the QR code’s colors,
                add logos, and download the final design. It’s a convenient way
                to make information easily scannable using smartphones and other
                QR code readers. 📲🔍🌐
              </p>
            </div>

            <div className="tectStacks d-flex flex-wrap justify-content-evenly p-2 m-2">
              <span className="badge text-bg-warning">
                HTML <img src={HTMLIcon} alt="HTML" width={15} />
              </span>
              <span className="badge text-bg-warning">
                Bootstrap <img src={bootstrapIcon} alt="Boostrap" width={15} />
              </span>

              <span className="badge text-bg-warning">RESTApi</span>
              <span className="badge text-bg-warning">
                CSS <img src={cssIcon} alt="CSS" width={15} />
              </span>
              <span className="badge text-bg-warning">JSON</span>
            </div>
            <div className="d-flex justify-content-evenly p-2 m-2">
              <a
                href="https://github.com/LoordhuJeyakumar/Tasks/tree/main/Day_19/QR_code_generator"
                target="_blank"
                className="btn btn-info"
              >
                GitHub <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://qr-code-generator-online.netlify.app/"
                target="_blank"
                className="btn btn-info"
              >
                view <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <a
              href="https://qr-code-generator-online.netlify.app/"
              target="_blank"
            >
              <div className="projectImage w-100">
                <img src={qrCodeWebsite} alt="QR Code generator" />
              </div>
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Projects;
