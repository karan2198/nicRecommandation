import React, { useState } from 'react';
import YouTube from 'react-youtube';

export default function About() {
    const [showVideo, setShowVideo] = useState(false);
    const handleVideoClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="container mx-auto mt-[100px] mb-[100px] px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-1 mr-2">
                    <div className="text-left">
                        <h3 className="text-3xl font-heading font-bold text-green-600 mb-6">About</h3>
                        <p className="text-slate-600 dark:text-black-100 mb-6 2xl:mb-12 text-lg leading-relaxed">
                            myScheme is a National Platform that aims to offer one-stop search and discovery of the Government schemes.
                        </p>
                        <p className="text-slate-600 dark:text-black-100 text-lg leading-relaxed">
                            It provides an innovative, technology-based solution to discover scheme information based upon the eligibility of the citizen.
                        </p>
                        <p className="text-slate-600 dark:text-black-100 text-lg leading-relaxed">
                            The platform helps the citizen to find the right Government schemes for them. It also guides on how to apply for different Government schemes. Thus no need to visit multiple Government websites.
                        </p>
                        <a href="/about" className="block mt-8">
                            <button
                                type="button"
                                aria-label="View More"
                                className="flex items-center px-5 py-2.5 text-base rounded-md border border-solid bg-transparent text-green-600 hover:text-green-700 border-success hover:border-green-700 transition ease-in-out font-medium leading-none mt-6"
                                title="View More"
                            >
                                View More
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="ml-2 inline-block w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 w-full mt-4 lg:mt-0 lg:ml-4 items-center justify-center">
                    <div className="rounded-xl w-[90%] h-[300px] my-6 relative">
                        {!showVideo ? (
                            <div className="relative rounded-xl overflow-hidden bg-green-300 dark:bg-green-500" style={{ paddingBottom: '56.25%' }}>
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
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="relative rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                                <YouTube
                                    videoId="SToefGBjhbM" // Replace with your actual videoId
                                    className="absolute inset-0 w-full h-full"
                                    opts={{
                                        width: '100%',
                                        height: '100%',
                                        playerVars: {
                                            autoplay: 1,
                                        },
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
