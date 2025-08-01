import React from 'react';
import { motion } from 'framer-motion';

const ReactiveIcon = ({
    icon: Icon,
    size = 'md',
    variant = 'default',
    color = 'blue',
    children,
    className = '',
    onClick,
    disabled = false,
    tooltip = '',
    ...props
}) => {
    // Size variants
    const sizeClasses = {
        xs: 'w-6 h-6',
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-20 h-20',
        '2xl': 'w-24 h-24'
    };

    // Color variants matching Flowrise brand
    const colorClasses = {
        blue: 'from-flowrise-blue-500 to-flowrise-blue-600',
        green: 'from-flowrise-green-500 to-flowrise-green-600',
        navy: 'from-flowrise-navy-600 to-flowrise-navy-700',
        gradient: 'from-flowrise-blue-500 to-flowrise-green-500',
        glass: 'from-white/20 to-white/10 backdrop-blur-xl border border-white/20',
        dark: 'from-gray-800 to-gray-900',
        success: 'from-green-500 to-green-600',
        warning: 'from-yellow-500 to-orange-500',
        error: 'from-red-500 to-red-600'
    };

    // Icon size based on container size
    const iconSizes = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-10 h-10',
        '2xl': 'w-12 h-12'
    };

    const baseClasses = `
        relative inline-flex items-center justify-center rounded-xl 
        ${sizeClasses[size]} ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        transition-all duration-300
    `;

    // Different animation variants
    const animationVariants = {
        default: {
            hover: {
                scale: 1.1,
                y: -2,
                rotateY: 5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            },
            tap: { scale: 0.95 },
            initial: { scale: 1 }
        },
        float: {
            hover: {
                scale: 1.15,
                y: -5,
                rotateX: 10,
                rotateY: 10
            },
            tap: { scale: 0.9 },
            animate: {
                y: [0, -3, 0],
                transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }
        },
        pulse: {
            hover: {
                scale: 1.2,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
            },
            tap: { scale: 0.9 },
            animate: {
                scale: [1, 1.05, 1],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }
        },
        bounce: {
            hover: {
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
            },
            tap: { scale: 0.95, rotate: 5 }
        },
        glow: {
            hover: {
                scale: 1.15,
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
                filter: "brightness(1.2)"
            },
            tap: { scale: 0.9 }
        }
    };

    const currentAnimation = animationVariants[variant] || animationVariants.default;

    return (
        <div className="relative group" title={tooltip}>
            <motion.div
                className={`${baseClasses} bg-gradient-to-br ${colorClasses[color]} shadow-lg`}
                initial={currentAnimation.initial}
                animate={currentAnimation.animate}
                whileHover={!disabled ? currentAnimation.hover : {}}
                whileTap={!disabled ? currentAnimation.tap : {}}
                onClick={!disabled ? onClick : undefined}
                style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                }}
                {...props}
            >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>

                {/* Icon */}
                {Icon && (
                    <Icon className={`${iconSizes[size]} text-white relative z-10 transition-transform duration-300 group-hover:scale-110`} />
                )}

                {/* Custom children content */}
                {children && (
                    <div className="text-white relative z-10 font-bold">
                        {children}
                    </div>
                )}

                {/* 3D highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-xl opacity-60"></div>

                {/* Interactive sparkle effect */}
                <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.2
                    }}
                />

                {/* Bottom shadow for 3D effect */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-black/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Tooltip */}
            {tooltip && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: -5, scale: 1 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-20"
                >
                    {tooltip}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </motion.div>
            )}
        </div>
    );
};

export default ReactiveIcon;