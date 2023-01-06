import { keyframes } from '@nextui-org/react'

const ArrowAppearAnimation = keyframes({
    '0%': {
        clipPath: 'circle(0% at center center)',
        transform: 'scale(0.6)',
    },
    '100%': {
        clipPath: 'circle(100% at center center)',
        transform: 'scale(1)',
    },
})

const RingAppearAnimation = keyframes({
    '0%': {
        strokeDashoffset: 3000,
    },
    '100%': {
        strokeDashoffset: 0,
    },
})

const TextAppearAnimation = keyframes({
    '0%': {
        clipPath: 'circle(0% at left center)',
    },
    '100%': {
        clipPath: 'circle(200% at left center)',
    },
})

export { ArrowAppearAnimation, RingAppearAnimation, TextAppearAnimation }
