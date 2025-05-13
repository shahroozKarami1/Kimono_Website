import RatedStar from '@/Components/Rated/RatedStar'
import { CommentCardWrapper } from '@/Elements/ElementsCustom'
import { Avatar, Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import CommentIcon from '@mui/icons-material/Comment';
import { CommentCardProps } from '@/Types/Interfaces';


const CommentCard: FC<CommentCardProps> = ({ commentText, rateValue, location, name, profile  , id }) => {
  return (
    <CommentCardWrapper id={id}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-between"
        }}>
          <RatedStar PropsValue={rateValue} />
          <CommentIcon sx={{
            fontSize: "3rem",
            color: "var(--white-color)"
          }} />

        </Box>
        <Box sx={{
          minHeight : '150px'
        }}>
          <Typography sx={{
          paddingBottom: '1rem'  ,  
            lineHeight: 2,
            borderBottom: '1px solid var(--white-color)',
            fontSize : '1.2rem' ,  
          }}>
            {commentText}
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginY: '1rem',
          gap: 1
        }}>
          <Avatar sx={{
            width: "70px",
            height: "70px",
            border: '3px solid var(--white-color)'
          }} src={profile} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            <Typography sx={{
              fontWeight: 'bold' , 
              fontSize : '1.3rem'
            }}>{name}</Typography>
            <Typography sx={{
              fontSize : '1rem'
            }}>{location}</Typography>
          </Box>
        </Box>
      </Box>
    </CommentCardWrapper>
  )
}

export default CommentCard
