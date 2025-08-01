import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    Search,
    Zap,
    Trophy,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Clock,
    Users
} from 'lucide-react';
import ReactiveIcon from './ReactiveIcon';

const HowItWorksSection = () => {
    const steps = [
        {
            icon: Calendar,
            step: "1",
            title: "Book a free strategy call",
            description: "15-minute chat to understand your business, goals, and current challenges",
            shortDesc: "Free 15-min strategy session",
            color: "from-flowrise-blue-500 to-flowrise-blue-700",
            timeline: "Day 1"
        },
        {
            icon: Search,
            step: "2",
            title: "We audit your current funnel + offer",
            description: "Deep dive analysis to find conversion leaks, optimization opportunities, and growth potential",
            shortDesc: "Complete funnel audit & analysis",
            color: "from-flowrise-green-500 to-flowrise-green-700",
            timeline: "Week 1"
        },
        {
            icon: Zap,
            step: "3",
            title: "If we're a fit, we build + launch your system",
            description: "Complete funnel construction, copywriting, design, and deployment in 4–6 weeks",
            shortDesc: "Full system build & launch",
            color: "from-flowrise-navy-500 to-flowrise-navy-700",
            timeline: "Weeks 2-6"
        },
        {
            icon: Trophy,
            step: "4",
            title: "You get clients while we optimize",
            description: "Continuous improvement, A/B testing, and scaling for maximum ROI and growth",
            shortDesc: "Ongoing optimization & scaling",
            color: "from-flowrise-blue-600 to-flowrise-green-600",
            timeline: "Ongoing"
        }
    ];

    return (
        <section id="how-it-works" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-deep-space-800 to-deep-space-900 relative overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Enhanced Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    {/* Process Badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-xl rounded-full px-8 py-4 border border-blue-400/30 mb-8"
                    >
                        <Sparkles className="w-6 h-6 text-green-400" />
                        <span className="text-blue-200 font-semibold text-lg">Simple Process</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
                        How It{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent relative">
                            Works
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                        </span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-semibold">
                            Simple{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                4-step process
                            </span>{' '}
                            to transform your business
                        </p>
                        <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            Into a{' '}
                            <span className="text-green-400 font-semibold">revenue-generating machine</span>{' '}
                            that runs on autopilot
                        </p>
                    </motion.div>
                </motion.div>

                {/* Enhanced Desktop Grid View */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8 max-w-7xl mx-auto mb-20">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Connection Line */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "calc(100% + 1.5rem)" }}
                                        transition={{ duration: 1, delay: index * 0.15 + 0.4 }}
                                        viewport={{ once: true }}
                                        className="absolute top-16 left-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 z-0 rounded-full shadow-sm"
                                        style={{ transform: "translateX(0.75rem)" }}
                                    >
                                        {/* Animated glow */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-sm opacity-60"
                                            animate={{
                                                opacity: [0.3, 0.7, 0.3]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.3
                                            }}
                                        />
                                    </motion.div>
                                )}

                                <motion.div
                                    whileHover={{
                                        scale: 1.03,
                                        y: -5
                                    }}
                                    className="relative bg-gradient-to-br from-white/10 via-white/6 to-white/8 backdrop-blur-2xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/10 overflow-hidden min-h-[300px] flex flex-col"
                                >
                                    {/* Background Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl" />

                                    {/* Timeline Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-full px-3 py-1.5 border border-green-400/30 mb-6 self-start relative z-10"
                                    >
                                        <Clock className="w-3 h-3 text-green-400" />
                                        <span className="text-green-200 text-xs font-bold">{step.timeline}</span>
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true }}
                                        className="mb-6 relative z-10"
                                    >
                                        <ReactiveIcon
                                            icon={IconComponent}
                                            size="lg"
                                            variant="float"
                                            color="gradient"
                                            className="mx-auto shadow-lg shadow-blue-500/20"
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                                        viewport={{ once: true }}
                                        className="flex-1 flex flex-col relative z-10 text-center"
                                    >
                                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
                                            {step.description}
                                        </p>
                                    </motion.div>

                                    {/* Enhanced Shadow */}
                                    <div className="absolute -bottom-2 left-2 right-2 h-4 bg-black/15 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Enhanced Mobile View */}
                <div className="lg:hidden mb-20">
                    <div className="space-y-8">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    viewport={{ once: true }}
                                    className="relative group"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -3 }}
                                        className="relative bg-gradient-to-br from-white/10 via-white/6 to-white/8 backdrop-blur-2xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/10 overflow-hidden min-h-[280px]"
                                    >
                                        {/* Background Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                        {/* Step Number Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.2 + 0.3,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            viewport={{ once: true }}
                                            className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 text-white font-bold text-xl z-20 border-2 border-white/20"
                                        >
                                            <span className="relative z-10">{step.step}</span>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"
                                                animate={{
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.3
                                                }}
                                            />
                                        </motion.div>

                                        {/* Timeline Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                                            viewport={{ once: true }}
                                            className="absolute top-6 right-6 bg-gradient-to-r from-green-500/90 to-blue-500/90 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20"
                                        >
                                            <span className="text-white text-sm font-semibold flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {step.timeline}
                                            </span>
                                        </motion.div>

                                        {/* ReactiveIcon */}
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                            viewport={{ once: true }}
                                            className="mb-8 mt-4"
                                        >
                                            <ReactiveIcon
                                                icon={IconComponent}
                                                size="xl"
                                                variant="float"
                                                color="gradient"
                                                className="mx-auto"
                                            />
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                                            viewport={{ once: true }}
                                            className="text-center"
                                        >
                                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                                {step.description}
                                            </p>
                                        </motion.div>

                                        {/* 3D Shadow */}
                                        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Enhanced Progress Line Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className="hidden lg:block max-w-6xl mx-auto mb-20"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="relative h-2 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-full mx-auto shadow-lg shadow-blue-500/30"
                    >
                        {/* Animated glow */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-sm opacity-60"
                            animate={{
                                opacity: [0.4, 0.8, 0.4],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Progress indicator */}
                        <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
                            animate={{
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                    "0 0 0 0 rgba(255, 255, 255, 0.7)",
                                    "0 0 0 10px rgba(255, 255, 255, 0)",
                                    "0 0 0 0 rgba(255, 255, 255, 0)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 2
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Enhanced Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="relative bg-gradient-to-br from-white/8 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-16 border border-white/20 max-w-5xl mx-auto overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-5 right-5 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-5 left-5 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            {/* Ready Badge */}
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-green-400/30 mb-8">
                                <Trophy className="w-6 h-6 text-green-400" />
                                <span className="text-green-200 font-semibold text-lg">Ready to Start?</span>
                            </div>

                            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                                Ready to{' '}
                                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                    Get Started?
                                </span>
                            </h3>

                            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
                                Join{' '}
                                <span className="text-green-400 font-semibold">hundreds of successful entrepreneurs</span>{' '}
                                who've transformed their businesses with our proven funnel system.
                            </p>

                            {/* Enhanced Benefits Grid */}
                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                                {[
                                    { text: "No setup fees or hidden costs", icon: CheckCircle },
                                    { text: "Complete funnel delivered in 4-6 weeks", icon: Clock },
                                    { text: "Dedicated project manager", icon: Users },
                                    { text: "Full training on your new system", icon: Trophy }
                                ].map((benefit, index) => {
                                    const IconComponent = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group flex items-center gap-4 p-4 lg:p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0">
                                                <ReactiveIcon
                                                    icon={IconComponent}
                                                    size="sm"
                                                    variant="bounce"
                                                    color="gradient"
                                                />
                                            </div>
                                            <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300 font-medium">
                                                {benefit.text}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-6 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-green-500/25 transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start Your Transformation Now
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-6 h-6" />
                                    </motion.div>
                                </span>

                                {/* Button glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
