import React, { useState } from 'react';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white pt-10 pb-20">
      <div className="container mx-auto mt-[100px] px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
        <div className="grid grid-cols-1 md:flex flex-wrap gap-4 justify-between items-center !block lg:!flex !gap-10 lg:!gap-20">
          <div className="hidden lg:block z-0 relative before:content[*] before:h-3/4 before:w-3/4 before:absolute before:-top-10 before:-left-5 lg:before:-left-10 before:bg-green-shape before:-z-1">
            <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
              <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27480%27%20height=%27480%27/%3e"
                  style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }}
                />
              </span>
              <img
                srcSet="https://cdn.myscheme.in/images/questions.svg 1x, https://cdn.myscheme.in/images/questions.svg 2x"
                alt="Questions Image"
                title="Questions Image"
                src="https://cdn.myscheme.in/images/questions.svg"
                decoding="async"
                data-nimg="intrinsic"
                className="border-0 object-contain"
                style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
              />
            </span>
          </div>
          <div className="flex-1">
            <div className="mb-10">
              <p className="text-xl text-darkIndigo-300 dark:text-black-300 text-left mb-2">Frequently Asked Questions</p>
              <h2 className="text-3xl sm:text-4xl text-left font-extrabold dark:text-black leading-snug">
                Checkout our knowledge base for some of your answers!
              </h2>
            </div>
            {faqItems.map((faq, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <div className="cursor-pointer" onClick={() => toggleFaq(index)}>
                  <div className="flex flex-row items-center justify-between text-left">
                    <p className="font-bold dark:text-black w-11/12 text-left">{faq.question}</p>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={`ml-1 dark:text-black transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                {openIndex === index && (
                  <div className="rounded-b text-left dark:text-black-300 mt-3">
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            <a className="block normal-case" href="/faqs">
              <button
                aria-label="View More"
                className="flex items-center px-5 py-2.5 text-base rounded-md border border-solid !bg-transparent text-green-600 hover:text-green-700 border-success hover:border-primary transition ease-in-out font-medium leading-none mt-6"
                title=""
              >
                View More
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="ml-2 inline-block w-6 h-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqItems = [
  {
    question: "What is myScheme?",
    answer: "myScheme is an e-Marketplace for Govt. schemes and services. Using myScheme you can find various government schemes, check your eligibility, and apply for the schemes.",
  },
  {
    question: "How myScheme will help common citizens?",
    answer: "myScheme will reduce the time and effort of citizens in searching for appropriate government schemes. The easy user interface of myScheme helps common people a lot in discovering and applying for schemes.",
  },
  {
    question: "Can I apply for the schemes through myScheme?",
    answer: "For now, the platform shall direct you to the application page of the scheme of your choice. It is envisaged that in the upcoming phases, myScheme shall have the feature to apply for schemes/services from within the platform/app.",
  },
  {
    question: "How does myScheme work? How do I check for my eligibility through myScheme?",
    answer: "myScheme offers a convenient three-step process for the citizens to discover the government schemes for which they are eligible: Step 1 - The user enters his/her attributes such as demographic, income, social details, etc. Step 2 - myScheme finds the relevant schemes from hundreds of schemes for the user. Step 3 - The user can select from the list of eligible schemes and get more information from the dedicated scheme page with detailed knowledge, FAQs, and application process and traverse to the application URL to apply.",
  },
  {
    question: "What all information about a particular scheme can I find on myScheme?",
    answer: "myScheme provides details on the eligibility criteria, application process, and benefits being offered under that scheme. myScheme also answers the Frequently Asked Questions (FAQs) about the scheme.",
  },
];
