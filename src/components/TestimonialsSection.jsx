import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const testimonials = [
        {
            name: "Sara",
            role: "Mindset Coach",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            quote: "After 2 weeks with Flowrise, we closed 3 clients at $5K each. Best investment I've made in my business.",
            rating: 5,
            result: "$15K in 2 weeks"
        },
        {
            name: "Ali",
            role: "Digital Product Creator",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            quote: "Their copy converted better than my ads. We finally cracked $30K/mo and it keeps growing.",
            rating: 5,
            result: "$30K/month"
        },
        {
            name: "Jessica",
            role: "Business Consultant",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            quote: "The automated funnel they built runs 24/7. I wake up to new leads and booked calls every day.",
            rating: 5,
            result: "50+ leads/week"
        },
        {
            name: "Marcus",
            role: "Online Coach",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            quote: "Flowrise didn't just build a funnel - they built a revenue machine. ROI was 800% in the first 90 days.",
            rating: 5,
            result: "800% ROI"
        }
    ];

    useEffect(() => {
        if (isAutoPlay) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlay, testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section
            className="py-20 lg:py-32 bg-gradient-to-b from-deep-space-800 to-deep-space-900 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8">
                        Success{' '}
                        <span className="bg-gradient-to-r from-flowrise-blue-400 to-flowrise-green-400 bg-clip-text text-transparent">
                            Stories
                        </span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Real results from real clients who trusted us to{' '}
                        <span className="text-flowrise-green-400 font-semibold">transform their business</span>
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -100, scale: 0.9 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            {/* Main Testimonial Card */}
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 relative overflow-hidden">
                                {/* Quote Icon */}
                                <motion.div
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-6 right-6 opacity-20"
                                >
                                    <Quote className="w-16 h-16 text-flow-purple-400" />
                                </motion.div>

                                {/* Stars Rating */}
                                <div className="flex justify-center mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0, rotate: 180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: i * 0.1,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                        >
                                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 mx-1" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <motion.blockquote
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-xl lg:text-2xl text-gray-200 text-center mb-8 leading-relaxed italic"
                                >
                                    "{testimonials[currentIndex].quote}"
                                </motion.blockquote>

                                {/* Author Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                                >
                                    {/* Avatar with floating animation */}
                                    <div className="relative">
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                                rotateZ: [0, 2, 0]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="relative"
                                        >
                                            <img
                                                src={testimonials[currentIndex].avatar}
                                                alt={testimonials[currentIndex].name}
                                                className="w-16 h-16 rounded-full border-4 border-flow-purple-500 shadow-glow"
                                            />

                                            {/* Floating stars around avatar */}
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-3 h-3"
                                                    style={{
                                                        left: `${-10 + i * 15}px`,
                                                        top: `${-10 + (i % 2) * 20}px`,
                                                    }}
                                                    animate={{
                                                        y: [0, -5, 0],
                                                        rotate: [0, 180, 360],
                                                        scale: [0.8, 1.2, 0.8],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        delay: i * 0.5,
                                                        ease: "easeInOut"
                                                    }}
                                                >
                                                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    <div className="text-center sm:text-left">
                                        <h4 className="text-xl font-bold text-white">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-400 mb-2">
                                            {testimonials[currentIndex].role}
                                        </p>
                                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-600 to-green-700 text-green-100 text-sm font-semibold rounded-full">
                                            {testimonials[currentIndex].result}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-flow-purple-600 to-flow-blue-600 text-white rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-flow-purple-600 to-flow-blue-600 text-white rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-gradient-to-r from-flow-purple-500 to-flow-blue-500 w-8'
                                : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
