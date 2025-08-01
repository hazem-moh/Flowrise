import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, DollarSign, Download, CheckCircle, Mail } from 'lucide-react';

const LeadMagnetPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const benefits = [
        {
            icon: Target,
            title: "The 'Frictionless Funnel' blueprint",
            description: "Step-by-step framework to eliminate conversion leaks"
        },
        {
            icon: Brain,
            title: "How to write no-brainer offers that sell",
            description: "Psychology-driven strategies that make saying 'no' impossible"
        },
        {
            icon: DollarSign,
            title: "The #1 reason most funnels fail",
            description: "And how to fix it in one sentence"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && name) {
            setIsSubmitted(true);
            // Here you would typically send the data to your email service
            setTimeout(() => {
                window.location.href = '/thank-you';
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-deep-space-900 via-deep-space-800 to-electric-indigo-700 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 border border-flow-purple-500 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-flow-blue-500 rounded-full"
                />
            </div>

            <div className="container mx-auto px-6 py-20 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-8"
                            >
                                <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-flow-purple-500 to-flow-blue-500 bg-clip-text text-transparent mb-2">
                                    🌊 FLOWRISE
                                </h1>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                            >
                                Get The Exact Funnel Strategy That Scales Info Products to{' '}
                                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                    $30K/Month
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-xl text-gray-300 mb-8"
                            >
                                — Without Paid Ads
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-lg text-gray-400 mb-12 leading-relaxed"
                            >
                                No theory. Just the frameworks, tech stack, and copy strategy we use to build
                                $30K–$100K months for coaches & creators.
                            </motion.p>

                            {/* Benefits List */}
                            <div className="space-y-6 mb-12">
                                {benefits.map((benefit, index) => {
                                    const IconComponent = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-flow-purple-600 to-flow-blue-600 rounded-xl flex items-center justify-center shadow-glow"
                                            >
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </motion.div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-flow-purple-400 transition-colors duration-300">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Right Column - Opt-in Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 relative overflow-hidden">
                                {/* Form Header */}
                                <div className="text-center mb-8">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="inline-block text-4xl mb-4"
                                    >
                                        📁
                                    </motion.div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                        Download Instantly
                                    </h3>
                                    <p className="text-gray-300">
                                        Join 10,000+ entrepreneurs who've downloaded this blueprint
                                    </p>
                                </div>

                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Input */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.8 }}
                                        >
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                First Name *
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 bg-deep-space-800/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-flow-purple-500 focus:outline-none transition-all duration-300"
                                                placeholder="Enter your first name"
                                            />
                                        </motion.div>

                                        {/* Email Input */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.9 }}
                                        >
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Email Address *
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 bg-deep-space-800/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-flow-purple-500 focus:outline-none transition-all duration-300"
                                                placeholder="Enter your email address"
                                            />
                                        </motion.div>

                                        {/* Submit Button */}
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 1 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg"
                                        >
                                            <Download className="w-5 h-5" />
                                            Get Instant Access
                                        </motion.button>

                                        <p className="text-xs text-gray-400 text-center">
                                            We respect your privacy. Unsubscribe at any time.
                                        </p>
                                    </form>
                                ) : (
                                    // Success State
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-center py-8"
                                    >
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 10, 0]
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                repeat: 3
                                            }}
                                            className="inline-block mb-6"
                                        >
                                            <CheckCircle className="w-16 h-16 text-green-400" />
                                        </motion.div>

                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            Perfect! Check Your Email 📧
                                        </h3>
                                        <p className="text-gray-300 mb-6">
                                            Your blueprint is on its way. Check your inbox (and spam folder) in the next few minutes.
                                        </p>

                                        <motion.div
                                            animate={{
                                                scale: [1, 1.05, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="text-sm text-gray-400"
                                        >
                                            Redirecting you...
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-glow"
                                >
                                    <Mail className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>

                            {/* Glowing Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-3xl blur-xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadMagnetPage;
