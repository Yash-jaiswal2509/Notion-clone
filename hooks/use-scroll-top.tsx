import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        }


        window.addEventListener('Scroll', handleScroll);
        return () => {
            window.removeEventListener('Scroll', handleScroll);
        }
    }, [threshold])

    return scrolled;
}