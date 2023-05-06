import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactForm = () => {
  return (
    <>
      <div className="antialiased bg-gray-100">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-black w-full max-w-4xl p-8 rounded-xl shadow-lg text-white sm:p-12 overflow-hidden">
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
              <div className="flex space-x-4 text-lg">
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
            </div>
            <div>
                <div className="relative">
                    <div className="absolute z-0 w-40 h-40 bg-white rounded-full -right-24 -top-20"></div>
                    <div className="absolute z-0 w-40 h-40 bg-white rounded-full -left-28 -bottom-16"></div>
                
               
              <div className="bg-white rounded-xl p-8 text-gray-600 md:w-full">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="" className="text-sm ">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm ">
                      Email
                    </label>

                    <input
                      type="text"
                      placeholder="Your Email"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm ">
                      Your Message
                    </label>

                    <textarea
                      type="text"
                      placeholder="Type your message here!"
                      rows='4'
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2  outline-none focus:ring-2 focus:ring-gray-800"
                    />
                  </div>
                  <button className="inline-flex self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm ">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div></div>
      </div>
    </>
  );
};

export default ContactForm;
