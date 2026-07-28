import { useEffect, useRef } from 'react'

/**
 * Returns a ref to attach to any element.
 * When the element enters the viewport, it removes the 'opacity-0' class
 * so the Tailwind animate-fade-in-up animation plays.
 */
export default function useScrollReveal(threshold = 0.15) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.remove('opacity-0')
                    observer.unobserve(el)
                }
            },
            { threshold }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return ref
}
