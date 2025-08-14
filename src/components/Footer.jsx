import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Star,
    TrendingUp,
    Shield,
    Zap
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        'Funnel Strategy & Design',
        'Conversion Rate Optimization',
        'Landing Page Development',
        'Email Marketing Automation',
        'Sales Page Copywriting',
        'A/B Testing & Analytics'
    ];

    return (
        <footer className="relative bg-gradient-to-br from-flowrise-navy-900 via-flowrise-navy-800 to-flowrise-navy-900 pt-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-flowrise-green-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-flowrise-blue-500/5 rounded-full blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </div>

            <div className="relative z-10">


                {/* Main Footer Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center lg:text-left"
                        >
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center lg:justify-start gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-flowrise-green-500 to-flowrise-blue-500 rounded-xl flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    Flowrise
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                                    We build high-converting funnels that transform visitors into customers.
                                    Stop losing money on broken funnels and start converting like crazy.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 justify-center lg:justify-start">
                                {[
                                    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                                    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                                    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
                                    { icon: Instagram, href: '#', color: 'hover:text-pink-400' }
                                ].map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10`}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center lg:text-left"
                        >
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center justify-center lg:justify-start gap-2">
                                <TrendingUp className="w-5 h-5 text-flowrise-green-400" />
                                Our Services
                            </h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-flowrise-green-400 transition-colors duration-200 flex items-center justify-center lg:justify-start gap-2 group"
                                        >
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                            <span className="group-hover:translate-x-2 transition-transform duration-200">
                                                {service}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-6 py-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col lg:flex-row justify-between items-center gap-4"
                        >
                            <div className="text-gray-400 text-center lg:text-left">
                                <p>© {currentYear} Flowrise. All rights reserved.</p>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    <span>Rated 4.9/5 by 500+ clients</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-flowrise-green-400" />
                                    <span>SSL Secured</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
