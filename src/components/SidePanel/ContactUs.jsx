import React from 'react';
import {
    CalcitePanel,
    CalciteLink
} from "@esri/calcite-components-react";

const ContactUs = ({ referenceElement }) => {
    return (
        <CalcitePanel 
            heading="Contact Us" 
            id="contact-us"
            data-panel-id="contact-us"
            width-scale="l"
            referenceElement={referenceElement}
        >
            <div className="w-full h-full flex flex-col gap-4 md:gap-6 bg-white overflow-y-auto panel-content">
                {/* Header */}
                <div>
                    <h4 className="text-lg font-bold mb-2 md:mb-3 text-[rgb(var(--color-nagcnl-green))]">
                        Help Shape Our Map
                    </h4>
                    <p className="text-sm md:text-base text-black leading-relaxed">
                        Notice something on the map that needs fixing? Got a cool idea to make it better? 
                        We'd love to hear from you!
                    </p>
                </div>
                
                {/* Contact Card */}
                <div className="bg-[var(--calcite-color-background)] rounded-lg shadow-md p-4 md:p-5 border-l-4 border-[rgb(var(--color-nagcnl-green))] mb-2 md:mb-4">
                    <div className="flex items-center flex-wrap mb-3 md:mb-4">
                        <div className="bg-[rgb(var(--color-nagcnl-green))] w-10 h-10 rounded flex items-center justify-center mr-3 mb-0.5">
                            <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-bold text-sm md:text-base mb-0.5 text-[rgb(var(--color-nagcnl-green))]">
                                Email Us Directly
                            </div>
                            <CalciteLink 
                                href="mailto:feedback@norwayparishes.com" 
                                className="font-medium text-xs md:text-sm break-all text-[rgb(var(--color-nagcnl-green-light))]"
                            >
                                feedback@norwayparishes.com
                            </CalciteLink>
                        </div>
                    </div>
                    
                    <p className="text-xs md:text-sm text-[rgb(var(--color-nagcnl-gray-74))] leading-relaxed mt-2 md:mt-4">
                        We read every message and use your feedback to make our map even better!
                    </p>
                </div>
                
                {/* Footer */}
                <div className="mt-auto pt-3 md:pt-4 border-t border-[rgb(var(--color-nagcnl-gray-b9))] text-xs md:text-sm italic text-[rgb(var(--color-nagcnl-gray-70))] text-center">
                    Thanks for helping us improve our Norway Parishes Map!
                </div>
            </div>
        </CalcitePanel>
    );
};

export default ContactUs;