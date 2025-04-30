import { SosialMediaIconsProps } from '@/Types/Interfaces'
import { Box, IconButton } from '@mui/material'
import React, { FC } from 'react'

const SosialMediaIcons:FC<SosialMediaIconsProps> = ({icon }) => {
  return (
    <Box sx={{
      backgroundColor : "#3C3C3C" ,  
      borderRadius : '50%' ,
    }}>
      <IconButton  sx={{
        "& svg": {
          fontSize: "1.3rem"
        }
      }}>
        {icon}
      </IconButton>
    </Box>
  )
}

export default SosialMediaIcons
