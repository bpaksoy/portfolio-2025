'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
    className?: string;
}

export default function FlipCard({ front, back, className }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div
            className={`relative h-full w-full cursor-pointer ${className}`}
            onClick={handleFlip}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="relative w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {front}
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    }}
                >
                    {back}
                </div>
            </motion.div>
        </div>
    );
}
