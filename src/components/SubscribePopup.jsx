import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Instagram, Check, AlertCircle } from 'lucide-react';

const SubscribePopup = ({ isOpen, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        instagram: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    // Reset form when popup opens/closes
    useEffect(() => {
        if (!isOpen) {
            setFormData({ name: '', email: '', instagram: '' });
            setErrors({});
            setSubmitStatus(null);
            setIsSubmitting(false);
        }
    }, [isOpen]);

    // Handle ESC key press
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Prepare form data for Google Forms
            const googleFormData = new FormData();
            googleFormData.append('entry.496342393', formData.name); // Name
            googleFormData.append('entry.535184687', formData.email); // Email
            googleFormData.append('entry.1341272219', formData.instagram); // Instagram (optional)

            // Submit to Google Forms
            await fetch(
                'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfnH4yymPW-UelLdvKQLz9yfBmtq40rksns5u7WTmED2g9Bhg/formResponse',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    body: googleFormData
                }
            );

            // Since we're using no-cors, we can't check response status
            // We'll assume success if no error is thrown
            console.log('✅ Form submitted successfully to Google Forms');
            setSubmitStatus('success');

            // Wait a moment to show success message, then call onSuccess
            setTimeout(() => {
                onSuccess();
            }, 1500);

        } catch (error) {
            console.error('❌ Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-gradient-to-br from-deep-space-900 via-deep-space-800 to-electric-indigo-700 rounded-3xl p-8 w-full max-w-md relative border border-white/20 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200"
                        >
                            <X className="w-4 h-4" />
                        </motion.button>

                        {/* Header */}
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
                                🚀
                            </motion.div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Get Your Free Blueprint
                            </h2>
                            <p className="text-gray-300 text-sm">
                                Join 10,000+ entrepreneurs scaling their businesses
                            </p>
                        </div>

                        {/* Success State */}
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto"
                                >
                                    <Check className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2">Success!</h3>
                                <p className="text-gray-300">Redirecting you now...</p>
                            </motion.div>
                        )}

                        {/* Error State */}
                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-4 mb-6"
                            >
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                                    <AlertCircle className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-red-400 text-sm">
                                    Something went wrong. Please try again.
                                </p>
                            </motion.div>
                        )}

                        {/* Form */}
                        {submitStatus !== 'success' && (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full pl-10 pr-4 py-3 bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'
                                                } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-flow-purple-500 focus:border-transparent transition-all duration-200`}
                                            placeholder="Enter your full name"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full pl-10 pr-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'
                                                } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-flow-purple-500 focus:border-transparent transition-all duration-200`}
                                            placeholder="Enter your email address"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Instagram Field (Optional) */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Instagram Username <span className="text-gray-500">(optional)</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Instagram className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="instagram"
                                            value={formData.instagram}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-flow-purple-500 focus:border-transparent transition-all duration-200"
                                            placeholder="@yourusername"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${isSubmitting
                                            ? 'bg-gray-600 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 hover:from-green-700 hover:via-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl'
                                        } text-white`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            Submitting...
                                        </div>
                                    ) : (
                                        'Get Instant Access'
                                    )}
                                </motion.button>

                                {/* Privacy Notice */}
                                <p className="text-xs text-gray-400 text-center">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </form>
                        )}

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-flow-purple-500/10 to-flow-blue-500/10 rounded-3xl pointer-events-none" />
                        <div className="absolute -top-px left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SubscribePopup;
