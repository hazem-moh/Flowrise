import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    CheckCircle,
    Clock,
    DollarSign,
    Shield,
    Users,
    Target,
    MessageSquare,
    TrendingUp,
    Lightbulb,
    FileText,
    Zap
} from 'lucide-react';

const WhatToExpectPage = () => {
    const callSteps = [
        {
            icon: MessageSquare,
            title: "Discovery & Audit (10 mins)",
            description: "We'll analyze your current funnel setup, traffic sources, and conversion points to identify immediate opportunities.",
            details: [
                "Review your current marketing strategy",
                "Identify conversion bottlenecks",
                "Assess your target audience alignment"
            ]
        },
        {
            icon: Target,
            title: "Strategy Session (15 mins)",
            description: "Based on our audit, we'll create a custom roadmap to get you to $30K/month with proven frameworks.",
            details: [
                "Custom funnel architecture design",
                "Traffic optimization recommendations",
                "Conversion rate improvement tactics"
            ]
        },
        {
            icon: TrendingUp,
            title: "Growth Plan (10 mins)",
            description: "We'll outline the exact steps, timeline, and resources needed to implement your new high-converting funnel.",
            details: [
                "90-day implementation timeline",
                "Required tools and integrations",
                "Expected ROI projections"
            ]
        }
    ];

    const whatYouGet = [
        {
            icon: FileText,
            title: "Custom Funnel Blueprint",
            description: "A detailed document outlining your personalized funnel strategy"
        },
        {
            icon: Lightbulb,
            title: "Quick Win Recommendations",
            description: "3-5 immediate changes you can make to boost conversions today"
        },
        {
            icon: Zap,
            title: "Revenue Acceleration Plan",
            description: "Step-by-step roadmap to scale from your current revenue to $30K+/month"
        }
    ];

    const guarantees = [
        "You'll walk away with at least 3 actionable strategies",
        "We'll identify your biggest conversion leak",
        "No-pitch zone - pure value unless we're a perfect fit",
        "If you don't get value, we'll refund your time with a $100 gift card"
    ];

    const handleBookCall = () => {
        const redirectUrl = window.location.origin + '/call-booked';
        const calendlyUrl = `https://calendly.com/hazemmohamed345674/new-meeting?redirect_url=${encodeURIComponent(redirectUrl)}`;
        window.open(calendlyUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-deep-space-900 via-deep-space-800 to-electric-indigo-700">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
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
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8"
                        >
                            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-flow-purple-500 to-flow-blue-500 bg-clip-text text-transparent mb-2">
                                🌊 FLOWRISE
                            </h1>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            What To Expect On{' '}
                            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                Your Strategy Call
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        >
                            A 35-minute deep-dive session where we audit your current setup,
                            identify your biggest opportunities, and create a custom roadmap to $30K+/month.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center justify-center gap-8 text-gray-400 mb-12"
                        >
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-flow-purple-400" />
                                <span>35 minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-flow-blue-400" />
                                <span>1-on-1 session</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-green-400" />
                                <span>Completely free</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Call Flow Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="mb-16"
                    >
                        <h3 className="text-3xl font-bold text-white text-center mb-12">
                            Here's How The Call Will Flow:
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            {callSteps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                                        className="relative"
                                    >
                                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 h-full">
                                            {/* Step Number */}
                                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-flow-purple-600 to-flow-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>

                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-16 h-16 bg-gradient-to-br from-flow-purple-600 to-flow-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-glow"
                                            >
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </motion.div>

                                            <h4 className="text-xl font-bold text-white mb-3">
                                                {step.title}
                                            </h4>

                                            <p className="text-gray-300 mb-4 leading-relaxed">
                                                {step.description}
                                            </p>

                                            <ul className="space-y-2">
                                                {step.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-400">
                                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* What You Get Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                        className="mb-16"
                    >
                        <h3 className="text-3xl font-bold text-white text-center mb-12">
                            What You'll Walk Away With:
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            {whatYouGet.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow"
                                        >
                                            <IconComponent className="w-10 h-10 text-white" />
                                        </motion.div>

                                        <h4 className="text-xl font-bold text-white mb-3">
                                            {item.title}
                                        </h4>

                                        <p className="text-gray-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Guarantee Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.7 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-xl rounded-3xl p-8 border border-green-500/30 max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Our Call Guarantee:
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {guarantees.map((guarantee, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 leading-relaxed">
                                            {guarantee}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
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
                                className="text-5xl mb-6"
                            >
                                🚀
                            </motion.div>

                            <h3 className="text-3xl font-bold text-white mb-4">
                                Ready To Get Started?
                            </h3>

                            <p className="text-gray-300 mb-8 text-lg">
                                Book your free strategy call now and discover how to build
                                a funnel that actually converts visitors into customers.
                            </p>

                            <motion.button
                                onClick={handleBookCall}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full relative group overflow-hidden flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 hover:from-green-700 hover:via-green-600 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg border border-green-400/20"
                            >
                                <Calendar className="w-6 h-6" />
                                <span className="font-bold text-lg tracking-wide">
                                    Book My Free Strategy Call
                                </span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="text-xl"
                                >
                                    →
                                </motion.div>
                            </motion.button>

                            <p className="text-xs text-gray-400 mt-4">
                                This call is 100% free with no strings attached
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhatToExpectPage;
