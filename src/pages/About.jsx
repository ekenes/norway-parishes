import React from 'react';
// Import images
import churchImage from '../assets/images/A_church_of_norge.jpg';
import kirkesokImage from '../assets/images/A_Kirkesok.jpg';
import familySearchImage from '../assets/images/familySearch.jpeg';
import kartverketImage from '../assets/images/kartverket.jpg';
import digitalarkivetImage from '../assets/images/logo_digitalarkivet.jpg';
import riksarkivetImage from '../assets/images/Riksarkivet.jpg';

const About = () => {
    const acknowledgments = [
        {
            organization: "State Mapping Authority of Norway",
            description: "For providing the municipal and county boundaries in GIS format and the data used to create the parish boundaries on a national scale. Norway and Europe topo web services were also provided courtesy Kartverket.",
            image: kartverketImage,
            url: "https://kartverket.no/"
        },
        {
            organization: "FamilySearch",
            description: "Parish maps on a county scale were used as reference to help create a GIS dataset of parish boundaries. FamilySearch also provided valuable information regarding the former jurisdictions of most parishes.",
            image: familySearchImage,
            url: "https://familysearch.org/"
        },
        {
            organization: "State Church of Norway",
            description: "Provided valuable information describing how parishes are organized today and offered recommendations on who to contact to obtain current GIS data for parishes.",
            image: churchImage,
            url: "https://www.kirken.no/english/index.cfm"
        },
        {
            organization: "Kirkesok",
            description: "All photos of churches as viewed in NorwayParishes.com are courtesy of Kirkesok.no.",
            image: kirkesokImage,
            url: "http://www.kirkesok.no/eng"
        },
        {
            organization: "Digital Archives of Norway",
            description: "For providing official maps of Norway's parishes as they were in 1979 and 1801. The Digital Archives also provided sound guidance for this project.",
            image: digitalarkivetImage,
            url: "http://www.arkivverket.no/eng/Digitalarkivet"
        },
        {
            organization: "National Archives of Norway",
            description: "For providing guidance and information regarding best practices in conducting genealogical research and the presentation of geographic data relating to that research.",
            image: riksarkivetImage,
            url: "http://arkivverket.no/"
        }
    ];

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

            {/* Acknowledgments Section */}
            <div className="bg-brand-background-paper py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-heading text-3xl text-brand-primary mb-8">Acknowledgments</h2>
                    <p className="text-brand-text-secondary text-lg mb-12 max-w-6xl">
                        NorwayParishes.com offers a special thank you to the following organizations for their help and support with this project.
                        Without their help, guidance and support, this project would not have been possible.
                    </p>

                    <div className="flex  justify-center ">
                        <div className="flex flex-wrap justify-center w-full max-w-6xl">
                            {acknowledgments.map((ack, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl bg-brand-background-light border border-brand-primary/10 hover:shadow-lg transition-all duration-300 m-4 w-[32rem]  overflow-clip"
                                >
                                    <div className="flex justify-center items-center gap-4 mb-4">

                                        <h3 className="font-heading text-2xl text-brand-accent-burgundy">
                                            {ack.organization}
                                        </h3>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-36 object-fit bg-brand-background-paper rounded-lg p-2 flex items-center justify-center mr-2">
                                            <a
                                                href={ack.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-brand-text-link hover:text-brand-text-linkHover transition-colors duration-200 flex items-center gap-1"
                                            >
                                                <img
                                                    src={ack.image}
                                                    alt={`${ack.organization} logo`}
                                                    className="max-w-full max-h-full object-contain"
                                                />
                                            </a>
                                        </div>
                                        <p className="text-brand-text-secondary">
                                            {ack.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;