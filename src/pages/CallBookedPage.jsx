import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    Calendar,
    Clock,
    Mail,
    Phone,
    FileText,
    Zap,
    Shield,
    MessageSquare
} from 'lucide-react';

const CallBookedPage = () => {
    const [showConfetti, setShowConfetti] = useState(false);

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

    const nextSteps = [
        {
            icon: Mail,
            title: "Check Your Email",
            description: "You'll receive a calendar invite with the Zoom link within 2 minutes.",
            timeframe: "Within 2 minutes"
        },
        {
            icon: FileText,
            title: "Prepare Your Info",
            description: "Gather details about your current funnel, traffic sources, and revenue goals.",
            timeframe: "Before the call"
        },
        {
            icon: MessageSquare,
            title: "Join the Call",
            description: "Click the Zoom link in your calendar invite at the scheduled time.",
            timeframe: "At your scheduled time"
        }
    ];

    const whatToBring = [
        "Current website/funnel URL",
        "Monthly traffic numbers (if available)",
        "Current conversion rates (if known)",
        "Your main traffic sources",
        "Revenue goals for the next 90 days"
    ];

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
                <div className="max-w-5xl mx-auto text-center">
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
                        Your Call Is{' '}
                        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                            Booked!
                        </span>{' '}
                        🎉
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Awesome! I'm excited to help you build a funnel that actually converts.
                        Here's what happens next:
                    </motion.p>

                    {/* Next Steps Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">What Happens Next:</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {nextSteps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                                        className="relative"
                                    >
                                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 h-full">
                                            {/* Step Number */}
                                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-flow-purple-600 to-flow-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>

                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-glow mx-auto"
                                            >
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </motion.div>

                                            <h3 className="text-xl font-bold text-white mb-3">
                                                {step.title}
                                            </h3>

                                            <p className="text-gray-300 mb-4 leading-relaxed">
                                                {step.description}
                                            </p>

                                            <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400 font-medium">
                                                {step.timeframe}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* What to Bring Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-flow-purple-900/20 to-flow-blue-900/10 backdrop-blur-xl rounded-3xl p-8 border border-flow-purple-500/30 max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <FileText className="w-12 h-12 text-flow-purple-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    What to Prepare for Our Call:
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Having this info ready will help us maximize your 35 minutes together:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {whatToBring.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 leading-relaxed">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Guarantee Reminder */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-xl rounded-3xl p-8 border border-green-500/30 max-w-3xl mx-auto">
                            <div className="text-center">
                                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    My Personal Guarantee:
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    If you don't walk away with at least 3 actionable strategies to improve your funnel,
                                    I'll send you a <span className="text-green-400 font-bold">$100 gift card</span> for wasting your time.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">
                            Questions before our call?
                        </h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-flow-blue-400" />
                                <span>hazemmohamed345674@gmail.com</span>
                            </div>
                            <div className="hidden sm:block w-px h-5 bg-gray-600"></div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-green-400" />
                                <span>Text/Call if urgent</span>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2.7 }}
                            className="mt-8"
                        >
                            <p className="text-sm text-gray-500">
                                Looking forward to our conversation! 🚀
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CallBookedPage;
