import { Box } from '@mui/material'
import React, { FC } from 'react'
import NavBar from '../NavBar/NavBar'
import MouseEvent from '../FramerMotion/MouseEvent'
interface LayOutProps {
    children: React.ReactNode
}

const LayOut: FC<LayOutProps> = ({ children }) => {
 

    return (
        <Box>
            <NavBar />
            <MouseEvent />
            {children}

        </Box>
    )
}

export default LayOut
