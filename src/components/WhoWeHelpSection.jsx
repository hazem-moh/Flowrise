import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, CheckCircle, Sparkles, ArrowRight, Zap } from 'lucide-react';
import ReactiveIcon from './ReactiveIcon';

const WhoWeHelpSection = () => {
    const profiles = [
        {
            icon: Target,
            title: "Coaches",
            description: "Transform lives with high-ticket coaching programs and scale to 6-figures",
            gradient: "from-flowrise-blue-500 to-flowrise-blue-700",
            stats: "$10K-50K/month",
            features: ["High-ticket offers", "1-on-1 coaching", "Group programs"]
        },
        {
            icon: Users,
            title: "Creators",
            description: "Build massive audiences and monetize your expertise with proven systems",
            gradient: "from-flowrise-green-500 to-flowrise-green-700",
            stats: "10K+ followers",
            features: ["Content creation", "Course selling", "Community building"]
        },
        {
            icon: TrendingUp,
            title: "Consultants",
            description: "Scale your consulting practice with automation and strategic funnels",
            gradient: "from-flowrise-navy-500 to-flowrise-navy-700",
            stats: "$25K+ projects",
            features: ["Business consulting", "Strategy sessions", "Done-for-you services"]
        },
    ];

    const painPoints = [
        {
            text: "A coach, creator, or consultant with a high-ticket offer",
            icon: Target
        },
        {
            text: "Tired of funnels that don't convert and waste your ad spend",
            icon: Zap
        },
        {
            text: "Drowning in content but getting no qualified leads or sales",
            icon: Users
        },
        {
            text: "Ready to scale past $10K, $20K, or even $50K/month consistently",
            icon: TrendingUp
        },
    ];

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-flowrise-navy-900 via-flowrise-navy-800 to-flowrise-navy-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-flowrise-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-flowrise-green-500/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-flowrise-blue-400/10 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-flowrise-blue-500/20 to-flowrise-green-500/20 backdrop-blur-xl rounded-full px-6 py-3 border border-flowrise-blue-400/30 mb-8"
                    >
                        <Sparkles className="w-5 h-5 text-flowrise-green-400" />
                        <span className="text-flowrise-blue-200 font-medium">Perfect For</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
                        Who This Is{' '}
                        <span className="bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent relative">
                            For
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        If you're ready to stop struggling with ineffective funnels and start scaling your business to{' '}
                        <span className="text-flowrise-green-400 font-semibold">6-7 figures</span>...
                    </p>
                </motion.div>

                {/* Enhanced Profile Cards */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
                    {profiles.map((profile, index) => {
                        const IconComponent = profile.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    z: 50
                                }}
                                className="group relative"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Card Container */}
                                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-white/20 hover:border-flowrise-blue-400/50 transition-all duration-500 h-full overflow-hidden">
                                    {/* Animated Background Gradient */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                        animate={{
                                            background: [
                                                'linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)',
                                                'linear-gradient(135deg, rgba(34, 197, 94, 0.1), transparent)',
                                                'linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)'
                                            ]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />

                                    {/* ReactiveIcon Integration */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true }}
                                        className="mb-8"
                                    >
                                        <ReactiveIcon
                                            icon={IconComponent}
                                            size="xl"
                                            variant="float"
                                            color="gradient"
                                            className="mx-auto"
                                        />
                                    </motion.div>

                                    {/* Stats Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                                        viewport={{ once: true }}
                                        className="absolute top-6 right-6 bg-gradient-to-r from-flowrise-green-500/90 to-flowrise-blue-500/90 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20"
                                    >
                                        <span className="text-white text-sm font-semibold">{profile.stats}</span>
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-flowrise-blue-300 transition-colors duration-300">
                                            {profile.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                                            {profile.description}
                                        </p>

                                        {/* Features List */}
                                        <div className="space-y-3">
                                            {profile.features.map((feature, featureIndex) => (
                                                <motion.div
                                                    key={featureIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 + 0.6 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-3 group/feature"
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.2, rotate: 90 }}
                                                        className="w-2 h-2 bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 rounded-full group-hover/feature:shadow-lg group-hover/feature:shadow-flowrise-blue-400/50 transition-all duration-300"
                                                    />
                                                    <span className="text-gray-400 text-sm group-hover/feature:text-gray-300 transition-colors duration-300">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Hover Arrow */}
                                    <motion.div
                                        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <ArrowRight className="w-6 h-6 text-flowrise-blue-400" />
                                    </motion.div>

                                    {/* 3D Shadow Effect */}
                                    <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Enhanced Pain Points Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-white/8 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-16 border border-white/20 overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-10 right-10 w-32 h-32 bg-flowrise-blue-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-flowrise-green-500/10 rounded-full blur-2xl"></div>
                        </div>

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center mb-12 relative z-10"
                        >
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-flowrise-green-500/20 to-flowrise-blue-500/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-flowrise-green-400/30 mb-8">
                                <Sparkles className="w-6 h-6 text-flowrise-green-400" />
                                <span className="text-flowrise-green-200 font-semibold text-lg">This Is You</span>
                            </div>

                            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                If you're{' '}
                                <span className="bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent">
                                    any of these
                                </span>
                                ...
                            </h3>
                        </motion.div>

                        {/* Pain Points Grid */}
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
                            {painPoints.map((point, index) => {
                                const IconComponent = point.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="group relative"
                                    >
                                        <div className="flex items-start gap-4 p-6 lg:p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-flowrise-blue-400/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-flowrise-blue-500/10">
                                            {/* Enhanced Icon */}
                                            <div className="flex-shrink-0 mt-1">
                                                <ReactiveIcon
                                                    icon={IconComponent}
                                                    size="md"
                                                    variant="pulse"
                                                    color="gradient"
                                                />
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex-1">
                                                <p className="text-lg lg:text-xl text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                                                    {point.text}
                                                </p>
                                            </div>

                                            {/* Hover Effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-flowrise-blue-500/5 to-flowrise-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                whileHover={{
                                                    scale: [1, 1.02, 1],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Call-to-Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mt-16 relative z-10"
                        >
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-flowrise-blue-500 to-flowrise-green-500 rounded-2xl px-8 py-6 shadow-2xl shadow-flowrise-blue-500/25">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <span className="text-4xl">👉</span>
                                </motion.div>
                                <p className="text-2xl lg:text-3xl font-bold text-white">
                                    You're exactly who we help.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeHelpSection;
