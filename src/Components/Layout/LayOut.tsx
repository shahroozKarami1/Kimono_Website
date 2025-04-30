import { Box } from '@mui/material'
import React, { FC } from 'react'
import NavBar from '../NavBar/NavBar'

interface LayOutProps {
    children: React.ReactNode
}

const LayOut: FC<LayOutProps> = ({ children }) => {
    return (
        <Box>
            <NavBar />
            {children}
        </Box>
    )
}

export default LayOut
