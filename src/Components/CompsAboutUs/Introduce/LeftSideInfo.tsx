import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

interface LeftSideInfoProps {
    title: string,
    number: number
}

const LeftSideInfo: FC<LeftSideInfoProps> = ({ title, number }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2 ,  
            height : '150px'
        }}>
            <Box sx={{
                display: "flex",
                gap: 4,
                alignItems: 'center'
            }}>
                <Typography sx={{
                    fontSize: '4rem',
                }}>{number}</Typography>
                <Box sx={{
                    width: '80px'
                }}>
                    <Typography sx={{
                        color: "#ccc",
                        fontWeight: 'bold',
                        fontSize: "1.1rem"
                    }}>{title}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default LeftSideInfo
