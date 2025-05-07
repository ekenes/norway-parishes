import React from 'react';

const About = () => {
   
    return (
        <div className="bg-brand-background-light min-h-screen">
            {/* Hero Section with gradient overlay */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-brand-text-inverse py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="font-heading text-4xl text-brand-text-inverse mb-4">About Us</h1>
                    <p className="text-xl md:text-2xl text-brand-background-light/90">
                        Empowering Norwegian genealogical research through interactive mapping
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Main Content Column */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Introduction */}
                        <section className="prose max-w-none">
                            <p className="text-brand-text-primary text-lg leading-relaxed">
                                NorwayParishes.com is a free web application designed to assist those with Norwegian ancestry in conducting genealogical research. Created by Kristian Ekenes in 2014 during his master's degree in Geographic Information Systems at Arizona State University, this platform revolutionizes how people research their Norwegian heritage.
                            </p>
                        </section>

                        {/* Primary Goal */}
                        <section>
                            <h2 className="font-heading text-3xl text-brand-primary mb-6">Our Mission</h2>
                            <div className="bg-brand-background-paper p-8 rounded-xl shadow-sm border border-brand-primary/10">
                                <p className="text-brand-text-primary text-lg mb-6">
                                    We provide genealogical researchers with:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 mr-3 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-brand-text-primary">Interactive and precise maps of Norway's parish boundaries</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 mr-3 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-brand-text-primary">Links to premier online genealogical research tools</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 mr-3 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-brand-text-primary">Advanced farm search capabilities</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* The Need Section */}
                        <section>
                            <h2 className="font-heading text-3xl text-brand-primary mb-6">Why We Exist</h2>
                            <div className="bg-brand-background-paper p-8 rounded-xl shadow-sm border border-brand-primary/10">
                                <p className="text-brand-text-primary text-lg mb-6">
                                    Many people researching their family roots want to understand more than just names and dates. They want to know:
                                </p>
                                <ul className="space-y-4 text-brand-text-primary">
                                    <li className="flex items-center space-x-3">
                                        <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                                        <span>Where did their ancestors grow up?</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                                        <span>What was the landscape like?</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                                        <span>Did they live in cities, islands, or mountains?</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                                        <span>How close were they to other family members?</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Quick Facts Box */}
                        <div className="bg-brand-background-paper p-8 rounded-xl shadow-sm border border-brand-secondary/20">
                            <h3 className="font-heading text-2xl text-brand-primary mb-6">Features</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <span className="w-3 h-3 bg-brand-secondary rounded-full"></span>
                                    <span className="text-brand-text-primary">Interactive parish mapping</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-3 h-3 bg-brand-secondary rounded-full"></span>
                                    <span className="text-brand-text-primary">Farm search tool</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-3 h-3 bg-brand-secondary rounded-full"></span>
                                    <span className="text-brand-text-primary">Historical information access</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-3 h-3 bg-brand-secondary rounded-full"></span>
                                    <span className="text-brand-text-primary">Vital records lookup</span>
                                </li>
                            </ul>
                        </div>

                        {/* Note Box */}
                        <div className="bg-brand-background-paper p-8 rounded-xl shadow-sm border-l-4 border-brand-accent-burgundy">
                            <h3 className="font-heading text-xl text-brand-primary mb-4">A Note on Parish Boundaries</h3>
                            <p className="text-brand-text-secondary">
                                While county and municipal boundaries show current jurisdictions, parish boundaries reflect their 1979 status. This data comes from the Norwegian Mapping Authority and Norwegian National Archives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;