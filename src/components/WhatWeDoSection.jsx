import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
    Search,
    Target,
    PenTool,
    Palette,
    Settings,
    Rocket,
    Phone,
    TrendingUp,
    Sparkles,
    ArrowRight,
    Zap
} from 'lucide-react';
import ReactiveIcon from './ReactiveIcon';

const WhatWeDoSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

    const services = [
        {
            icon: Search,
            step: "01",
            title: "Market Deep Dive",
            description: "Interview ideal buyers, extract hot buyer psychology insights, and uncover hidden pain points",
            shortDesc: "Deep buyer research & insights",
            color: "from-flowrise-blue-500 to-flowrise-blue-700",
            delay: 0.1
        },
        {
            icon: Target,
            step: "02",
            title: "Offer Engineering",
            description: "Craft irresistible, no-brainer offers that prospects can't say no to",
            shortDesc: "Irresistible offer creation",
            color: "from-flowrise-green-500 to-flowrise-green-700",
            delay: 0.2
        },
        {
            icon: PenTool,
            step: "03",
            title: "Copywriting & Messaging",
            description: "High-converting headlines, VSLs, email sequences, and sales copy that sells",
            shortDesc: "Conversion-focused copy",
            color: "from-flowrise-navy-500 to-flowrise-navy-700",
            delay: 0.3
        },
        {
            icon: Palette,
            step: "04",
            title: "Funnel Design & Development",
            description: "Fully custom-coded pages or built on HighLevel with mobile-first design",
            shortDesc: "Professional funnel build",
            color: "from-flowrise-blue-600 to-flowrise-green-600",
            delay: 0.4
        },
        {
            icon: Settings,
            step: "05",
            title: "Backend Setup & Automation",
            description: "Calendar booking, email automation, CRM integration, and follow-up sequences",
            shortDesc: "Complete automation setup",
            color: "from-flowrise-green-600 to-flowrise-blue-600",
            delay: 0.5
        },
        {
            icon: Rocket,
            step: "06",
            title: "Launch & Traffic Strategy",
            description: "Go-live timeline, conversion tracking, and traffic acquisition strategy",
            shortDesc: "Strategic launch execution",
            color: "from-flowrise-navy-600 to-flowrise-blue-600",
            delay: 0.6
        },
        {
            icon: Phone,
            step: "07",
            title: "Sales Enablement",
            description: "Booking system optimization, sales scripts, and proposal templates",
            shortDesc: "Sales system optimization",
            color: "from-flowrise-blue-700 to-flowrise-green-700",
            delay: 0.7
        },
        {
            icon: TrendingUp,
            step: "08",
            title: "Optimization & Growth",
            description: "Weekly performance analysis and iterative improvements for maximum ROI",
            shortDesc: "Continuous optimization",
            color: "from-flowrise-green-700 to-flowrise-navy-700",
            delay: 0.8
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 lg:py-32 bg-gradient-to-b from-flowrise-navy-900 via-flowrise-navy-800 to-flowrise-navy-900 relative overflow-hidden"
        >
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-flowrise-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-flowrise-green-500/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-flowrise-blue-400/10 rounded-full blur-2xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
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
                    {/* Service Badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-flowrise-blue-500/20 to-flowrise-green-500/20 backdrop-blur-xl rounded-full px-8 py-4 border border-flowrise-blue-400/30 mb-8"
                    >
                        <Sparkles className="w-6 h-6 text-flowrise-green-400" />
                        <span className="text-flowrise-blue-200 font-semibold text-lg">Our Process</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
                        What We{' '}
                        <span className="bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent relative">
                            Do
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 rounded-full"
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
                            We Build{' '}
                            <span className="bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent">
                                Conversion Funnels
                            </span>{' '}
                            That Print Revenue
                        </p>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            We handle everything end-to-end so you can focus on what you do best —{' '}
                            <span className="text-flowrise-green-400 font-semibold">closing deals and delivering results</span>.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Enhanced Services Roadmap */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Enhanced Animated Progress Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600/30 to-gray-600/10 transform md:-translate-x-0.5 rounded-full">
                        <motion.div
                            className="w-full bg-gradient-to-b from-flowrise-blue-500 via-flowrise-green-500 to-flowrise-blue-500 origin-top rounded-full shadow-lg shadow-flowrise-blue-500/30"
                            style={{ height: lineHeight }}
                        />

                        {/* Animated glow effect */}
                        <motion.div
                            className="absolute top-0 w-full bg-gradient-to-b from-flowrise-blue-400 to-flowrise-green-400 origin-top rounded-full blur-sm opacity-50"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    {/* Enhanced Service Steps */}
                    <div className="space-y-16 lg:space-y-20">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: isEven ? -60 : 60,
                                        y: 40
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        y: 0
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: service.delay,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-12 lg:gap-16`}
                                >
                                    {/* Enhanced Content Card */}
                                    <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center md:text-left`}>
                                        <motion.div
                                            whileHover={{
                                                scale: 1.03,
                                                rotateY: isEven ? -3 : 3,
                                                z: 20
                                            }}
                                            className="group relative bg-gradient-to-br from-white/8 via-white/4 to-transparent backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-white/20 hover:border-flowrise-blue-400/40 transition-all duration-500 overflow-hidden"
                                            style={{ transformStyle: 'preserve-3d' }}
                                        >
                                            {/* Dynamic Background */}
                                            <motion.div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                                                animate={{
                                                    background: [
                                                        'linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)',
                                                        'linear-gradient(135deg, rgba(34, 197, 94, 0.1), transparent)',
                                                        'linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)'
                                                    ]
                                                }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                            />

                                            {/* Step Number and Icon */}
                                            <div className={`flex items-center gap-6 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ duration: 0.6, delay: service.delay + 0.2, type: "spring" }}
                                                    viewport={{ once: true }}
                                                    className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent"
                                                >
                                                    {service.step}
                                                </motion.span>

                                                <ReactiveIcon
                                                    icon={IconComponent}
                                                    size="xl"
                                                    variant="float"
                                                    color="gradient"
                                                />
                                            </div>

                                            {/* Content */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: service.delay + 0.4 }}
                                                viewport={{ once: true }}
                                            >
                                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-flowrise-blue-300 transition-colors duration-300">
                                                    {service.title}
                                                </h3>

                                                {/* Mobile/Tablet Description */}
                                                <p className="text-gray-300 text-lg leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300 md:hidden">
                                                    {service.shortDesc}
                                                </p>

                                                {/* Desktop Description */}
                                                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed group-hover:text-gray-200 transition-colors duration-300 hidden md:block">
                                                    {service.description}
                                                </p>
                                            </motion.div>

                                            {/* Hover Arrow */}
                                            <motion.div
                                                className={`absolute bottom-6 ${isEven ? 'left-6' : 'right-6'} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                                                whileHover={{ x: isEven ? -5 : 5 }}
                                            >
                                                <ArrowRight className={`w-6 h-6 text-flowrise-blue-400 ${isEven ? 'rotate-180' : ''}`} />
                                            </motion.div>

                                            {/* 3D Shadow */}
                                            <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </motion.div>
                                    </div>

                                    {/* Enhanced Center Node */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: service.delay + 0.3,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        viewport={{ once: true }}
                                        className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-br from-flowrise-blue-500 to-flowrise-green-500 rounded-full transform md:-translate-x-4 z-10 shadow-2xl shadow-flowrise-blue-500/50 border-2 border-white/20"
                                    >
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [0.7, 1, 0.7]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: service.delay
                                            }}
                                            className="absolute inset-0 rounded-full bg-gradient-to-br from-flowrise-blue-400 to-flowrise-green-400 blur-sm"
                                        />

                                        {/* Inner pulse */}
                                        <motion.div
                                            animate={{
                                                scale: [0.8, 1.1, 0.8],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: service.delay + 0.5
                                            }}
                                            className="absolute inset-1 rounded-full bg-white/30"
                                        />
                                    </motion.div>

                                    {/* Spacer for mobile */}
                                    <div className="flex-1 md:block hidden"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Enhanced Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-24"
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
                                <Phone className="w-6 h-6 text-flowrise-green-400" />
                                <span className="text-flowrise-green-200 font-semibold text-lg">Your Only Job</span>
                            </div>

                            {/* Emoji and Title */}
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="text-6xl lg:text-8xl mb-6"
                            >
                                📞
                            </motion.div>

                            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                                You Just Take{' '}
                                <span className="bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent">
                                    The Calls
                                </span>
                            </h3>

                            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                                While we handle the heavy lifting, you focus on{' '}
                                <span className="text-flowrise-green-400 font-semibold">closing deals and delivering results</span>.{' '}
                                It's that simple.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-6 bg-gradient-to-r from-flowrise-blue-600 to-flowrise-green-600 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-flowrise-blue-500/25 hover:shadow-flowrise-green-500/25 transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Let's Build Your System
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

export default WhatWeDoSection;
