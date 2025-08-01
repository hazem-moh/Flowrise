import React from 'react';
import { motion } from 'framer-motion';
import { Check, Play, ArrowRight, Instagram, MessageCircle, Mail, Zap } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-flowrise-navy-900 via-flowrise-navy-800 to-flowrise-blue-700 overflow-hidden">
            {/* Animated Background Waves */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    className="absolute top-20 -left-20 w-96 h-96 bg-flowrise-blue-500 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 -right-20 w-80 h-80 bg-flowrise-green-500 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="relative container mx-auto px-6 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        {/* Main Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Scale Your Info Product to{' '}
                            <span className="bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent">
                                $30K+ Monthly
                            </span>
                            <br />
                            — In 60 Days.
                        </motion.h2>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
                        >
                            Without Paid Ads, No Cold DMs. Done-For-You.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="text-lg text-gray-400 mb-12 max-w-2xl"
                        >
                            Our proven "Frictionless Funnel Method" brings qualified leads, automates sales,
                            and fills your calendar — even if you're starting at $0.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-flowrise-blue-600 to-flowrise-green-600 text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Check className="w-5 h-5" />
                                Apply for Strategy Call
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-flowrise-blue-500 to-flowrise-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ zIndex: -1 }}
                                />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 border-2 border-flowrise-blue-500 text-flowrise-blue-400 font-semibold rounded-xl hover:bg-flowrise-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Play className="w-5 h-5" />
                                Watch 5-Min Training
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Multi-Orbital Animation with Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex items-center justify-center h-[700px] w-full"
                    >
                        {/* Central Flowrise Logo/Icon - Static */}
                        <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-flowrise-blue-500 to-flowrise-green-500 rounded-2xl flex items-center justify-center shadow-2xl">
                            <div className="text-white text-3xl font-bold">F</div>
                            <div className="absolute inset-0 bg-gradient-to-br from-flowrise-blue-400 to-flowrise-green-400 rounded-2xl blur-lg opacity-40"></div>
                            {/* Professional center shadow */}
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black/30 rounded-full blur-lg"></div>
                        </div>

                        {/* Simplified 3-Ring System with 9 Icons Total */}

                        {/* Ring 1 - Inner orbit (4 large icons) */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            className="absolute w-72 h-72 border border-flowrise-blue-200/12 rounded-full"
                        >
                            {[
                                { icon: Instagram, color: 'from-[#E4405F] to-[#F56040]', name: 'Instagram', rotation: 0, size: 'w-16 h-16' },
                                { icon: MessageCircle, color: 'from-[#00D4FF] to-[#0099CC]', name: 'ManyChat', rotation: 90, size: 'w-14 h-14' },
                                { icon: Zap, color: 'from-[#FF6B35] to-[#F7931E]', name: 'GoHighLevel', rotation: 180, size: 'w-16 h-16' },
                                { icon: () => <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M21.03 5.72l-2.8-2.8c-.78-.78-2.05-.78-2.83 0L12 6.32 8.6 2.92c-.78-.78-2.05-.78-2.83 0l-2.8 2.8c-.78.78-.78 2.05 0 2.83L6.37 12l-3.4 3.4c-.78.78-.78 2.05 0 2.83l2.8 2.8c.78.78 2.05.78 2.83 0L12 17.63l3.4 3.4c.78.78 2.05.78 2.83 0l2.8-2.8c.78-.78.78-2.05 0-2.83L17.63 12l3.4-3.4c.78-.78.78-2.05 0-2.83z" /></svg>, color: 'from-[#262627] to-[#000000]', name: 'TypeForm', rotation: 270, size: 'w-14 h-14' }
                            ].map((tool, index) => {
                                const IconComponent = tool.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: `translate(-50%, -50%) rotate(${tool.rotation}deg) translateY(-136px) rotate(-${tool.rotation}deg)`
                                        }}
                                        whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className={`${tool.size} bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 relative`}>
                                            <IconComponent />
                                            {/* Professional shadow with size variation */}
                                            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${tool.size === 'w-16 h-16' ? 'w-12 h-4' : 'w-10 h-3'} bg-black/40 rounded-full blur-md`}></div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Ring 2 - Middle orbit (3 medium icons) */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[420px] h-[420px] border border-flowrise-green-200/8 rounded-full"
                        >
                            {[
                                { icon: Mail, color: 'from-[#EA4335] to-[#FBBC04]', name: 'Email', rotation: 30, size: 'w-12 h-12' },
                                { icon: () => <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3v18h18v-2H5V3H3zm14.5 14.5l-7-7-2.5 2.5L5 10l1.5-1.5L9 11l2.5-2.5 7 7-1 1z" /></svg>, color: 'from-[#4285F4] to-[#34A853]', name: 'Analytics', rotation: 150, size: 'w-11 h-11' },
                                { icon: () => <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>, color: 'from-[#9C27B0] to-[#673AB7]', name: 'Automation', rotation: 270, size: 'w-12 h-12' }
                            ].map((tool, index) => {
                                const IconComponent = tool.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: `translate(-50%, -50%) rotate(${tool.rotation}deg) translateY(-210px) rotate(-${tool.rotation}deg)`
                                        }}
                                        whileHover={{ scale: 1.25, y: -6 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <div className={`${tool.size} bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative`}>
                                            <IconComponent />
                                            {/* Professional shadow */}
                                            <div className={`absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 ${tool.size === 'w-12 h-12' ? 'w-8 h-2.5' : 'w-7 h-2'} bg-black/35 rounded-full blur-sm`}></div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Ring 3 - Outer orbit (2 small icons) */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[520px] h-[520px] border border-flowrise-blue-200/6 rounded-full"
                        >
                            {[
                                { icon: () => <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-3A1.5 1.5 0 0 0 14.04 8.37L11.5 16H14v6h6z" /></svg>, color: 'from-[#FF5722] to-[#FF9800]', name: 'CRM', rotation: 60, size: 'w-10 h-10' },
                                { icon: () => <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" /></svg>, color: 'from-[#607D8B] to-[#455A64]', name: 'Funnel', rotation: 240, size: 'w-9 h-9' }
                            ].map((tool, index) => {
                                const IconComponent = tool.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: `translate(-50%, -50%) rotate(${tool.rotation}deg) translateY(-260px) rotate(-${tool.rotation}deg)`
                                        }}
                                        whileHover={{ scale: 1.4, y: -4 }}
                                        whileTap={{ scale: 0.85 }}
                                    >
                                        <div className={`${tool.size} bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 relative`}>
                                            <IconComponent />
                                            {/* Professional shadow */}
                                            <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 ${tool.size === 'w-10 h-10' ? 'w-6 h-1.5' : 'w-5 h-1'} bg-black/30 rounded-full blur-sm`}></div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Subtle Connecting Lines */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
                            className="absolute w-96 h-96"
                        >
                            {[0, 120, 240].map((rotation, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-gradient-to-r from-flowrise-blue-300/10 via-flowrise-green-300/25 to-transparent origin-left"
                                    style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
                                    animate={{
                                        opacity: [0.1, 0.4, 0.1],
                                        scaleX: [0.7, 1.1, 0.7]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        delay: index * 2.5,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Ambient Floating Particles - Reduced */}
                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                key={index}
                                className="absolute w-1 h-1 bg-flowrise-blue-400/50 rounded-full"
                                style={{
                                    top: `${40 + Math.sin(index * 3) * 20}%`,
                                    left: `${40 + Math.cos(index * 3) * 20}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.7, 0.3],
                                    scale: [0.8, 1.2, 0.8]
                                }}
                                transition={{
                                    duration: 12 + index * 1.5,
                                    repeat: Infinity,
                                    delay: index * 1.2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;