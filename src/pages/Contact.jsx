import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github.css";

function Contact() {
  hljs.registerLanguage("javascript", javascript);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const [messageInput, setMessageInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMessageInput = (event) => {
    setMessageInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div>
      <Wrapper>
        <div className="contact-container row p-5 m-5">
          <h2 className="text-center">Send a Message</h2>
          <div className="col-md-6">
            <form action="" className="cotactForm">
              <div className="form-floating mb-3">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="John"
                  onChange={handleMessageInput}
                  value={messageInput.name}
                  required
                />
                <label htmlFor="nameInput">Name</label>
              </div>
              <div className="form-floating">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                  onChange={handleMessageInput}
                  value={messageInput.email}
                  required
                />
                <label htmlFor="emailInput">Email</label>
              </div>
              <div className="form-floating mt-2">
                <textarea
                  name="message"
                  style={{ height: 150 }}
                  className="form-control"
                  placeholder="Leave a message here"
                  id="messageInput"
                  onChange={handleMessageInput}
                  value={messageInput.message}
                  required
                ></textarea>
                <label htmlFor="messageInput">Message</label>
              </div>
              <p className="text-center p-3 d-flex justify-content-between">
                <button
                  type="reset"
                  className="btn btn-secondary"
                  onClick={() =>
                    setMessageInput({
                      name: "",
                      email: "",
                      message: "",
                    })
                  }
                >
                  Clear
                </button>
                <button type="submit" className="btn btn-info">
                  Send Message
                </button>
              </p>
            </form>
            <div className="text-center p-0 m-0"></div>
          </div>
          <div className="col-md-6">
            <div className="monospace hidden max-w-[30vw] text-gray-100 md:block conatctCode">
              <p className="flex items-center">
                <span className="ms-4 text-gray-100">1</span>
                <span className="undefined text-[#C98BDF] ">const</span>
                <span className="text-[#5565E8] variable">button</span>
                <span className="px-2 text-[#C98BDF]">=</span>
                <span className=" text-[#5565E8]">document.getElementId</span>(
                <span className="text-yellow undefined">'sendBtn'</span>);
              </p>
              <p>
                <span className="ms-4 text-gray-100">2</span>
              </p>
              <p>
                <span className="ms-4 text-gray-100">3</span>
                <span className="undefined text-[#C98BDF] ">const</span>
                <span className=" text-[#5565E8] variable">messageObj</span>
                <span className="px-2 text-[#C98BDF]">=</span>
                &#123;
              </p>
              <p className="">
                <span className="ms-4 text-gray-100">4</span>
                <span className="ms-5 text-[#5565E8]">
                  &#160; &#160; &#160; name &#160;
                </span>
                :
                <span className="text-yellow me-2">
                  &#160; '{messageInput.name}'
                </span>
                ,
              </p>
              <p className="">
                <span className="ms-4 text-gray-100">5</span>
                <span className="ms-5 text-[#5565E8]">
                  &#160; &#160; &#160; email &#160;
                </span>
                :
                <span className="text-yellow me-2">
                  &#160; '{messageInput.email}'
                </span>
                ,
              </p>
              <p className="">
                <span className="ms-4 text-gray-100">6</span>
                <code>
                  <span className="ms-5 text-[#5565E8]">
                    &#160; &#160; &#160; message &#160;
                  </span>
                  :
                  <span className="text-yellow me-2">
                    &#160; '{messageInput.message}'
                  </span>
                  ,
                </code>
              </p>

              <p>
                <span className="ms-4 me-5 text-gray-100">7</span>
                &#160; &#160; &#125;
              </p>
              <p>
                <span className="ms-4 text-gray-100">8</span>
              </p>
              <p>
                <span className="ms-4 text-gray-100">9</span>
                <span className="ms-3 text-[#5565E8]">
                  button.addEventListener
                </span>
                (<span className="text-yellow ">'click'</span>, ()
                <span className="undefined text-[#C98BDF]">
                  =&gt;{" "}
                </span> &#123; <br />
                <span className="ms-4 text-gray-100">10</span>
                <span className="ms-5 text-[#5565E8]">
                  &#160; &#160; &#160; &#160;form.send
                </span>
                (<span className=" text-[#5565E8]">message</span>);
              </p>
              <p>
                <span className="ms-4 text-gray-100">11</span>&#160; &#160;
                &#160; &#160; &#160; &#160; &#160;);&#125;
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Contact;
