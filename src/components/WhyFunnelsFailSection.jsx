import React from 'react';
import { motion } from 'framer-motion';
import { X, AlertTriangle, MessageSquare, FileText, Settings, RotateCcw, CheckCircle, Zap } from 'lucide-react';
import ReactiveIcon from './ReactiveIcon';

const WhyFunnelsFailSection = () => {
    const failures = [
        {
            icon: MessageSquare,
            emoji: "💬",
            title: "Your offer isn't crystal clear",
            problem: "Confusing messaging kills conversions instantly",
            solution: "We craft irresistible, no-brainer offers that sell themselves",
            color: "from-red-500 to-red-600"
        },
        {
            icon: FileText,
            emoji: "📝",
            title: "Your copy is weak",
            problem: "Generic copy doesn't connect with buyers",
            solution: "Our copywriters extract deep buyer psychology and triggers",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: Settings,
            emoji: "⚙️",
            title: "You're using Frankensteined tech stacks",
            problem: "Broken integrations lose qualified leads",
            solution: "We build cohesive, reliable systems that never break",
            color: "from-red-600 to-red-700"
        },
        {
            icon: RotateCcw,
            emoji: "🔄",
            title: "You're trying to do everything manually",
            problem: "Manual work doesn't scale past 6-figures",
            solution: "We automate your entire sales process from lead to close",
            color: "from-red-500 to-orange-600"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-flowrise-navy-800 via-flowrise-navy-900 to-flowrise-navy-800 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-400/10 rounded-full blur-2xl"></div>

                {/* Animated warning patterns */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-72 h-72 border border-red-500/30 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-56 h-56 border border-orange-400/25 rounded-full"
                />
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
                    {/* Warning Badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl rounded-full px-8 py-4 border border-red-400/30 mb-8"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <AlertTriangle className="w-6 h-6 text-red-400" />
                        </motion.div>
                        <span className="text-red-200 font-semibold text-lg">Common Funnel Failures</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
                        Why Funnels{' '}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent relative">
                            Fail
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
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
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-bold">
                            Funnels Don't Fail Because You{' '}
                            <span className="text-red-400">"Need More Traffic."</span>
                        </p>
                        <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            They fail because of these{' '}
                            <span className="text-orange-400 font-semibold">4 critical mistakes</span>.{' '}
                            We fix them — fast.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Enhanced Failure Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto mb-20">
                    {failures.map((failure, index) => {
                        const IconComponent = failure.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, rotateY: 90, z: -100 }}
                                whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    z: 50
                                }}
                                className="group relative"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className="relative bg-gradient-to-br from-white/8 via-white/4 to-transparent backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-red-500/30 hover:border-red-400/60 transition-all duration-500 h-full overflow-hidden hover:bg-gradient-to-br hover:from-red-500/25 hover:via-orange-500/20 hover:to-red-600/25">
                                    {/* Main Hover Background - Strong and Visible */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-orange-500/25 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                                    {/* Secondary animated background */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                                        style={{
                                            background: 'linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(251, 146, 60, 0.15))'
                                        }}
                                        animate={{
                                            background: [
                                                'linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(251, 146, 60, 0.15))',
                                                'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(239, 68, 68, 0.15))',
                                                'linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(251, 146, 60, 0.15))'
                                            ]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />

                                    {/* Failure Icon with ReactiveIcon */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true }}
                                        className="mb-8"
                                    >
                                        <ReactiveIcon
                                            icon={IconComponent}
                                            size="lg"
                                            variant="pulse"
                                            color="error"
                                            className="mx-auto"
                                        />
                                    </motion.div>

                                    {/* Problem State (Always Visible) */}
                                    <motion.div
                                        className="relative z-10"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center gap-2 mb-4">
                                            <motion.div
                                                whileHover={{ rotate: 180, scale: 1.2 }}
                                                className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center"
                                            >
                                                <X className="w-5 h-5 text-red-400" />
                                            </motion.div>
                                            <span className="text-red-400 font-semibold text-sm">PROBLEM</span>
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                                            {failure.title}
                                        </h3>
                                        <p className="text-red-300 text-base leading-relaxed">
                                            {failure.problem}
                                        </p>
                                    </motion.div>

                                    {/* Enhanced Hover Effects - Cleaned up */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-red-400/15 via-orange-400/12 to-red-500/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        animate={{
                                            scale: [1, 1.02, 1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Pulsing Border */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl border border-red-400/40 opacity-0 group-hover:opacity-100"
                                        animate={{
                                            scale: [1, 1.03, 1],
                                            opacity: [0.4, 0.8, 0.4]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* 3D Shadow */}
                                    <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Enhanced Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="relative bg-gradient-to-br from-white/8 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-16 border border-white/20 max-w-4xl mx-auto overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-5 right-5 w-32 h-32 bg-flowrise-green-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-5 left-5 w-40 h-40 bg-flowrise-blue-500/10 rounded-full blur-2xl"></div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            {/* Success Badge */}
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-flowrise-green-500/20 to-flowrise-blue-500/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-flowrise-green-400/30 mb-8">
                                <CheckCircle className="w-6 h-6 text-flowrise-green-400" />
                                <span className="text-flowrise-green-200 font-semibold text-lg">We Fix Everything</span>
                            </div>

                            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                We Fix All of This —{' '}
                                <span className="bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent">
                                    Fast
                                </span>
                            </h3>

                            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Stop losing money to broken funnels.{' '}
                                <span className="text-flowrise-green-400 font-semibold">Let us build you a conversion machine</span>{' '}
                                that actually works.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-6 bg-gradient-to-r from-flowrise-blue-600 to-flowrise-green-600 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-flowrise-blue-500/25 hover:shadow-flowrise-green-500/25 transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Fix My Funnel Now
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Zap className="w-6 h-6" />
                                    </motion.div>
                                </span>

                                {/* Button glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
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

export default WhyFunnelsFailSection;
