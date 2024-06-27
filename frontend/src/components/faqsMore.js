import React, { useState } from 'react'

export default function FaqsMore() {
    const [expanded, setExpanded] = useState(null);

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div>
            <div className="z-0 bg-green-50 mt-20 dark:bg-green-50 pt-10 md:pt-10 pb-4 md:pb-1 mb-4 md:mb-20 relative undefined">
                <div className="container px-4 lg:px-0 mx-auto">
                    <h2 className="text-darkIndigo-900 dark:text-black text-center text-4xl font-heading font-semibold">
                        Frequently Asked Questions
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
                                    Frequently Asked Questions
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
            <div className="container mx-auto px-8 lg:px-0 2xl:w-3/5 lg:w-5/6 relative">
                <div className="gap-4 pt-20 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="hidden lg:block">
                        <span className="inline-block overflow-hidden relative max-w-full">
                            <span className="block pt-20 max-w-full">
                                <img
                                    alt="Questions Image"
                                    src="https://cdn.myscheme.in/images/questions.svg"
                                    srcSet="https://cdn.myscheme.in/images/questions.svg 1x, https://cdn.myscheme.in/images/questions.svg 2x"
                                    className="object-contain"
                                />
                            </span>
                        </span>
                    </div>
                    <div className="col-span-2">
                        {faqs.map((faq, index) => (
                            <div className="py-4 first:pt-0 last:pb-0" key={index}>
                                <div className="cursor-pointer" onClick={() => handleToggle(index)}>
                                    <div className="flex flex-row items-center justify-between">
                                        <p className="font-bold text-left dark:text-black w-11/12">{faq.question}</p>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                            className="ml-1 dark:text-black"
                                            height="25"
                                            width="25"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d={
                                                    expanded === index
                                                        ? "M5.293 12.707a1 1 0 011.414 0L10 8.414l3.293 4.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z"
                                                        : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                }
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                {expanded === index && (
                                    <div className="rounded-b dark:text-black-300 mt-3">
                                        <p className="text-base text-left leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


const faqs = [
    {
        question: "What is myScheme?",
        answer: "myScheme is an e-Marketplace for Govt. schemes and services. Using myScheme you can find various government schemes, check your eligibility, and apply for the schemes."
    },
    {
        question: "How myScheme will help common citizens?",
        answer: "myScheme will reduce the time and effort of citizens in searching for appropriate government schemes.The easy user interface of myScheme helps common people a lot in discovering and applying for schemes."
    },
    {
        question: "Can I apply for the schemes through myScheme?",
        answer: "For now, the platform shall direct you to the application page of the scheme of your choice. It is envisaged that in the upcoming phases, myScheme shall have the feature to apply for schemes / services from within the platform/ app."
    },
    {
        question: "How does myScheme work? How do I check for my eligibility through myScheme?",
        answer: "myScheme offers a convenient three-step process for the citizens to discover the government schemes for which they are eligible: Step 1 - The user enters his / her attributes such as demographic, income, social details, etc. Step 2 - myScheme finds the relevant schemes from hundreds of schemes for the user. Step 3 - The user can select from the list of eligible schemes and get more information from the dedicated scheme page with detailed knowledge, FAQs, and application process and traverse to the application URL to apply."
    },
    {
        question: "What all information about a particular scheme can I find on myScheme?",
        answer: "myScheme provides details on the eligibility criteria, application process, and benefits being offered under that scheme. myScheme also answers the Frequently Asked Questions(FAQs) about the scheme."
    },
    {
        question: "What are the broad sectors across which the schemes are available in myScheme?",
        answer: "In myScheme, schemes & services are available across a wide range of sectors such as Agriculture, Rural & Environment, Business & Entrepreneurship, Education & Learning, Health & Wellness, Housing & Shelter, Banking, Financial Services & Insurance, Public Safety, Law & Justice, Science, IT & Communication, Skills & Employment, Social welfare & Empowerment, Sports & Culture, Tax & Revenue, Transport & Infrastructure, Travel & Tourism, Utility & Sanitation."
    },
    {
        question: "Does the myScheme platform provide multilingual support?",
        answer: "Yes, currently the platform content is available in two languages i.e., Hindi & English. Content in other Indian languages will also be provided soon."
    },
    {
        question: "Does myScheme showcase Central as well as State - specific schemes?",
        answer: "Currently, around 100 Central Government schemes have been onboarded on the platform. State schemes will also be onboarded soon."
    },
    {
        question: "I could not find a scheme XYZ on the myScheme platform.",
        answer: "Currently, around 100 Central Government schemes have been onboarded on the platform. Many more schemes will be added soon. You may leave your suggestion in the feedback section for the same."
    },
    {
        question: "I found some errors in the content of the schemes.",
        answer: "In case of any issue in the content, please refer to the English version and if the issue is found there also please refer to respective Ministry's portal. You may also send email to support-myscheme[at]digitalindia[dot]gov[dot]in"
    },
    {
        question: "I want to explore the schemes under which Legal Assistance is provided to the citizens. Would it be possible through myScheme?",
        answer: "Yes, the “Tags” feature of myScheme empowers the citizen to explore the schemes based on the type and the extent of the benefits provided."
    },
    {
        question: "I want to apply for a specific scheme but I need to know the documents that I am needed to provide to apply. Can I find this information in myScheme?",
        answer: "Yes, myScheme provides the complete list of the required documents for all the schemes."
    }
];