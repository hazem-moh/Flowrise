import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Phone, CheckCircle, Calendar, Gift } from 'lucide-react';

const ThankYouPage = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Smooth fade-in transition
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);

        setShowConfetti(true);
        const timer = setTimeout(() => setShowConfetti(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleBookCall = () => {
        const redirectUrl = window.location.origin + '/call-booked';
        const calendlyUrl = `https://calendly.com/hazemmohamed345674/new-meeting?redirect_url=${encodeURIComponent(redirectUrl)}`;
        window.open(calendlyUrl, '_blank');
    };

    const handleGoToBlueprint = () => {
        navigate('/lead-magnet');
    };

    const confettiColors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-deep-space-900 via-deep-space-800 to-electric-indigo-700 overflow-hidden relative flex items-center justify-center">
            {/* Confetti Animation */}
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none z-20">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                                backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                                left: `${Math.random() * 100}%`,
                                top: '-10px',
                            }}
                            initial={{ y: -100, rotation: 0, opacity: 1 }}
                            animate={{
                                y: window.innerHeight + 100,
                                rotation: Math.random() * 720,
                                opacity: [1, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                ease: "easeOut",
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            )}

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
                    className="absolute top-1/4 left-1/4 w-64 h-64 border border-green-400 rounded-full"
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
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-green-500 rounded-full"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 200,
                            delay: 0.2
                        }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-glow mx-auto"
                            >
                                <CheckCircle className="w-12 h-12 text-white" />
                            </motion.div>

                            {/* Floating Elements Around Icon */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-green-400 rounded-full"
                                    style={{
                                        left: `${Math.cos(i * 60 * Math.PI / 180) * 80 + 50}%`,
                                        top: `${Math.sin(i * 60 * Math.PI / 180) * 80 + 50}%`,
                                    }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                        y: [0, -20, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 0.5 + i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        "Your Blueprint Is{' '}
                        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                            On Its Way
                        </span>{' '}
                        🚀"
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Check your email (and spam folder) for your instant download.
                        While you wait — want to shortcut the process?
                    </motion.p>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 mb-12 relative overflow-hidden"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                backgroundSize: '30px 30px'
                            }}></div>
                        </div>

                        <div className="relative">
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-block text-4xl mb-6"
                            >
                                🎯
                            </motion.div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                Book a Free 15-Min Strategy Call
                            </h2>

                            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                We'll walk you through exactly how to apply this system to your offer and
                                show you where you're leaving money on the table.
                            </p>

                            {/* Benefits */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        icon: Calendar,
                                        title: "Custom Roadmap",
                                        description: "Tailored strategy for your business"
                                    },
                                    {
                                        icon: Gift,
                                        title: "Bonus Resources",
                                        description: "Extra templates and tools"
                                    },
                                    {
                                        icon: Rocket,
                                        title: "Fast Implementation",
                                        description: "Start seeing results immediately"
                                    }
                                ].map((benefit, index) => {
                                    const IconComponent = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-12 h-12 bg-gradient-to-br from-flow-purple-600 to-flow-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-glow"
                                            >
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </motion.div>
                                            <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                            <p className="text-gray-300 text-sm">{benefit.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Main CTA Button */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 1.3 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleBookCall}
                                className="group relative px-8 py-4 bg-gradient-to-r from-flow-purple-600 to-flow-blue-600 text-white font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg flex items-center gap-3 mx-auto cursor-pointer"
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
                                Book My Free Call Now

                                {/* Button Animation Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-flow-purple-500 to-flow-blue-500 rounded-xl opacity-0 group-hover:opacity-20"
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

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.5 }}
                                className="text-sm text-gray-400 mt-4"
                            >
                                ⚠️ Spots are limited. We only work with 5 clients/month.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Alternative Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="text-center"
                    >
                        <p className="text-gray-400 mb-4">
                            Prefer to implement on your own first?
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleGoToBlueprint}
                            className="px-6 py-3 border-2 border-flow-purple-500 text-flow-purple-400 font-semibold rounded-lg hover:bg-flow-purple-500 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            Just Send Me The Blueprint
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
