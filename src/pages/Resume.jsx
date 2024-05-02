import React from "react";
import Wrapper from "../components/Wrapper";
const profileImg =
  "https://drive.google.com/uc?id=1Wes2V2BkdlK9BCHd9Nj7SFQlVakIk1nt";

function Resume() {
  return (
    <div>
      <Wrapper>
        <div className="d-flex flex-column m-4">
          <header className="header ">
            <div className="top-bar theme-bg-primary-darken rounded">
              <div className="header-intro header-intro-resume theme-bg-primary text-white py-4">
                <div className="container position-relative">
                  <h2 className="page-heading mb-3">Resume</h2>
                  <a
                    className="btn theme-btn-on-bg download-resume position-absolute fw-bold mx-auto"
                    href="https://drive.google.com/file/d/1aC36SxwfEDlDURusvuu14SI9otdYWhnO/view?usp=sharing"
                    target="_blank"
                  >
                    Download PDF Version{" "}
                    <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <article className="resume-wrapper text-center position-relative ">
            <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg rounded">
              <header className="resume-header pt-4 pt-md-0 rounded">
                <div className="media flex-column flex-md-row">
                  <div className="imageBox rounded">
                    <img
                      className="me-3 img-fluid h-auto rounded picture mx-auto profile-picture"
                      src="https://loordhujeyakumar-portfolio.s3.ap-south-1.amazonaws.com/20211225_140613~3.jpg"
                      alt="Loordhu Jeyakumar"
                    />
                  </div>
                  <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                    <div className="primary-info">
                      <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                        Loordhu Jeyakumar
                      </h1>
                      <div className="title mb-3">Full Stack Developer</div>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <a
                            href="mailto:loordhujeyakumar@gmail.com"
                            target="_blank"
                          >
                            <i
                              className="fa fa-envelope-o"
                              aria-hidden="true"
                            ></i>{" "}
                            loordhujeyakumar@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="secondary-info ms-md-auto mt-2">
                      <ul className="resume-social list-unstyled">
                        <li className="mb-3">
                          <a
                            href="https://www.linkedin.com/in/loordhu-jeyakumar/"
                            target="_blank"
                          >
                            <span className="fa-container text-center me-2">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </span>
                            linkedin.com/in/loordhu-jeyakumar
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://github.com/loordhuJeyakumar"
                            target="_blank"
                          >
                            <span className="fa-container text-center me-2">
                              <i
                                className="fa fa-github"
                                aria-hidden="true"
                              ></i>
                            </span>
                            github.com/loordhuJeyakumar
                          </a>
                        </li>

                        {/*  <li>
                          <a href="http://www.vatsalshah.in" target="_blank">
                            <span className="fa-container text-center me-2">
                              <i class="fa fa-globe" aria-hidden="true"></i>
                            </span>
                            vatsalshah.in
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
              <div className="resume-body p-5">
                <section className="resume-section summary-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    PROFESSIONAL Summary
                  </h2>
                  <div className="resume-section-content">
                    <p className="mb-0">
                      <strong>
                        I am a highly motivated and adaptable aspiring
                        full-stack developer{" "}
                      </strong>
                      with a passion for crafting{" "}
                      <strong>user-friendly web applications.</strong>{" "}
                      Leveraging a strong foundation in the{" "}
                      <strong>
                        MERN Stack (MongoDB, Express.js, React.js, and Node.js){" "}
                      </strong>{" "}
                      through a blend of <strong>self-directed</strong> learning
                      and intensive programs at{" "}
                      <strong>GUVI Geek Networks</strong>, I have successfully
                      completed <strong>5+ projects</strong>. Currently at{" "}
                      <strong>
                        Satya Technosoft India Private Limited, as a technical
                        support specialist
                      </strong>
                      , I utilize my problem-solving skills to troubleshoot
                      complex technical issues for clients. I’ve consistently
                      exceeded customer satisfaction expectations by resolving
                      hardware driver issues and network problems. My
                      adaptability, initiative, and passion for learning new
                      technologies drive my eagerness to transition into a
                      software development role.
                    </p>
                  </div>
                </section>

                <div className="row">
                  <div className="col-lg-9">
                    <section className="resume-section experience-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                        Work Experience
                      </h2>
                      <div className="resume-section-content">
                        <div className="resume-timeline position-relative">
                          <article className="resume-timeline-item position-relative pb-5">
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">
                                  Full Stack Developer Program (MERN Stack)
                                </h3>
                                <div className="resume-company-name ms-auto">
                                  <a
                                    href="https://www.guvi.in/"
                                    target="_blank"
                                  >
                                    GUVI Geek Network Private Limited
                                  </a>
                                </div>
                              </div>

                              <div className="resume-position-time">
                                Date completed April. 2024
                              </div>
                            </div>

                            <div className="resume-timeline-item-desc">
                              <p>
                                Built robust web apps using{" "}
                                <strong>MERN stack</strong>, HTML, CSS &
                                advanced JS. Strong problem-solver, self-learner
                                & team player. Ready to contribute with my
                                skills!
                              </p>
                              <ul className="experience-list">
                                <li>
                                  Acquired proficiency in{" "}
                                  <strong>MERN Stack</strong> (MongoDB,
                                  Express.js, React, and Node.js),{" "}
                                  <strong>HTML, CSS,</strong>
                                  and <strong>JavaScript</strong>, including
                                  advanced concepts. This enabled the creation
                                  of robust, scalable, and efficient web
                                  applications.
                                </li>
                                <li>
                                  Honed <strong>problem-solving</strong> skills
                                  crucial for debugging and optimizing code, and
                                  gained a basic understanding of data
                                  <strong>structures and algorithms</strong>.
                                </li>
                                <li>
                                  Demonstrated a commitment to{" "}
                                  <strong>continuous learning</strong> and
                                  proven ability to learn independently,
                                  mastering new concepts and technologies
                                  through <strong>self-study</strong>.
                                </li>
                                <li>
                                  Exhibited the ability to work effectively in a
                                  team and independently, managing tasks and
                                  projects with minimal supervision.
                                </li>
                                <li>
                                  Completed several projects during the program,
                                  including a{" "}
                                  <strong>Petty Cash Manager</strong>,
                                  Student-Teacher Management System, User
                                  Management System, Weather Application, Meal
                                  Finder, and QR Code Generator. These projects
                                  provided practical experience in working with
                                  the MERN stack.
                                </li>
                              </ul>
                              <p>
                                These skills and attributes, combined with my
                                previous roles, position me well for a developer
                                role. I’m confident that I can bring value to
                                any team with my technical skills,
                                problem-solving abilities, and commitment to
                                continuous learning.
                              </p>
                            </div>
                          </article>

                          <article className="resume-timeline-item position-relative pb-5">
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">
                                  Technical Support Specialist (Remote)
                                </h3>
                                <div className="resume-company-name ms-auto">
                                  <a
                                    href="https://sathyainfo.com/"
                                    target="_blank"
                                  >
                                    Sathya Technosoft (i) Pvt Ltd
                                  </a>
                                </div>
                              </div>

                              <div className="resume-position-time">
                                Sep. 2021 – Present Tuticorin, Tamil Nadu
                              </div>
                            </div>

                            <div className="resume-timeline-item-desc">
                              <p>
                                I thrive in a fast-paced environment providing
                                exceptional technical support to clients at
                                Sathya Technosoft. My role involves:
                              </p>
                              <ul className="experience-list">
                                <li>
                                  <strong>
                                    In-depth understanding of client needs:
                                  </strong>{" "}
                                  I actively listen to client inquiries and
                                  complaints to fully grasp the situation.
                                </li>
                                <li>
                                  <strong>Efficient issue resolution:</strong>{" "}
                                  Leveraging remote support tools (Any Desk,
                                  TeamViewer, Rescue), I diagnose, troubleshoot,
                                  and resolve technical issues promptly. When
                                  necessary, I also travel on-site to address
                                  complex problems directly at the client
                                  location.
                                </li>
                                <li>
                                  <strong>Problem-Solving:</strong> Troubleshoot
                                  complex hardware and software issues,
                                  escalating to relevant teams when necessary,
                                  and ensuring timely resolution for high
                                  customer satisfaction (90% satisfaction rate).
                                </li>
                                <li>
                                  <strong>
                                    Clear communication and client education:
                                  </strong>{" "}
                                  I explain technical concepts in an
                                  understandable way, fostering trust and
                                  building positive client relationships.
                                </li>
                                <li>
                                  <strong>Seamless case management:</strong> I
                                  meticulously track client case details, ensure
                                  swift resolution, and escalate complex issues
                                  to the appropriate team when necessary.
                                </li>
                                <li>
                                  <strong>
                                    Prioritizing client satisfaction:
                                  </strong>{" "}
                                  I I am a strong advocate for exceeding client
                                  expectations by delivering fast and effective
                                  solutions.
                                </li>
                              </ul>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                                Technologies and softwares used:
                              </h4>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Any Desk
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Remote Desktop Protocol
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Network Protocol
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </article>

                          <article className="resume-timeline-item position-relative pb-5">
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">
                                  System Admin
                                </h3>
                                <div className="resume-company-name ms-auto">
                                  <a
                                    href="https://spacetextiles.com/"
                                    target="_blank"
                                  >
                                    Space Textiles PVT LTD (The Chennai Silks)
                                  </a>
                                </div>
                              </div>

                              <div className="resume-position-time">
                                Feb. 2014 – April. 2021 Coimbatore, Tamil Nadu
                              </div>
                            </div>

                            <div className="resume-timeline-item-desc">
                              <p>
                                For over seven years, I excelled as a System
                                Administrator at Space Textiles, managing a
                                comprehensive range of IT functions:
                              </p>
                              <ul className="experience-list">
                                <li>
                                  <strong>
                                    Network and system maintenance:
                                  </strong>{" "}
                                  I maintained the health and performance of
                                  computer networks, including Microsoft and Mac
                                  operating systems, servers (LAN, WAN, VPN,
                                  VDI), and network security configurations.
                                </li>
                                <li>
                                  <strong>
                                    Hardware and software expertise:{" "}
                                  </strong>
                                  I adeptly managed computer hardware, installed
                                  and maintained software, troubleshooted system
                                  issues, and ensured efficient backup
                                  procedures.
                                </li>
                                <li>
                                  <strong>Network security champion:</strong>I
                                  vigilantly monitored network activity,
                                  configured network devices (routers,
                                  switches), and implemented robust security
                                  measures to safeguard company data.
                                </li>
                                <li>
                                  <strong>
                                    Technical support across the board:
                                  </strong>{" "}
                                  I provided comprehensive support, encompassing
                                  CCTV installation and maintenance, local and
                                  network printer management, mail client
                                  configuration, software application
                                  installation, and remote assistance to branch
                                  offices.
                                </li>
                                <li>
                                  <strong>
                                    VDI Implementation for Temporary Access:
                                  </strong>{" "}
                                  To address the unique challenge of pop-up
                                  retail events faced by Space Textiles, I
                                  spearheaded the implementation of a Virtual
                                  Desktop Infrastructure (VDI) solution. This
                                  innovative approach enabled temporary staff at
                                  pop-up locations to securely access the
                                  company's core systems, including billing
                                  software, from their personal devices. This
                                  ensured uninterrupted business continuity and
                                  prevented transaction delays during these
                                  critical sales periods.
                                </li>
                              </ul>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                                Technologies and softwares used:
                              </h4>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Putty
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Sophose
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Anydesk
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    VDI
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    VPN
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Remote Desktop Protocol
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Network Protocol
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    DMZ
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Ip Scanner
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </article>

                          <article className="resume-timeline-item position-relative pb-5">
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">
                                  Computer Hardware & Network Technician
                                </h3>
                                <div className="resume-company-name ms-auto">
                                  Sree Kannan Departmental Store PVT LTD
                                </div>
                              </div>

                              <div className="resume-position-time">
                                May. 2012 – Dec. 2013 Madurai, Tamil Nadu
                              </div>
                            </div>

                            <div className="resume-timeline-item-desc">
                              <p>
                                I honed my technical skills as a Computer
                                Hardware & Network Technician at Sree Kannan
                                Departmental, where I gained valuable experience
                                in:
                              </p>
                              <ul className="experience-list">
                                <li>
                                  <strong>User account management:</strong> I
                                  managed user accounts, permissions, and access
                                  rights, ensuring data security and system
                                  integrity.
                                </li>
                                <li>
                                  <strong>
                                    Network infrastructure foundation:
                                  </strong>{" "}
                                  I built and maintained a strong foundation for
                                  the company's network infrastructure,
                                  including configuration of essential services
                                  like DNS, DHCP, and Terminal Services (RDP
                                  server management).
                                </li>
                                <li>
                                  <strong>Operating system proficiency:</strong>{" "}
                                  I installed, configured, and troubleshooted a
                                  wide range of operating systems (Windows
                                  XP/Vista/7/8/10, Windows Server versions).
                                </li>
                                <li>
                                  <strong>
                                    Comprehensive hardware and software support:
                                  </strong>{" "}
                                  I assembled and disassembled computers,
                                  installed and maintained hardware components,
                                  configured internet connections, and offered
                                  software application support (MS Office,
                                  Acrobat Professional).
                                </li>
                                <li>
                                  <strong>Network troubleshooting:</strong> I
                                  effectively diagnosed and resolved internal
                                  network issues across a network of over 100
                                  systems, including managing network setups,
                                  cabling, and troubleshooting router/switch
                                  problems.
                                </li>
                                <li>
                                  <strong>
                                    Security and remote assistance:
                                  </strong>{" "}
                                  I implemented firewall protection and provided
                                  remote technical support to branch offices
                                  using various tools.
                                </li>
                              </ul>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                                Technologies used:
                              </h4>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Remote Desktop Protocol
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Network Protocol
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    DMZ
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    Ip Scanner
                                  </span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="badge rounded-pill text-bg-primary">
                                    MS Office
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </article>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-lg-3">
                    <section className="resume-section skills-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                        Skills &amp; Tools
                      </h2>
                      <div className="resume-section-content">
                        <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">
                            Frontend
                          </h4>
                          <ul className="list-unstyled mb-4">
                            <li className="mb-2">
                              <div className="resume-skill-name">React</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="85"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">
                                JavaScript
                              </div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "90%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="90"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">BOOTSTRAP</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="95"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">HTML</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "90%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="90"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">CSS</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "85%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="90"
                                ></div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <hr />
                        <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">
                            Backend
                          </h4>
                          <ul className="list-unstyled">
                            <li className="mb-2">
                              <div className="resume-skill-name">Node JS</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="90"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">
                                Express.js
                              </div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "85%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="75"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">MySql</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="95"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">MongoDB</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "85%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="90"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">Postman</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="90"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">Axios</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="90"
                                ></div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <hr />
                        <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">
                            Others
                          </h4>
                          <ul className="list-unstyled">
                            <li className="mb-2">
                              <div className="resume-skill-name">AWS</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="75"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">
                                Problem Solving
                              </div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="50"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">
                                Learning Agility
                              </div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "90%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="75"
                                ></div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">GIT</div>
                              <div className="progress resume-progress">
                                <div
                                  className="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "85%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="90"
                                ></div>
                              </div>
                            </li>
                          </ul>
                          <hr />
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                Code Review
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                Git
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                VS Code
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                SocketIO
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                nodemailer
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                fetch
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                redux
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                react-router-dom
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                meterial-ui
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge rounded-pill text-bg-primary">
                                npm
                              </span>
                            </li>
                          </ul>
                        </div>

                        <section className="resume-section reference-section mb-5">
                          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                            <i class="fa fa-trophy" aria-hidden="true"></i>{" "}
                            Certificate of Appreciation
                          </h2>
                          <div className="resume-section-content">
                            <ul className="list-unstyled resume-awards-list">
                              <li className="mb-2 pl-4 position-relative">
                                <div className="resume-award-name">
                                  Zen Full Stack Developer Program{" "}
                                  <a
                                    href="https://www.guvi.in/share-certificate/gw8N1Y3617C41147th"
                                    target="_blank"
                                  >
                                    {" "}
                                    <i
                                      class="fa fa-certificate"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    certificate
                                  </a>
                                </div>
                                <div className="resume-award-desc">
                                  from GUVI Geek Network Private Limited - April
                                  2024
                                </div>
                              </li>
                              <li className="mb-0 pl-4 position-relative">
                                <div className="resume-award-name">
                                  Introduction to Cloud Computing{" "}
                                  <a
                                    href="https://coursera.org/share/d5856974b71d5171112415762630479c"
                                    target="_blank"
                                  >
                                    {" "}
                                    <i
                                      class="fa fa-certificate"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    certificate
                                  </a>
                                </div>
                                <div className="resume-award-desc">
                                  an online non-credit course authorized by IBM
                                  and offered through Coursera - August, 2023
                                </div>
                              </li>
                              <li className="mb-0 pl-4 position-relative">
                                <div className="resume-award-name">
                                  Technical Support Fundamentals{" "}
                                  <a
                                    href="https://coursera.org/share/b5bd8e5709ef6478909eee14340ba3e9"
                                    target="_blank"
                                  >
                                    {" "}
                                    <i
                                      class="fa fa-certificate"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    certificate
                                  </a>
                                </div>
                                <div className="resume-award-desc">
                                  an online non-credit course authorized by
                                  Google and offered through Coursera - May,
                                  2023
                                </div>
                              </li>
                            </ul>
                          </div>
                        </section>

                        <section className="resume-section education-section mb-5">
                          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                            Education
                          </h2>
                          <div className="resume-section-content">
                            <ul className="list-unstyled">
                              <li className="mb-2">
                                <div className="resume-degree font-weight-bold">
                                  Bachelor of Computer Applications (BCA)
                                </div>
                                <div className="resume-degree-org">
                                  Manipal University, India
                                </div>
                                <div className="resume-degree-time">
                                  2023 - Present
                                </div>
                              </li>
                            </ul>
                          </div>
                        </section>

                        <section className="resume-section language-section mb-5">
                          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                            Language
                          </h2>
                          <div className="resume-section-content">
                            <ul className="list-unstyled resume-lang-list">
                              <li>
                                <span className="resume-lang-name font-weight-bold">
                                  Tamil
                                </span>{" "}
                                <small className="text-muted font-weight-normal">
                                  (Native)
                                </small>
                              </li>
                              <li className="mb-2">
                                <span className="resume-lang-name font-weight-bold">
                                  English
                                </span>{" "}
                                <small className="text-muted font-weight-normal">
                                  (Professional)
                                </small>
                              </li>
                            </ul>
                          </div>
                        </section>

                        <section className="resume-section interests-section mb-5">
                          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                            Interests
                          </h2>
                          <div className="resume-section-content">
                            <ul className="list-unstyled">
                              <li className="mb-1">Codeing</li>
                              <li className="mb-1">Music</li>
                              <li className="mb-1">Hangout</li>
                              <li className="mb-1">Movies</li>
                              <li className="mb-1">Explore new things</li>
                            </ul>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Wrapper>
    </div>
  );
}

export default Resume;
