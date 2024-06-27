import React, { useState } from "react";
import YouTube from "react-youtube";

export default function AboutMore() {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoClick = () => {
    setShowVideo(true);
  };
  return (
    <div>
      <div className="z-0 bg-green-50 mt-20 dark:bg-green-50 pt-10 md:pt-10 pb-4 md:pb-1 mb-4 md:mb-20 relative undefined">
        <div className="container px-4 lg:px-0 mx-auto">
          <h2 className="text-darkIndigo-900 dark:text-black text-center text-4xl font-heading font-semibold">
            About Us
          </h2>
          <div className="py-2 green">
            <div className="container px-4 lg:px-0 mx-auto">
              <ul className="relative z-10 flex flex-wrap text-sm items-center !justify-center gap-2">
                <li title="" className="">
                  <a
                    className="undefined text-success hover:text-primary green undefined normal-case"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li title="" className="text-secondary green undefined">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                  </svg>
                </li>
                <li title="" className="text-success text-green undefined">
                  About Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="-z-10 absolute top-full md:top-[65%] left-0 w-full rotate-180 text-green-50 dark:text-[#050D16]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="#f0fdf4"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative mt-24 z-0">
        <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative   ">
          <div className=" gap-4  grid grid-cols-1 md:!grid-cols-1 lg:!grid-cols-2 items-center !gap-10 md:grid-cols-2  lg:grid-cols-4 undefined">
            <div className="flex flex-1 w-full mt-4 lg:mt-0 lg:ml-4 items-center justify-center">
              <div className="rounded-xl w-[90%] h-[300px] my-6 relative">
                {!showVideo ? (
                  <div
                    className="relative rounded-xl overflow-hidden bg-green-300 dark:bg-green-500"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <img
                      alt="Video about myScheme"
                      src="/images/image4.jpg" // Replace with your image path
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="cursor-pointer w-16 h-16 rounded-full bg-green-500 flex items-center justify-center"
                        onClick={handleVideoClick}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-white"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative rounded-xl overflow-hidden"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <YouTube
                      videoId="SToefGBjhbM" // Replace with your actual videoId
                      className="absolute inset-0 w-full h-full"
                      opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                          autoplay: 1,
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className=" flex-1 text-left">
              <div className=" grid grid-cols-1 md:flex flex-wrap  gap-4  justify-between items-center !items-start mb-10">
                <div className="flex-none hidden md:flex">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-green-600 dark:text-green-600"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                </div>
                <div className=" flex-1 ">
                  <ul className=" grid grid-cols-1     gap-2 ">
                    <li title="" className="text-lg font-semibold">
                      <h2 className="text-2xl font-bold mb-2 dark:text-black-300">
                        Our Vision
                      </h2>
                      <p className="text-lg font-semibold dark:text-black-300 leading-snug text-justify">
                        Our vision is to make citizens life easier
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:flex flex-wrap  gap-4  justify-between !items-center !items-start">
                <div className="flex-none hidden md:flex">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-green-600 dark:text-green-600"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
                  </svg>
                </div>
                <div className=" flex-1 ">
                  <h2 className="text-2xl font-bold mb-2 dark:text-black-300">
                    Our Mission
                  </h2>
                  <ul className=" grid grid-cols-1     gap-2 ">
                    <li
                      title=""
                      className="text-lg font-semibold dark:text-black-300"
                    >
                      Our mission is to streamline the government – user
                      interface for government schemes and benefits.
                    </li>
                    <li
                      title=""
                      className="text-lg font-semibold dark:text-black-300"
                    >
                      Reduce time and effort required to find and avail a
                      government scheme
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-gradient-to-b from-green-100 to-white dark:to-dark mb-20">
        <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
          <div className="gap-4 mt-10 grid grid-cols-1 md:!grid-cols-1 lg:!grid-cols-2 items-center md:grid-cols-2 lg:grid-cols-4 undefined">
            <div className="flex-1">
              <p className="leading-snug text-justify mb-6 dark:text-black-100">
                myScheme is a National Platform that aims to offer one-stop
                search and discovery of the Government schemes.
              </p>
              <p className="leading-snug text-justify mb-6 dark:text-black-100">
                It provides an innovative, technology-based solution to discover
                scheme information based upon the eligibility of the citizen.
              </p>
              <p className="leading-snug text-justify mb-6 dark:text-black-100">
                The platform helps the citizen to find the right Government
                schemes for them. It also guides on how to apply for different
                Government schemes. Thus no need to visit multiple Government
                websites.
              </p>
              <p className="leading-snug text-justify mb-6 dark:text-black-100">
                myScheme platform is Developed, Managed, and Operated by
                National e-Governance Division (NeGD), with the Support of
                Ministry of Electronics and Information Technology (MeitY),
                Department of Administrative Reforms and Public Grievance
                (DARPG) and in partnership with other Central and State
                Ministries/Departments.
              </p>
            </div>
            <div className="hidden lg:flex">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27740%27%20height=%27500%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  />
                </span>
                <img
                  alt="Hero Image"
                  title="Hero Image"
                  src="https://cdn.myscheme.in/images/about/about-text.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="border-0"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0px",
                    height: "0px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  srcSet="https://cdn.myscheme.in/images/about/about-text.svg 1x, https://cdn.myscheme.in/images/about/about-text.svg 2x"
                />

                <noscript></noscript>
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
          <div className="gap-4 mt-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 items-start md:grid-cols-2 lg:grid-cols-3">
            <div className="flex-1">
              <div className="text-center">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27740%27%20height=%27400%27/%3e"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                    />
                  </span>
                  <img
                    alt="Eligibility Check"
                    title="Eligibility Check"
                    src="https://cdn.myscheme.in/images/about/eligibilityCheck.svg"
                    decoding="async"
                    className="border-0"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                    srcSet="https://cdn.myscheme.in/images/about/eligibilityCheck.svg 1x, https://cdn.myscheme.in/images/about/eligibilityCheck.svg 2x"
                  />
                  <noscript></noscript>
                </span>
                <h3 className="text-2xl mt-4 mb-3 font-bold text-darkIndigo-900 dark:text-black">
                  Eligibility Check
                </h3>
                <p className="dark:text-black-100">
                  You can check your eligibility for schemes using different criteria and personal attribute
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-center">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27740%27%20height=%27400%27/%3e"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                    />
                  </span>
                  <img
                    alt="Scheme Finder"
                    title="Scheme Finder"
                    src="https://cdn.myscheme.in/images/about/filter.svg"
                    decoding="async"
                    className="border-0"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                    srcSet="https://cdn.myscheme.in/images/about/filter.svg 1x, https://cdn.myscheme.in/images/about/filter.svg 2x"
                  />
                  <noscript></noscript>
                </span>
                <h3 className="text-2xl mt-4 mb-3 font-bold text-darkIndigo-900 dark:text-black">
                  Scheme Finder
                </h3>
                <p className="dark:text-black-100">
                  Fast and easy searching with filter based drill downs for various Government Schemes
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-center">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27740%27%20height=%27400%27/%3e"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                    />
                  </span>
                  <img
                    alt="Scheme in detail"
                    title="Scheme in detail"
                    src="https://cdn.myscheme.in/images/about/search.svg"
                    decoding="async"
                    className="border-0"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                    srcSet="https://cdn.myscheme.in/images/about/search.svg 1x, https://cdn.myscheme.in/images/about/search.svg 2x"
                  />
                  <noscript></noscript>
                </span>
                <h3 className="text-2xl mt-4 mb-3 font-bold text-darkIndigo-900 dark:text-black">
                  Scheme in detail
                </h3>
                <p className="dark:text-black-100">
                  Deep dive into dedicated scheme pages for fine grained scheme details before you apply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
