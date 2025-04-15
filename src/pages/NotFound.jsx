import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-brand-background-light min-h-min">
            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="bg-brand-background-paper p-8 rounded-xl shadow-sm border border-brand-primary/10 max-w-2xl mx-auto text-center">
                    {/* 404 Display */}
                    <div className="relative">
                        <div className="text-9xl font-bold text-brand-primary opacity-10 select-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                className="w-24 h-24 text-brand-primary"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75z" />
                            </svg>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 mt-8">
                        <p className="text-brand-text-primary text-lg">
                            We couldn't find what you're looking for.
                            The page might have been moved, deleted, or never existed.
                        </p>

                        {/* Quick Links Box - similar to About page feature box */}
                        <div className="bg-brand-background-light p-6 rounded-xl border border-brand-secondary/20">
                            <h3 className="font-heading text-xl text-brand-primary mb-4">Try These Instead</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-center space-x-3">
                                    <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                                    <Link to="/" className="text-brand-text-link hover:text-brand-text-linkHover transition-colors duration-200">
                                        Interactive Parish Map
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center space-x-3">
                                    <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                                    <Link to="/resources" className="text-brand-text-link hover:text-brand-text-linkHover transition-colors duration-200">
                                        Research Resources
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center space-x-3">
                                    <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                                    <Link to="/about" className="text-brand-text-link hover:text-brand-text-linkHover transition-colors duration-200">
                                        About Norway's Parishes
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-brand-text-inverse rounded-lg hover:bg-brand-primary-dark transition-all duration-200"
                            >
                                Return to Map
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center justify-center px-6 py-3 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-background-light transition-all duration-200"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Note Box - similar to About page note box */}
            <div className="max-w-6xl mx-auto px-4 pb-8">
                <div className="max-w-2xl mx-auto bg-brand-background-paper p-6 rounded-xl shadow-sm border-l-4 border-brand-accent-burgundy text-center">
                    <h3 className="font-heading text-xl text-brand-primary mb-2">Need Help?</h3>
                    <p className="text-brand-text-secondary">
                        If you're having trouble finding what you need, please visit our{' '}
                        <Link to="/contact" className="text-brand-text-link hover:text-brand-text-linkHover transition-colors duration-200">
                            contact page
                        </Link>{' '}
                        for assistance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;