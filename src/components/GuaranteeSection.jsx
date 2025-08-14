import React from 'react';
import { motion } from 'framer-motion';
import { Shield, DollarSign } from 'lucide-react';

const GuaranteeSection = () => {
    return (
        <section id="guarantee" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-deep-space-900 to-deep-space-800 relative overflow-hidden">
            {/* Simplified Background Elements for better performance */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 border border-green-400/30 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 border border-green-500/30 rounded-full"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 px-4">
                        Our{' '}
                        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                            Guarantee
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                        We're so confident in our process that we back it with our unbeatable guarantee.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Money-Back Guarantee */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-green-900/40 to-green-800/20 border border-green-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center relative"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.4,
                                type: "spring",
                                stiffness: 150,
                                damping: 15
                            }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-600 rounded-full mb-6 sm:mb-8"
                        >
                            <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                        </motion.div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                            Risk-Free Guarantee
                        </h3>

                        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                            If you don’t see significant improvements in your funnel’s performance within 90 days, we’ll continue working with you — following your system — until it delivers results, at no extra cost.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400"
                        >
                            90 Days
                        </motion.div>
                    </motion.div>

                    {/* Results Guarantee */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-deep-space-800/60 to-deep-space-700/40 border border-gray-600/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center relative"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring",
                                stiffness: 150,
                                damping: 15
                            }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-full mb-6 sm:mb-8"
                        >
                            <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                        </motion.div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                            Results Guarantee
                        </h3>

                        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                            We guarantee to identify and fix the specific issues that are costing you conversions.
                            You'll see measurable improvements or we work until you do.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                        >
                            100% Results
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16 lg:mt-20"
                >
                    <p className="text-lg sm:text-xl text-green-400 font-semibold mb-4 sm:mb-6">
                        Ready to transform your funnel with zero risk?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Start Your Risk-Free Analysis
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default GuaranteeSection;
