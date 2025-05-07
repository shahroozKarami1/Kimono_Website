"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const MouseEvent = () => {
    let [position, setPosition] = useState({
        x: 0, y: 0
    })
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return (
        <motion.div animate={{ x: position.x, y: position.y }} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '10px',
            height: '10px',
            zIndex: 999,
            background: 'var(--red-color)',
            pointerEvents: 'none',
            borderRadius: '50%',
            transition: "unset",

        }} />

    )
}

export default MouseEvent
