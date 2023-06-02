import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const ContactForm = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("maps");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="antialiased  bg-no-repeat bg-cover ">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-gradient-to-r from-[#434343] to-[#000000] bg-opacity-70 w-full max-w-4xl p-8 rounded-xl  text-white sm:p-12 overflow-hidden shadow-xl shadow-zinc-700">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p className="pt-2 text-white text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur,
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  {/* <img className="bg-green" src={CallIcon} alt="" />
                   */}
                  <CallIcon />
                  <span>9817764473</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  {/* <img className="bg-green" src={CallIcon} alt="" /> */}
                  <MailOutlineIcon />
                  <span>mohitom2002@gmail.com</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  {/* <img className="bg-green" src={CallIcon} alt="" /> */}
                  <HomeIcon />
                  <span>VIT Bhopal </span>
                </div>
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
              </div>
              <div className="inline-flexspace-x-2 items-center">
                <button
                  onClick={handleClickScroll}
                  className="bg-white text-black rounded-lg shadow-lg px-6 py-4 align-middle font-bold text-xl hover:bg-gradient-to-r from-[#434343] to-[#000000] hover:text-white"
                >
                  Find Us <ArrowForwardIcon className="hover:rotate-90" />
                </button>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="bg-white bg-opacity-50 rounded-xl p-8 text-gray-800 md:w-full">
                  <form
                    action="https://formspree.io/f/mpzebnra"
                    method="POST"
                    className="flex flex-col space-y-6"
                  >
                    <div>
                      <label
                        htmlFor=""
                        className="font-bold font-serif text-3xl"
                      >
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="username"
                        placeholder="Your Name"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-800 mt-4"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="font-bold font-serif text-3xl"
                      >
                        Email
                      </label>

                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-800"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="font-bold font-serif text-3xl "
                      >
                        Your Message
                      </label>

                      <textarea
                        type="text"
                        name="message"
                        placeholder="Type your message here!"
                        rows="4"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2  outline-none focus:ring-2 focus:ring-gray-800"
                      />
                    </div>
                    <button className=" bg-black text-white font-bold rounded-lg px-8 py-4 uppercase text-sm align-middle items-center justify-center hover:bg-white hover:text-black">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-8 rounded-xl shadow-lg "
          id="maps"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7341.141332915838!2d76.86034987329806!3d23.07619663378666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683455187108!5m2!1sen!2sin"
            width="90%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
