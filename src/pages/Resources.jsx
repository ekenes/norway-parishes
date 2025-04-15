import React from 'react';

const ResourcesPage = () => {
    const resources = [
        {
            category: "Research & Archives",
            items: [
                {
                    name: "National Digital Archives of Norway",
                    description: "The primary source of official copies of original vital records in Norway. Users can search digitized records dating back to the mid-1600s.",
                    link: "http://nordicgenealogy.org/Norway_Genealogy.htm"
                },
                {
                    name: "FamilySearch",
                    description: "Allows users to search millions of indexed vital records from Norway. An excellent tool that should be used in conjunction with the Digital Archives. FamilySearch also provides helpful wiki articles for all counties and parishes in Norway.",
                    link: "https://familysearch.org/"
                },
                {
                    name: "University of Tromso",
                    description: "This site allows users to search various indexed census and parish records. Complete results for baptisms, marriages, and burials are only available for select parishes.",
                    link: "http://www.rhd.uit.no/folketellinger/folketellinger_e.aspx"
                }
            ]
        },
        {
            category: "Maps & Locations",
            items: [
                {
                    name: "Norgeskart",
                    description: "A web mapping application that allows users to make detailed searches of all places in Norway, including farms. It's an excellent resource for farm searches and very detailed aerial imagery.",
                    link: "http://gammel.norgeskart.no//adaptive2/default.aspx?gui=1&lang=1"
                },
                {
                    name: "Oluf Rygh's Norwegian Farm Name Gazetteer",
                    description: "An excellent resource for finding alternate spellings of farms; their histories; and parish, municipal and county jurisdictions.",
                    link: "http://www.dokpro.uio.no/rygh_ng/rygh_form.html#soek"
                }
            ]
        },
        {
            category: "Societies & Organizations",
            items: [
                {
                    name: "Nordic Genealogical Society of Southern California",
                    description: "Provides links to various helpful resources.",
                    link: "http://nordicgenealogy.org/Norway_Genealogy.htm"
                },
                {
                    name: "Genealogy Society of Norway",
                    description: "An organization that provides a forum for asking for and receiving help with genealogical research questions.",
                    link: "http://www.disnorge.no/eng/index.html"
                },
                {
                    name: "Sons of Norway",
                    description: "A guide for conducting genealogical research in Norway.",
                    link: "http://www.vennekretsen.com/Documents/GenealogyGuide.pdf"
                }
            ]
        },
        {
            category: "Language & Research Guides",
            items: [
                {
                    name: "Norwegian Word List",
                    description: "FamilySearch's list of essential genealogical terms in Norwegian with their English equivalents. Very helpful when learning how to read original documents and records in Norwegian.",
                    link: "https://familysearch.org/learn/wiki/en/Norwegian_Word_List"
                },
                {
                    name: "How to Trace Ancestors in Norway",
                    description: "The Norwegian Digital Archives' 'how to' on genealogical research in Norway.",
                    link: "http://digitalarkivet.uib.no/sab/howto.html"
                },
                {
                    name: "Ancestry and History",
                    description: "Historian Johan Ingvald Borgos and Marianne Pettersen, genealogist, give some helpful historical background to naming conventions and strategies for locating Norwegian ancestors.",
                    link: "Ancestry and History"
                }
            ]
        }
    ];

    return (
        <div className="bg-brand-background-light min-h-screen">
          {/* Hero Section with gradient overlay */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-brand-text-inverse py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="font-heading text-4xl text-brand-text-inverse mb-4">Other Helpful Resources</h1>
                    <p className="text-lg text-brand-text-inverse/80 max-w-2xl">
                    For additional help in conducting family history research in Norway, check out some of these other sites
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="space-y-12">
                    {resources.map((category, index) => (
                        <section key={index} className="bg-brand-background-paper rounded-xl p-8 shadow-sm">
                            <h2 className="font-heading text-2xl text-brand-primary mb-6">
                                {category.category}
                            </h2>
                            <div className="space-y-6">
                                {category.items.map((item, itemIndex) => (
                                    <div 
                                        key={itemIndex}
                                        className="flex flex-col p-6 bg-brand-background rounded-lg border border-brand-primary/10 hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-xl font-heading text-brand-accent-burgundy mb-2">
                                                {item.name}
                                            </h3>
                                            <a 
                                                href={item.link}
                                                className="flex-shrink-0 text-brand-text-link hover:text-brand-text-linkHover ml-4"
                                                target="_blank"
                                            >
                                                <svg 
                                                    className="w-6 h-6" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        strokeWidth="2" 
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <p className="text-brand-text-secondary">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;