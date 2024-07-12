import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [hasShadow, setHasShadow] = useState(false);

  const handleSearchBarClick = () => {
    navigate('/recommendations');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`fixed top-0 z-50 w-full navbar-expand-lg p-0 bg-white transition-shadow ${hasShadow ? 'shadow-md' : 'shadow-none'}`}>
        <div className="lg:flex flex-wrap items-center justify-between lg:px-2 py-2.5">
          <div className="container px-4 lg:px-0 mx-auto relative flex justify-between items-center">
            <div className="flex items-center gap-2"> {/* Reduced gap */}
              <a className="relative" href="/" style={{ height: '2.5rem' }}>
                <img
                  srcSet="https://cdn.myscheme.in/images/logos/emblem-black.svg 640w, https://cdn.myscheme.in/images/logos/emblem-black.svg 750w, https://cdn.myscheme.in/images/logos/emblem-black.svg 828w, https://cdn.myscheme.in/images/logos/emblem-black.svg 1080w, https://cdn.myscheme.in/images/logos/emblem-black.svg 1200w, https://cdn.myscheme.in/images/logos/emblem-black.svg 1920w, https://cdn.myscheme.in/images/logos/emblem-black.svg 2048w, https://cdn.myscheme.in/images/logos/emblem-black.svg 3840w"
                  alt="Ministry of Electronics and Information Technology"
                  title="Ministry of Electronics and Information Technology"
                  sizes="100vw"
                  src="https://cdn.myscheme.in/images/logos/emblem-black.svg"
                  decoding="async"
                  className="border-0"
                  style={{ height: '3.5rem', objectFit: 'contain' }}
                />
              </a>
              <h1 className="relative">
                <button aria-label="Action Button" className="px-1 py-2.5 text-base rounded-md border-0 bg-transparent p-0 text-secondary hover:text-primary transition ease-in-out font-medium leading-none" style={{ height: '2.5rem' }}>
                  <img
                    // srcSet="https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 640w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 750w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 828w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 1080w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 1200w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 1920w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 2048w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 3840w"
                    alt="myScheme"
                    title="myScheme"
                    sizes="100vw"
                    src="/images/Nic_logo3-01.svg"
                    decoding="async"
                    className="border-0 mx-auto"
                    style={{ height: '3.5rem', width: 'auto', objectFit: 'contain' }}
                  />
                </button>
              </h1>
              <h1 className="relative">
                <button aria-label="Action Button" className="px-1 py-2.5 text-base rounded-md border-0 bg-transparent p-0 text-secondary hover:text-primary transition ease-in-out font-medium leading-none" style={{ height: '2.5rem' }}>
                  <img
                    srcSet="https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 640w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 750w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 828w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 1080w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 1200w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 1920w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 2048w, https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg 3840w"
                    alt="myScheme"
                    title="myScheme"
                    sizes="100vw"
                    src="https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg"
                    decoding="async"
                    className="border-0 mx-auto"
                    style={{ height:"3.5rem", objectFit: 'contain', paddingTop:'6px' }}
                  />
                </button>
              </h1>
            </div>
            <div className="flex items-center gap-3 w-full justify-end">
              <form className="group hidden md:flex items-center focus:outline-none w-full max-w-xl">
                <div className="relative flex w-full items-center">
                  <input
                    type="text"
                    className="h-11 cursor-text text-gray-300 px-3 py-2 border-1 border-solid border-gray-300 placeholder-gray-300 font-mono bg-white dark:bg-dark rounded-lg outline-none focus:outline-none focus:shadow-outline w-full pr-10 group-hover:border-teal-800 focus:border-teal-800 focus:ring-none hover:border-teal-800 hover:outline-none focus:shadow-none"
                    placeholder="Enter scheme name to search..."
                    onClick={handleSearchBarClick}
                  />
                  <button type="button" aria-label="Search" className="absolute z-10 right-2 w-8 h-8 text-secondary hover:text-primary">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
