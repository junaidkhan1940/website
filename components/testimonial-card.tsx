// components/TestimonialCard.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    author,
    role,
    index
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 relative"
        >
            <div className="absolute top-6 right-6 text-blue-100 dark:text-blue-900">
                <Quote size={42} />
            </div>
            <div className="relative z-10">
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{quote}"
                </p>
                <div>
                    <p className="font-bold">{author}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;