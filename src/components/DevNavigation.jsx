import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Home, Download, CheckCircle, Calendar } from 'lucide-react';

const DevNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const routes = [
        { path: '/', name: 'Landing Page', icon: Home },
        { path: '/lead-magnet', name: 'Lead Magnet', icon: Download },
        { path: '/thank-you', name: 'Thank You', icon: CheckCircle },
        { path: '/book-call', name: 'Book Call', icon: Calendar },
    ];

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="mb-4 bg-deep-space-800/90 backdrop-blur-xl border border-white/10 rounded-lg p-4 min-w-[200px]"
                    >
                        <h3 className="text-white text-sm font-semibold mb-3 text-center">
                            🚀 Dev Navigation
                        </h3>
                        <div className="space-y-2">
                            {routes.map((route) => {
                                const isActive = location.pathname === route.path;
                                return (
                                    <Link
                                        key={route.path}
                                        to={route.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 ${isActive
                                                ? 'bg-flow-purple-600 text-white'
                                                : 'text-gray-300 hover:bg-deep-space-700 hover:text-white'
                                            }`}
                                    >
                                        <route.icon className="w-4 h-4" />
                                        <span className="text-sm">{route.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? 'bg-flow-purple-600 text-white shadow-glow'
                        : 'bg-deep-space-800/90 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white'
                    }`}
            >
                <Settings className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
            </motion.button>
        </div>
    );
};

export default DevNavigation;
