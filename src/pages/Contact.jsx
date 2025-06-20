import React from 'react';

const Contact = () => {


    return (
        <div className="bg-brand-background-light min-h-screen">
            {/* Hero Section with gradient overlay */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-brand-text-inverse py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="font-heading text-4xl text-brand-text-inverse mb-4">Contact Us</h1>
                    <p className="text-lg text-brand-text-inverse/80 max-w-2xl">
                        We value your feedback and are here to help with any questions.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row">
                    {/* Contact Information */}
                    <div className="">
                        <div className="bg-brand-background-paper p-8 rounded-xl shadow-sm">
                            <h2 className="font-heading text-2xl text-brand-primary mb-6">Get in Touch</h2>
                            <p className="text-brand-text-secondary mb-8">
                                If you have questions, comments, or suggestions on how to improve NorwayParishes.com,
                                we would love to hear from you. Also if you notice any errors in boundary locations
                                or in other content found on this site, please report them so they can be fixed.
                            </p>

                            {/* Direct Email Contact */}
                            <div className="mb-8">
                                <h3 className="font-heading text-xl text-brand-primary mb-4">Direct Contact</h3>
                                <div className="flex items-center space-x-3 text-brand-text-secondary">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:genealogy@nagcnl.org"
                                        className="text-brand-text-link hover:text-brand-text-linkHover transition-colors">
                                        genealogy@nagcnl.org
                                    </a>
                                </div>
                            </div>

                            {/* Thank You Note */}
                            <div className="text-brand-text-secondary">
                                <p className="italic">Thank you for visiting!</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;
