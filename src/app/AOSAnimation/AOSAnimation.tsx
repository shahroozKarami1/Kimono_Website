"use client"
import React, { FC, useEffect } from 'react'
import Aos from "aos";

const AOSAnimation: FC<{ children: React.ReactNode, TypoAos: string, delay?: number }> = ({ children, TypoAos, delay }) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease-in-sine",
            mirror: true,
        });
    }, []);
    return (
        <div data-aos={TypoAos} data-aos-delay={delay}>
            {children}
        </div>
    )
}

export default AOSAnimation
