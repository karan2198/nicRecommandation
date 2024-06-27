import React from 'react';

export default function Footer() {
  return (
    <div style={{ backgroundColor: 'rgb(47 43 69)' }}>
      <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative z-0">
        <div className="gap-4 grid grid-cols-1 py-12 !items-start !gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex-1 text-left">
            <div className="flex gap-2 align-items-center">
              <p className="text-white text-white/80 hover:text-white">
                <span>©2024</span>
              </p>
              <div className="relative h-6 w-36 lg:h-8 lg:w-48">
                <a className="block normal-case" href="/">
                  <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', position: 'absolute', inset: 0 }}>
                    <img
                      alt="myScheme"
                      title="myScheme"
                      src="https://cdn.myscheme.in/images/logos/myscheme-logo-white.svg"
                      className="border-0"
                      style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', display: 'block', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                      sizes="100vw"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center mt-4">
              <span className="text-sm text-white mr-2">Powered by</span>
              <span style={{ boxSizing: 'border-box', display: 'inline-block', position: 'relative', maxWidth: '100%' }}>
                <span style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%2740%27/%3e"
                    style={{ display: 'block', maxWidth: '100%' }}
                  />
                </span>
                <img
                  alt="Digital India"
                  src="https://cdn.myscheme.in/images/logos/digital-india-white.svg"
                  className="border-0"
                  style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', display: 'block', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                  sizes="100vw"
                />
              </span>
            </div>
            <div className="flex flex-col text-white text-white/80 text-sm hover:text-white mt-1 mb-0">
              <span className="cursor-pointer">Digital India Corporation (DIC)</span>
              <span className="cursor-pointer">Ministry of Electronics &amp; IT (MeitY)</span>
              <span className="cursor-pointer">Government of India<sup>®</sup></span>
            </div>
            <div className="flex items-center flex-row mt-2 gap-3 sm:gap-2">
              <SocialIcon href="https://www.linkedin.com" iconPath="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" viewBox="0 0 448 512" />
              <SocialIcon href="https://www.facebook.com" iconPath="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" viewBox="0 0 24 24" />
              <SocialIcon href="https://www.twitter.com" iconPath="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" viewBox="0 0 448 512" />
              <SocialIcon href="https://www.instagram.com" iconPath="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 186.7c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 27-27 27s-27-12-27-27 12-27 27-27 27 12 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.3-92.8-26.5-26.5-57.1-34.6-92.8-36.3-36.5-2.1-145.9-2.1-182.4 0-35.7 1.7-67.3 9.9-92.8 36.3-26.5 26.5-34.6 57.1-36.3 92.8-2.1 36.5-2.1 145.9 0 182.4 1.7 35.7 9.9 67.3 36.3 92.8 26.5 26.5 57.1 34.6 92.8 36.3 36.5 2.1 145.9 2.1 182.4 0 35.7-1.7 67.3-9.9 92.8-36.3 26.5-26.5 34.6-57.1 36.3-92.8 2.1-36.5 2.1-145.9 0-182.4zM398.8 388.8c-7.8 19.6-22.9 34.8-42.4 42.4-29.3 11.6-98.9 8.9-131.3 8.9s-102 2.6-131.3-8.9c-19.6-7.8-34.8-22.9-42.4-42.4-11.6-29.3-8.9-98.9-8.9-131.3s-2.6-102 8.9-131.3c7.8-19.6 22.9-34.8 42.4-42.4 29.3-11.6 98.9-8.9 131.3-8.9s102-2.6 131.3 8.9c19.6 7.8 34.8 22.9 42.4 42.4 11.6 29.3 8.9 98.9 8.9 131.3s2.7 102-8.9 131.3z" viewBox="0 0 448 512" />
            </div>
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-white text-2xl font-heading font-semibold mb-6">Quick Links</h2>
            <ul className="grid grid-cols-1 text-white items-center !gap-4 gap-2">
              <FooterLink href="/about" title="About Us" />
              <FooterLink href="/contact" title="Contact Us" />
              <FooterLink href="/screen-reader" title="Screen Reader" />
              <FooterLink href="/accessibility-statement" title="Accessibility Statement" />
              <FooterLink href="/faqs" title="Frequently Asked Questions" />
              <FooterLink href="/disclaimer" title="Disclaimer" />
              <FooterLink href="/terms-conditions" title="Terms & Conditions" />
            </ul>
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-white text-2xl font-heading font-semibold mb-6">Useful Links</h2>
            <ul className="grid grid-cols-1 text-white items-center !grid !grid-cols-3 !gap-1 gap-2">
              <UsefulLink title="Digital India" src="/images/image10.png" />
              <UsefulLink title="Digilocker" src="/images/image9.png" />
              <UsefulLink title="Umang" src="/images/image5.png" />
              <UsefulLink title="National Portal Of India" src="/images/image7.png" />
              <UsefulLink title="myGov" src="/images/image6.png" />
              <UsefulLink title="Open Government Data" src="/images/image11.png" />
              <UsefulLink title="Integrated Government Online Directory" src="/images/image8.png" />
            </ul>
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-white text-2xl font-heading font-semibold mb-6">Get in touch</h2>
            <p className="text-white/80 text-sm leading-relaxed flex gap-1 items-start">
              <span>4th Floor, NeGD, Electronics Niketan, 6 CGO Complex, Lodhi Road, New Delhi - 110003, India</span>
            </p>
            <div className="mb-4">
              <p className="text-white/80 hover:text-white underline text-sm font-normal mb-0">support-myscheme[at]digitalindia[dot]gov[dot]in</p>
              <p className="text-white/80 text-sm font-normal my-4">(011) 24303714</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, iconPath, viewBox }) {
  return (
    <div className="cursor-pointer h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-white">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox={viewBox} height="15" width="15" xmlns="http://www.w3.org/2000/svg">
          <path d={iconPath}></path>
        </svg>
      </a>
    </div>
  );
}

function FooterLink({ href, title }) {
  return (
    <li className="flex hover:pl-1 duration-500 gap-2 opacity-80 hover:opacity-100 transition-all ease-in-out text-sm">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
      <a href={href} className="text-white">{title}</a>
    </li>
  );
}

function UsefulLink({ title, src }) {
  return (
    <li className="bg-white dark:bg-dark p-1 rounded-md duration-500 border-3 border-solid border-darkIndigo-900 dark:border-dark hover:border-gray-500 transition-all ease-in-out text-sm cursor-pointer">
      <div className='relative w-full h-10'>
        <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', inset: 0 }}>
          <img src={src} alt={title} className="w-full h-full" />
        </span>
      </div>
    </li>
  );
}
