import React from 'react';
import { motion } from 'framer-motion';
import { Shield, DollarSign } from 'lucide-react';

const GuaranteeSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-deep-space-900 to-deep-space-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-green-400 rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-green-500 rounded-full"
                />
            </div>

            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8">
                        Our{' '}
                        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                            Guarantee
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        We Put Our Skin in the Game
                    </p>
                </motion.div>

                {/* Main Guarantee Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto relative"
                >
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-green-500 rounded-3xl blur-sm opacity-75"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-green-500 rounded-3xl animate-pulse opacity-50"></div>

                    <div className="relative bg-gradient-to-br from-deep-space-800 to-deep-space-900 rounded-3xl p-8 lg:p-12 border-2 border-green-400/50">
                        {/* 3D Shield Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                type: "spring",
                                stiffness: 200
                            }}
                            viewport={{ once: true }}
                            className="flex justify-center mb-8"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotateY: [0, 10, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-glow relative"
                                >
                                    <Shield className="w-12 h-12 text-white" />

                                    {/* Dollar Sign Overlay */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg"
                                    >
                                        <DollarSign className="w-4 h-4 text-white font-bold" />
                                    </motion.div>
                                </motion.div>

                                {/* Floating Elements */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-green-400 rounded-full"
                                        style={{
                                            left: `${Math.cos(i * 60 * Math.PI / 180) * 60 + 50}%`,
                                            top: `${Math.sin(i * 60 * Math.PI / 180) * 60 + 50}%`,
                                        }}
                                        animate={{
                                            scale: [0, 1, 0],
                                            opacity: [0, 1, 0],
                                            y: [0, -20, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.5,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Guarantee Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                If we don't help you add{' '}
                                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                    $10K+ in 60 days
                                </span>{' '}
                                — you don't pay.
                            </h3>

                            <p className="text-xl text-gray-300 mb-8">
                                And you keep the systems we build. No risk.
                            </p>

                            {/* Guarantee Features */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        icon: "💰",
                                        title: "$10K+ Minimum",
                                        description: "Or you don't pay a dime"
                                    },
                                    {
                                        icon: "⏰",
                                        title: "60 Day Timeline",
                                        description: "Fast results guaranteed"
                                    },
                                    {
                                        icon: "🎁",
                                        title: "Keep Everything",
                                        description: "Systems stay yours forever"
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl p-6 border border-green-400/30 hover:border-green-400/50 transition-all duration-300"
                                    >
                                        <div className="text-3xl mb-3">{feature.icon}</div>
                                        <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                                        <p className="text-gray-300 text-sm">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10">Claim Your Risk-Free Spot</span>

                                {/* Button Animation Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            <p className="text-sm text-gray-400 mt-4">
                                Limited spots available. We only work with 5 clients per month.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GuaranteeSection;
