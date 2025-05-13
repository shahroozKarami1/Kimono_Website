import CommentsSection from '@/Components/CompsAboutUs/Comments/CommentsSection'
import Introduce from '@/Components/CompsAboutUs/Introduce/Introduce'
import { Box } from '@mui/material'
import React from 'react'

const AboutUs = () => {
    return (
        <Box>
            <Introduce />
            <CommentsSection />
        </Box>
    )
}

export default AboutUs
