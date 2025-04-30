import { Box } from '@mui/material'
import React, { FC } from 'react'

interface CusContainerProps {
    children: React.ReactNode
}

const CusContainer: FC<CusContainerProps> = ({ children }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 20px',
        }}>
            {children}
        </Box>
    )
}

export default CusContainer
