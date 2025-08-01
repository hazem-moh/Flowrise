import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ExternalLink, Play, ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
    const [currentWaveOffset, setCurrentWaveOffset] = useState(0);
    const [typedText, setTypedText] = useState('');
    const fullText = "Ready to Build a Funnel That Converts?";

    // Typewriter effect
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    // Wave animation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWaveOffset(prev => (prev + 1) % 360);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-deep-space-900 via-deep-space-800 to-electric-indigo-700 overflow-hidden flex items-center">
            {/* Animated Wave Background */}
            <div className="absolute inset-0 opacity-30">
                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1200 600"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d={`M0,300 Q300,${250 + Math.sin(currentWaveOffset * Math.PI / 180) * 50} 600,300 T1200,300 L1200,600 L0,600 Z`}
                        fill="url(#waveGradient1)"
                        animate={{
                            d: [
                                `M0,300 Q300,${250 + Math.sin(currentWaveOffset * Math.PI / 180) * 50} 600,300 T1200,300 L1200,600 L0,600 Z`,
                                `M0,320 Q300,${270 + Math.sin((currentWaveOffset + 90) * Math.PI / 180) * 50} 600,320 T1200,320 L1200,600 L0,600 Z`,
                                `M0,300 Q300,${250 + Math.sin(currentWaveOffset * Math.PI / 180) * 50} 600,300 T1200,300 L1200,600 L0,600 Z`,
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.path
                        d={`M0,350 Q300,${300 + Math.sin((currentWaveOffset + 45) * Math.PI / 180) * 30} 600,350 T1200,350 L1200,600 L0,600 Z`}
                        fill="url(#waveGradient2)"
                        animate={{
                            d: [
                                `M0,350 Q300,${300 + Math.sin((currentWaveOffset + 45) * Math.PI / 180) * 30} 600,350 T1200,350 L1200,600 L0,600 Z`,
                                `M0,370 Q300,${320 + Math.sin((currentWaveOffset + 135) * Math.PI / 180) * 30} 600,370 T1200,370 L1200,600 L0,600 Z`,
                                `M0,350 Q300,${300 + Math.sin((currentWaveOffset + 45) * Math.PI / 180) * 30} 600,350 T1200,350 L1200,600 L0,600 Z`,
                            ]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <defs>
                        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                        </linearGradient>
                        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
                            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-gradient-to-r from-flow-purple-400 to-flow-blue-400 rounded-full opacity-60"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25, 0],
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Typewriter Headline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                            {typedText}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="bg-gradient-to-r from-flow-purple-400 to-flow-blue-400 bg-clip-text text-transparent"
                            >
                                |
                            </motion.span>
                        </h2>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3 }}
                        className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
                    >
                        Let's build your system and hit $30K/month without burning out.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3.5 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                    >
                        {/* Primary CTA - Book Call */}
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-flow-purple-600 to-flow-blue-600 text-white font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-3 text-lg"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Phone className="w-6 h-6" />
                            </motion.div>
                            Book My Free Strategy Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                            {/* Pulse effect */}
                            <motion.div
                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-flow-purple-500 to-flow-blue-500 opacity-0 group-hover:opacity-20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.button>

                        {/* Secondary CTA - Examples */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 border-2 border-flow-purple-500 text-flow-purple-400 font-bold rounded-xl hover:bg-flow-purple-500 hover:text-white transition-all duration-300 flex items-center gap-3 text-lg"
                        >
                            <ExternalLink className="w-5 h-5" />
                            See Funnel Examples
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span>5 spots left this month</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                            <span>Average ROI: 800%</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                            <span>60-day guarantee</span>
                        </div>
                    </motion.div>

                    {/* Floating CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 4.5 }}
                        whileHover={{ y: -10 }}
                        className="mt-16 max-w-2xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                    backgroundSize: '20px 20px'
                                }}></div>
                            </div>

                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    🚀 Ready to Scale? Here's What Happens Next:
                                </h3>

                                <div className="space-y-3 text-left">
                                    {[
                                        "Book your free 15-min strategy call",
                                        "We analyze your current funnel and offer",
                                        "Get a custom roadmap to $30K/month",
                                        "Start building your conversion machine"
                                    ].map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 5 + index * 0.1 }}
                                            className="flex items-center gap-3 text-gray-300"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-flow-purple-500 to-flow-blue-500 flex items-center justify-center text-white text-sm font-bold">
                                                {index + 1}
                                            </div>
                                            <span>{step}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Claim Your Spot Now →
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
