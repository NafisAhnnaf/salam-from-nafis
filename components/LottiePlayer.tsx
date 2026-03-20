"use client"; // This directive ensures the component runs on the client side

import React, { FC } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottiePlayerProps {
    src: string; // Can be a URL or path to a local .lottie/.json file
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

export const LottiePlayer: FC<LottiePlayerProps> = ({ src, className, loop = true, autoplay = true }) => {
    return (
        <DotLottieReact
            src={src}
            loop={loop}
            autoplay={autoplay}
            className={className}
        />
    );
};