import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        title: "Landing Pages",
        description: "High-converting, single-page experiences designed to capture attention and drive specific actions. Optimized for performance and clarity.",
        details: ["Conversion Rate Optimization", "A/B Testing Ready", "Blazing Fast Load Times"]
    },
    {
        title: "Business Websites",
        description: "Comprehensive digital platforms that establish trust, explain complex value propositions, and serve as the core of your online presence.",
        details: ["Custom Architecture", "CMS Integration", "Scalable Foundations"]
    },
    {
        title: "Local Commerce",
        description: "Specialized solutions for Restaurants, Barbershops, and Bakeries. Integrating digital menus, booking systems, and local SEO to drive foot traffic.",
        details: ["Google Workspace Integration", "Google Business Sync", "Mobile-First Design"]
    },
    {
        title: "Performance & SEO",
        description: "Technical optimizations that ensure your website ranks well, loads instantly, and provides a flawless experience across all devices and networks.",
        details: ["Core Web Vitals", "Semantic HTML", "On-page Optimization"]
    }
];

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Most landing pages and small business websites take 2 to 4 weeks to complete, depending on the complexity of the design and the required integrations. Custom web applications may take 6 to 8 weeks."
    },
    {
        question: "What is your process for new projects?",
        answer: "We start with a discovery phase to understand your business goals, target audience, and functional requirements. Then, we move to wireframing, high-fidelity design, development, and finally, rigorous testing and deployment."
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, fast, and up-to-date with the latest web standards and performance optimizations."
    },
    {
        question: "Will I be able to update the content myself?",
        answer: "Absolutely. We build most of our websites using robust Content Management Systems (CMS) that allow you to easily update text, images, and other content without needing any technical knowledge."
    }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-neutral-300 py-6">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="flex items-center justify-between w-full text-left"
            >
                <h3 className="text-xl font-medium tracking-tight text-neutral-900 pr-8">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-neutral-600"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="mt-4 text-neutral-500 font-light leading-relaxed pr-10">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Services() {
    return (
        <div className="w-full bg-neutral-50 min-h-screen">
            <header className="py-32 px-6 max-w-4xl mx-auto text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[48px] md:text-[80px] lg:text-[120px] font-bold leading-[0.9] tracking-[-0.04em] uppercase text-neutral-900 mb-6"
                >
                    Premium Solutions
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-neutral-500 font-light"
                >
                    We don't build generic templates. We engineer specific solutions designed to solve business problems and generate tangible outcomes.
                </motion.p>
            </header>

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-100 rounded-3xl p-8 border border-neutral-300 flex flex-col justify-between group hover:border-neutral-400 transition-colors"
                        >
                            <div>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">Service 0{index + 1}</span>
                                <h3 className="text-2xl font-semibold mt-2 tracking-tight text-neutral-900">{service.title}</h3>
                            </div>
                            <p className="text-neutral-500 font-light leading-relaxed my-8">{service.description}</p>
                            
                            <ul className="space-y-3">
                                {service.details.map((detail, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="px-6 pb-32 max-w-3xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">Common Questions</h2>
                    <p className="text-lg text-neutral-500 font-light">
                        Clear expectations and transparent processes. Here is what you need to know about working with us.
                    </p>
                </div>
                <div className="border-t border-neutral-300">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </section>
        </div>
    );
}
