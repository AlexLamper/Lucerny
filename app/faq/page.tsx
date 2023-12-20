import React from 'react';
import { FaStar } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const Faq = () => {
  const faq = [
    {
        question: "Do you offer website maintenance services?",
        answer: "Yes, we provide website maintenance services to keep your site updated, secure, and functional."
      },
      {
        question: "What is your web development process?",
        answer: "Our process involves consultation, planning, design, development, testing, and deployment."
      },
      {
        question: "Can you help with search engine optimization (SEO)?",
        answer: "Absolutely! We offer SEO services to boost your website's visibility in search engines."
      },
      {
        question: "What types of websites do you build?",
        answer: "We build various sites, including e-commerce, portfolio, blogs, and business sites."
      },
      {
        question: "How long does it take to build a website?",
        answer: "Project duration varies based on complexity and features. Timelines are estimated after evaluation."
      },
      {
        question: "What are your accepted payment methods?",
        answer: "We accept credit/debit cards, PayPal, bank transfers, and secure payment gateways."
      },
      {
        question: "Do you provide website hosting services?",
        answer: "Yes, we offer tailored website hosting with reliable servers and technical support."
      },
      {
        question: "Can you redesign an existing website?",
        answer: "Certainly! We specialize in website redesigns to improve functionality and aesthetics."
      },
      {
        question: "What sets your web development services apart?",
        answer: "Our experienced team, attention to detail, client-centric approach, and use of cutting-edge technologies."
      },
      {
        question: "Is there ongoing support after the website is launched?",
        answer: "Yes, we provide post-launch support for updates, maintenance, and queries."
      }
  ];

  return (
    <div className="container mx-auto py-8 max-w-screen-xl">
      <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-10 text-[#232323] text-center">
        Frequently Asked Questions<span className='text-[#496488]'>.</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-6">
        {faq.map((faq, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-semibold mr-2">{faq.question}</h3>
            </div>
            <p className="text-gray-700 mb-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
