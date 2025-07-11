import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";
import { FaUser, FaPen, FaRegComment } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8s9ri6u",
        "template_cpbscii",
        form.current,
        "NZm9mLWa3Sw7PPixx"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#0d0d15]"
    >
      <ToastContainer />

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          Let’s build something great together.
        </p>
      </div>

      <div className="w-full max-w-xl bg-[#121827] border border-white/10 rounded-xl p-8">
        <h3 className="text-xl font-medium text-white mb-6 text-center tracking-tight">
          Send a Message 📬
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          {/* Email */}
          <div className="relative">
            <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="pl-12 pr-4 bg-[#1a1f2e] text-white w-full py-3 rounded-md border border-white/10 focus:outline-none focus:ring-[1.5px] focus:ring-[#888]"
            />
          </div>

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="pl-12 pr-4 bg-[#1a1f2e] text-white w-full py-3 rounded-md border border-white/10 focus:outline-none focus:ring-[1.5px] focus:ring-[#888]"
            />
          </div>

          {/* Subject */}
          <div className="relative">
            <FaPen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="pl-12 pr-4 bg-[#1a1f2e] text-white w-full py-3 rounded-md border border-white/10 focus:outline-none focus:ring-[1.5px] focus:ring-[#888]"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaRegComment className="absolute left-4 top-4 text-gray-400 text-sm" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="pl-12 pt-3 pr-4 bg-[#1a1f2e] text-white w-full py-3 rounded-md border border-white/10 focus:outline-none focus:ring-[1.5px] focus:ring-[#888] resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#2e7dff] hover:bg-[#266ce0] text-white py-3 rounded-md font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
