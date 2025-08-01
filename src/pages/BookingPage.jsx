import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, DollarSign, Shield, Users } from 'lucide-react';

const BookingPage = () => {
    const benefits = [
        {
            icon: CheckCircle,
            title: "Custom Funnel Audit",
            description: "We'll analyze your current setup and identify conversion leaks"
        },
        {
            icon: DollarSign,
            title: "Revenue Roadmap",
            description: "Get a clear path to your first $30K month"
        },
        {
            icon: Shield,
            title: "No-Pitch Zone",
            description: "Pure value - we only offer solutions if we're a perfect fit"
        }
    ];

    const guarantees = [
        "If we don't help you add $10K+ in 60 days — you don't pay",
        "Keep all systems we build, even if you don't continue",
        "Complete funnel delivered in 4-6 weeks",
        "Dedicated project manager for your success"
    ];

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
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:sticky lg:top-20"
                        >
                            {/* Header */}
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
                                Let's Build a Funnel That{' '}
                                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                    Actually Converts
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-xl text-gray-300 mb-8 leading-relaxed"
                            >
                                On this call, we'll audit your offer, find your biggest conversion leaks,
                                and show you how to add $10K–$30K/month — without burnout.
                            </motion.p>

                            {/* What You'll Get */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mb-8"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    What You'll Get On This Call:
                                </h3>

                                <div className="space-y-4">
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
                                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-flow-purple-400 transition-colors duration-300">
                                                        {benefit.title}
                                                    </h4>
                                                    <p className="text-gray-300 leading-relaxed">
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Guarantee Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30 mb-8"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-8 h-8 text-green-400" />
                                    <h3 className="text-xl font-bold text-white">
                                        Our Guarantee Recap:
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {guarantees.map((guarantee, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-sm leading-relaxed">
                                                {guarantee}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Social Proof */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.3 }}
                                className="flex items-center gap-4 text-gray-400 text-sm"
                            >
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <span>500+ successful funnels built</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Average setup: 4-6 weeks</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Booking Widget */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                                {/* Calendar Header */}
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
                                        📅
                                    </motion.div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                        Book Your Free Call
                                    </h3>
                                    <p className="text-gray-300">
                                        Choose a time that works for you
                                    </p>
                                </div>

                                {/* Mock Calendar Booking Interface */}
                                <div className="space-y-6">
                                    {/* Time Zone Selector */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Time Zone
                                        </label>
                                        <select className="w-full px-4 py-3 bg-deep-space-800/50 border border-white/20 rounded-xl text-white focus:border-flow-purple-500 focus:outline-none transition-all duration-300">
                                            <option>Eastern Time (ET)</option>
                                            <option>Pacific Time (PT)</option>
                                            <option>Central Time (CT)</option>
                                            <option>Mountain Time (MT)</option>
                                        </select>
                                    </motion.div>

                                    {/* Mock Calendar Grid */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.9 }}
                                    >
                                        <h4 className="text-lg font-semibold text-white mb-4">
                                            Available Times This Week
                                        </h4>

                                        <div className="grid grid-cols-1 gap-3">
                                            {[
                                                { day: 'Tomorrow', date: 'Feb 1', times: ['9:00 AM', '2:00 PM', '4:00 PM'] },
                                                { day: 'Thursday', date: 'Feb 2', times: ['10:00 AM', '1:00 PM', '3:00 PM'] },
                                                { day: 'Friday', date: 'Feb 3', times: ['9:00 AM', '11:00 AM', '2:00 PM'] },
                                            ].map((daySlot, dayIndex) => (
                                                <motion.div
                                                    key={dayIndex}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 1 + dayIndex * 0.1 }}
                                                    className="bg-deep-space-800/30 rounded-xl p-4 border border-white/10"
                                                >
                                                    <div className="text-white font-semibold mb-3">
                                                        {daySlot.day}, {daySlot.date}
                                                    </div>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        {daySlot.times.map((time, timeIndex) => (
                                                            <motion.button
                                                                key={timeIndex}
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="px-3 py-2 bg-gradient-to-r from-flow-purple-600 to-flow-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-glow transition-all duration-300"
                                                            >
                                                                {time}
                                                            </motion.button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Call to Action */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 1.3 }}
                                        className="text-center pt-6 border-t border-white/10"
                                    >
                                        <p className="text-red-400 font-semibold mb-4 flex items-center justify-center gap-2">
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className="w-2 h-2 bg-red-400 rounded-full"
                                            />
                                            Only 3 spots left this week
                                        </p>

                                        <motion.button
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg flex items-center justify-center gap-2"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            Confirm My Free Call
                                        </motion.button>

                                        <p className="text-xs text-gray-400 mt-4">
                                            Call will be recorded for quality assurance
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Floating Calendar Icon */}
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
                                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-flow-purple-500 to-flow-blue-500 rounded-xl flex items-center justify-center shadow-glow"
                                >
                                    <Calendar className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>

                            {/* Glowing Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-flow-purple-500/20 to-flow-blue-500/20 rounded-3xl blur-xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
