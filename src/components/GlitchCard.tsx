"use client";
import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

interface GlitchCardProps {
  title: string;
  description: string;
  fullDescription: string;
  color: number[][];
  children: ReactNode;
  isFeature?: boolean; // New prop to identify the featured card
  variant?: string;    // Keep for compatibility
  onViewProject?: () => void; // Add this new prop
}

export const GlitchCard = ({ 
  title, 
  description, 
  fullDescription, 
  color, 
  children,
  isFeature = false,
  variant = "amber",
  onViewProject // Add this prop here
}: GlitchCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  // Always use amber colors for hover effect, but vary intensity based on if it's featured
  const hoverColors = isFeature 
    ? [[245, 158, 11], [251, 191, 36], [217, 119, 6]] // Brighter amber for featured
    : [[245, 158, 11], [217, 119, 6]]; // Standard amber for others

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group/canvas-card max-w-sm w-full ${expanded ? 'h-auto min-h-96' : 'h-80'} p-4 mx-auto flex items-center justify-center border ${isFeature ? 'border-amber-500/50' : 'border-stone-600/30'} rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${isFeature ? 'shadow-lg shadow-amber-500/20' : 'shadow-md'}`}
    >
      {/* Conditionally render the glitch effect */}
      {(expanded || hovered) && (
        <motion.div
          initial={{ opacity: 0.7 }}
          animate={{ 
            opacity: expanded ? (hovered ? 1 : 0.9) : (hovered ? 1 : 0.8)
          }}
          className="absolute inset-0 h-full w-full"
        >
          <CanvasRevealEffect
            animationSpeed={expanded ? 3 : isFeature ? 2.5 : 1.5}
            colors={hovered ? hoverColors : color}
            dotSize={isFeature ? 2.5 : 2}
            containerClassName={isFeature ? "bg-stone-800" : "bg-stone-900"}
          />
        </motion.div>
      )}

      <motion.div 
        className="relative z-10 text-center transition-all duration-300 w-full"
        layout
      >
        {!expanded && (
          <motion.div 
            className="group-hover/canvas-card:opacity-0 transition duration-200"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
        
        <motion.div className={`${expanded ? 'bg-stone-900/90 p-6 rounded-xl border border-amber-600/20' : ''}`}>
          <motion.h2 
            className={`text-amber-100 text-2xl font-bold ${expanded ? 'mt-1 mb-4 text-left' : `mt-4 px-3 py-1 ${isFeature ? 'bg-amber-500/20' : 'bg-stone-800/80'} inline-block rounded-lg border-l-2 border-amber-500`} transition-all duration-300`}
            layout
          >
            {title}
          </motion.h2>
          
          {!expanded && (
            <motion.p 
              className={`text-sm ${isFeature ? 'text-amber-100' : 'text-stone-200'} mt-3 line-clamp-2 transition duration-200 ${isFeature ? 'bg-stone-900/80' : 'bg-stone-800/80'} p-3 rounded-lg mx-auto max-w-[90%]`}
              layout
            >
              {description}...
            </motion.p>
          )}
          
          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-left"
            >
              <p className="text-stone-200 text-sm mt-4 leading-relaxed">
                {fullDescription}
              </p>
              <div className="mt-6 text-center">
                <button 
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-lg transition-colors text-sm font-medium shadow-md hover:shadow-amber-500/20"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering parent onClick
                    if (onViewProject) onViewProject();
                  }}
                >
                  View Project
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
