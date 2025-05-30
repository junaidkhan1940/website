// components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navItems = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'Mock-up Projects', href: '#mockup', id: 'mockup' },
        { name: 'Mechanical Projects', href: '#mechanical', id: 'mechanical' },
        { name: 'University Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 mt-2">
                        <a href="#home" className="flex items-center">
                            <Image
                                src={`/logo.png`}
                                alt={`logo`}
                                width={200}
                                height={100}
                                className="object-contain"
                            />
                            {/* <span className="text-2xl font-bold t text-blue-400">JK</span>
                            <span className="ml-2 font-medium hidden sm:block">Junaid Khan</span> */}
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                                    ? 't text-blue-400'
                                    : 't text-gray-300 hover:t hover:text-blue-400'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Theme Toggle and Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md t text-gray-300 hover hover:bg-gray-800 focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            {mounted && theme === 'dark' ? (
                                <Sun size={20} />
                            ) : (
                                <Moon size={20} />
                            )}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-md t text-gray-300 hover hover:bg-gray-800 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-64 opacity-100 visible'
                    : 'max-h-0 opacity-0 invisible'
                    } overflow-hidden`}
            >
                <div className="px-2 pt-2 pb-3 space- bg-gray-900 shadow-md">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={closeMenu}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === item.id
                                ? 't text-blue-40 bg-blue-900/20'
                                : 't text-gray-300 hove hover:bg-gray-800'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;