import { Box, ListItem, Typography } from '@mui/material'
import React, { FC } from 'react'

interface RightSideInfoListProps {
    title: string,
    icon: React.ReactNode
}

const RightSideInfoList: FC<RightSideInfoListProps> = ({ title, icon }) => {
    return (
        <ListItem sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{
                border: '1px solid #444',
                borderRadius: "50%",
                padding: "0.2rem",
                "& svg": {
                    fontSize: "1rem",
                },
                "& path": {
                    fill: "#ccc"
                }
            }}>
                {
                    icon
                }
            </Box>
            <Typography sx={{
                fontSize: '0.90rem',
                color: '#ccc',
                fontWeight: 'bold'

            }}>{title}</Typography>
        </ListItem>
    )
}

export default RightSideInfoList
