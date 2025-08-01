import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Play, Download, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Results', href: '#testimonials' },
        { name: 'Guarantee', href: '#guarantee' },
        { name: 'Free Blueprint', href: '/lead-magnet', icon: Download },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-flowrise-navy-900/80 backdrop-blur-xl border-b border-white/10'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <img src="/FlowriseLogo.png" alt="Flowrise Logo" className="w-48 h-48" />
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item, index) => {
                                const isRouterLink = item.href.startsWith('/');
                                const Component = isRouterLink ? Link : motion.a;
                                const linkProps = isRouterLink ? { to: item.href } : { href: item.href };

                                return (
                                    <Component
                                        key={item.name}
                                        {...linkProps}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, color: '#8b5cf6' }}
                                        className="flex items-center gap-2 text-gray-300 hover:text-flowrise-blue-400 transition-colors duration-300 font-medium"
                                    >
                                        {item.icon && <item.icon className="w-4 h-4" />}
                                        {item.name}
                                    </Component>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 text-flowrise-blue-400 hover:text-white transition-colors duration-300"
                            >
                                <Play className="w-4 h-4" />
                                <span className="font-medium">Watch Training</span>
                            </motion.button>

                            <Link to="/book-call">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-flowrise-blue-600 to-flowrise-green-600 text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>Book Call</span>
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white hover:text-flowrise-blue-400 transition-colors duration-300"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-deep-space-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                        >
                            <div className="container mx-auto px-6 py-6">
                                <div className="flex flex-col gap-4">
                                    {navItems.map((item, index) => {
                                        const isRouterLink = item.href.startsWith('/');
                                        const Component = isRouterLink ? Link : motion.a;
                                        const linkProps = isRouterLink ? { to: item.href } : { href: item.href };

                                        return (
                                            <Component
                                                key={item.name}
                                                {...linkProps}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center gap-2 text-gray-300 hover:text-flowrise-blue-400 transition-colors duration-300 font-medium py-2"
                                            >
                                                {item.icon && <item.icon className="w-4 h-4" />}
                                                {item.name}
                                            </Component>
                                        );
                                    })}

                                    <div className="border-t border-white/10 pt-4 mt-2">
                                        <motion.button
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-flowrise-blue-400 hover:text-white transition-colors duration-300 border border-flowrise-blue-500 rounded-lg mb-3"
                                        >
                                            <Play className="w-4 h-4" />
                                            <span className="font-medium">Watch Training</span>
                                        </motion.button>

                                        <motion.button
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.4 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-flowrise-blue-600 to-flowrise-green-600 text-white font-semibold rounded-lg shadow-glow"
                                        >
                                            <Phone className="w-4 h-4" />
                                            <span>Book Call</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
