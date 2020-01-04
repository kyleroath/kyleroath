// export const pageVariants = {  // -- X axis
//     initial: {
//         opacity: 0,
//         x: "-100vw",
//         scale: 0.8
//     },
//     in: {
//         opacity: 1,
//         x: 0,
//         scale: 1
//     },
//     out: {
//         opacity: 0,
//         x: "-100vw",
//         scale: 1.2
//     }
// }

// export const pageTransition = {
//     type: 'tween',
//     ease: 'anticipate',
//     duration: 1
// }

export const pageVariants = {  // Y axis
    initial: {
        opacity: 0,
        bottom: "-100vh",
        scale: 0.8
    },
    in: {
        opacity: 1,
        bottom: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        bottom: "-100vh",
        scale: 1.2
    }
}

export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1
}
