// components/ServiceCard.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    index
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
        >
            <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 dark:text-blue-400">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
                {description}
            </p>
            <a
                href="#contact"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform"
            >
                Learn More <ArrowRight size={16} className="ml-1" />
            </a>
        </motion.div>
    );
};

export default ServiceCard;
