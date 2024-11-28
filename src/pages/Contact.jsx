import { useEffect, useState } from "react";

import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github.css";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

/* const sendMessageApi =
  "https://pjj68j7q9b.execute-api.ap-south-1.amazonaws.com/production/message/sendMessage";
 */
const sendMessageApi =
  "https://loordhu-jeyakumar-portfolio-be.onrender.com/message/sendMessage";

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

  const handleSendMessage = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(sendMessageApi, messageInput, {
        withCredentials: false,
      });
      if (response.status === 201) {
        setMessageInput({
          name: "",
          email: "",
          message: "",
        });
        toast.success(response.data.message);
      }

      console.log(response);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <motion.div
      className="contact-container  p-5 m-5 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-center text-light-primaryText dark:text-dark-primaryText"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Send a Message
      </motion.h2>
      <div className="flex justify-around flex-wrap items-center  ">
        <motion.div
          className="conatct-form-box"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form className="cotactForm" onSubmit={handleSendMessage}>
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
            <p className="text-center p-3 d-flex justify-content-between gap-4">
              <motion.button
                type="reset"
                className="btn btn-secondary"
                onClick={() =>
                  setMessageInput({
                    name: "",
                    email: "",
                    message: "",
                  })
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Clear
              </motion.button>
              <motion.button
                type="submit"
                className="p-2 rounded-md shadow bg-light-accent dark:bg-dark-accent text-dark-primaryText font-medium dark:text-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Send Message
              </motion.button>
            </p>
          </form>
          <div className="text-center p-0 m-0"></div>
        </motion.div>
        <motion.div
          className="code-block-box shadow bg-light-background dark:bg-dark-background "
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="monospace text-gray-500 dark:text-gray-100  conatctCode  overflow-auto">
            <p className="flex items-center text-wrap">
              <span className="ms-4 text-gray-500 dark:text-gray-100">1</span>
              <span className="undefined text-[#C98BDF] ">const</span>
              <span className="text-[#5565E8] variable">button</span>
              <span className="px-2 text-[#C98BDF]">=</span>
              <span className=" text-[#5565E8]">document.getElementId</span>(
              <span className="text-yellow undefined">{`"sendBtn"`}</span>);
            </p>
            <p>
              <span className="ms-4 text-gray-500 dark:text-gray-100">2</span>
            </p>
            <p>
              <span className="ms-4 text-gray-500 dark:text-gray-100">3</span>
              <span className="undefined text-[#C98BDF] ">const</span>
              <span className=" text-[#5565E8] variable">messageObj</span>
              <span className="px-2 text-[#C98BDF]">=</span>
              &#123;
            </p>
            <p className="">
              <span className="ms-4 text-gray-500 dark:text-gray-100">4</span>
              <span className="ms-5 text-[#5565E8]">
                &#160; &#160; &#160; name &#160;
              </span>
              :
              <span className="text-yellow me-2">
                {` "${messageInput.name}"`}
              </span>
              ,
            </p>
            <p className="">
              <span className="ms-4 text-gray-500 dark:text-gray-100">5</span>
              <span className="ms-5 text-[#5565E8]">
                &#160; &#160; &#160; email &#160;
              </span>
              :
              <span className="text-yellow me-2">
                {` "${messageInput.email}"`}
              </span>
              ,
            </p>
            <p className="">
              <span className="ms-4 text-gray-500 dark:text-gray-100">6</span>
              <code>
                <span className="ms-5 text-[#5565E8]">
                  &#160; &#160; &#160; message &#160;
                </span>
                :
                <span className="text-yellow me-2">
                  {` "${messageInput.message}"`}
                </span>
                ,
              </code>
            </p>

            <p>
              <span className="ms-4 me-5 text-gray-500 dark:text-gray-100">
                7
              </span>
              &#160; &#160; &#125;
            </p>
            <p>
              <span className="ms-4 text-gray-500 dark:text-gray-100">8</span>
            </p>
            <p>
              <span className="ms-4 text-gray-500 dark:text-gray-100">9</span>
              <span className="ms-3 text-[#5565E8]">
                button.addEventListener
              </span>
              (<span className="text-yellow ">{`"click"`}</span>, ()
              <span className="undefined text-[#C98BDF]">
                =&gt;{" "}
              </span> &#123; <br />
              <span className="ms-4 text-gray-500 dark:text-gray-100">10</span>
              <span className="ms-5 text-[#5565E8]">
                &#160; &#160; &#160; &#160;form.send
              </span>
              (<span className=" text-[#5565E8]">message</span>);
            </p>
            <p>
              <span className="ms-4 text-gray-500 dark:text-gray-100">11</span>
              &#160; &#160; &#160; &#160; &#160; &#160; &#160;);&#125;
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
