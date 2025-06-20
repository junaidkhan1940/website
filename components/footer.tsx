// components/Footer.tsx
import React from 'react';
import { Linkedin, Mail, Github, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Junaid Khan</h3>
                        <p className="text-gray-400 mb-4 max-w-md">
                            Mechanical Design Engineer providing precision engineering,
                            CAD design, and sustainable solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/junaid-khan-b32aa3265/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:mechengrjunaidkhan@gmail.com"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="https://github.com/junaidkhan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">CAD Design & Modeling</a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Technical Engineering</a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Sustainable Engineering</a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Engineering Simulation</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Junaid Khan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
