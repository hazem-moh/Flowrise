import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ExternalLink, Play, ArrowRight, Zap, Star, TrendingUp, Shield, Clock } from 'lucide-react';

const FinalCTASection = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "Ready to Build a Funnel That Converts?";

    // Simplified typewriter effect with better performance
    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timer = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 80);
            return () => clearTimeout(timer);
        }
    }, [typedText.length, fullText]);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-flowrise-navy-900 via-flowrise-navy-800 to-flowrise-navy-900 overflow-hidden flex items-center">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-flowrise-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-flowrise-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-flowrise-green-400/5 rounded-full blur-2xl"></div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Floating Animated Circles */}
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/6 w-32 h-32 border border-flowrise-green-400/30 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/6 w-28 h-28 border border-flowrise-blue-400/30 rounded-full"
                />
                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 right-1/3 w-16 h-16 bg-flowrise-green-400/20 rounded-full blur-sm"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Enhanced Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-flowrise-green-500/20 to-flowrise-blue-500/20 backdrop-blur-xl rounded-full px-8 py-4 border border-flowrise-green-400/30 mb-8">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <Zap className="w-6 h-6 text-flowrise-green-400" />
                            </motion.div>
                            <span className="text-flowrise-green-200 font-semibold text-lg">Ready to Transform Your Business?</span>
                        </div>
                    </motion.div>

                    {/* Enhanced Typewriter Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16 lg:mb-20"
                    >
                        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-white mb-6 sm:mb-8 leading-tight">
                            {typedText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="text-flowrise-green-400"
                            >
                                |
                            </motion.span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2 }}
                            viewport={{ once: true }}
                            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto"
                        >
                            Stop losing money on broken funnels.{' '}
                            <span className="text-flowrise-green-400 font-semibold">
                                Let's build you a conversion machine that works.
                            </span>
                        </motion.p>
                    </motion.div>

                    {/* Enhanced CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 sm:mb-20 lg:mb-24"
                    >
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mb-12">
                            {/* Primary CTA - Enhanced */}
                            <motion.button
                                onClick={() => {
                                    const redirectUrl = window.location.origin + '/call-booked';
                                    const calendlyUrl = `https://calendly.com/hazemmohamed345674/new-meeting?redirect_url=${encodeURIComponent(redirectUrl)}`;
                                    window.open(calendlyUrl, '_blank');
                                }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative bg-gradient-to-r from-flowrise-green-600 to-flowrise-green-700 hover:from-flowrise-green-700 hover:to-flowrise-green-800 text-white font-bold py-6 px-12 rounded-2xl text-xl lg:text-2xl transition-all duration-300 shadow-2xl hover:shadow-flowrise-green-500/25 w-full lg:w-auto min-w-[320px]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <Phone className="w-7 h-7 lg:w-8 lg:h-8" />
                                    Book Your Free Funnel Audit
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7" />
                                    </motion.div>
                                </span>

                                {/* Button glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-flowrise-green-400 to-flowrise-green-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />
                            </motion.button>

                     
                        </div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-sm text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-flowrise-green-400" />
                                <span>100% Risk-Free</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-flowrise-blue-400" />
                                <span>30-Min Strategy Call</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span>5-Star Rated Service</span>
                            </div>
                        </motion.div>
                    </motion.div>

           
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
