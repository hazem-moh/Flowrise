import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ExternalLink, Play, ArrowRight } from 'lucide-react';

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
        <section className="relative min-h-screen bg-gradient-to-br from-deep-space-900 via-deep-space-800 to-electric-indigo-700 overflow-hidden flex items-center">
            {/* Simplified Background Elements - no complex animations */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/6 w-24 h-24 sm:w-32 sm:h-32 border border-electric-indigo-400/30 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/6 w-20 h-20 sm:w-28 sm:h-28 border border-green-400/30 rounded-full"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Typewriter Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8 sm:mb-12 lg:mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 min-h-[1.2em] px-4">
                            {typedText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="text-green-400"
                            >
                                |
                            </motion.span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2 }}
                            viewport={{ once: true }}
                            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 px-4 leading-relaxed"
                        >
                            Stop losing money on broken funnels. Let's build you a conversion machine.
                        </motion.p>
                    </motion.div>

                    {/* Main CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
                    >
                        {/* Primary CTA */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 sm:py-5 lg:py-6 px-8 sm:px-10 lg:px-12 rounded-2xl text-lg sm:text-xl lg:text-2xl transition-all duration-200 shadow-2xl hover:shadow-green-500/25 group w-full sm:w-auto"
                        >
                            <span className="flex items-center justify-center gap-3">
                                <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                                Book Your Free Funnel Audit
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>

                        {/* Secondary CTA */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-electric-indigo-500 hover:border-electric-indigo-400 text-electric-indigo-400 hover:text-electric-indigo-300 font-bold py-4 sm:py-5 lg:py-6 px-8 sm:px-10 lg:px-12 rounded-2xl text-lg sm:text-xl lg:text-2xl transition-all duration-200 hover:bg-electric-indigo-500/10 group w-full sm:w-auto"
                        >
                            <span className="flex items-center justify-center gap-3">
                                <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                                Watch Success Stories
                                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16"
                    >
                        <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-2"
                            >
                                500+
                            </motion.div>
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Funnels Optimized</p>
                        </div>

                        <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-electric-indigo-400 mb-2"
                            >
                                247%
                            </motion.div>
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Average Conversion Boost</p>
                        </div>

                        <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-2"
                            >
                                $50M+
                            </motion.div>
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Revenue Generated</p>
                        </div>
                    </motion.div>

                    {/* Urgency Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-red-900/40 to-red-800/20 border border-red-500/30 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                            🚨 Limited Time: Free Funnel Audit Worth $2,500
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                            Every day you wait is money lost. We're offering free comprehensive funnel audits to the next{' '}
                            <span className="text-red-400 font-bold">10 businesses</span> that book this week.
                        </p>
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-red-400 font-bold text-lg sm:text-xl"
                        >
                            Only 3 spots remaining!
                        </motion.div>
                    </motion.div>

                    {/* Final Assurance */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-12 sm:mt-16 lg:mt-20 text-center"
                    >
                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-4">
                            No obligation. No pressure. Just honest insights about your funnel's potential.
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base text-gray-500">
                            <span className="flex items-center gap-2">
                                ✓ 100% Free Analysis
                            </span>
                            <span className="flex items-center gap-2">
                                ✓ No Long-term Contracts
                            </span>
                            <span className="flex items-center gap-2">
                                ✓ 30-min Strategy Session
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
