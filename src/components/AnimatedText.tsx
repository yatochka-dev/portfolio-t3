import React from 'react'
import { motion } from 'framer-motion'

type ComponentType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'div'

interface AnimatedTextProps {
    text: string
    component: ComponentType
    className?: string
}

const WordWrapper = motion('span')

const quoteVariants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
}

const wordVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    component,
    className,
}) => {
    const Component = component as keyof JSX.IntrinsicElements

    const TextWrapper = motion(Component)

    return (
        <div
            className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden`}
        >
            <TextWrapper
                className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
                variants={quoteVariants}
                initial={'initial'}
                animate={'animate'}
            >
                {text.split(' ').map((word, index) => (
                    <WordWrapper
                        key={`animated-text-${index}-${word}`}
                        className={'inline-block'}
                        variants={wordVariants}
                    >
                        {word}&nbsp;
                    </WordWrapper>
                ))}
            </TextWrapper>
        </div>
    )
}

export default AnimatedText
