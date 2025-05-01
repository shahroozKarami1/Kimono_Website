import { CardSliderOverlayWrapper } from '@/Elements/ElementsCustom'
import { CardSliderProps } from '@/Types/Interfaces'
import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { FC } from 'react'
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
export const CardSliderOverlay: FC<{ topic: string, title: string }> = ({ topic, title }) => {
    return (
        <CardSliderOverlayWrapper >
            <Typography variant="h6" sx={{
                fontSize: "1.2rem",
                fontWeight: "light",
            }}>
                {topic}
            </Typography>
            <Typography variant="h6" sx={{
                fontSize: "2rem",
                fontWeight: "900",
            }}>
                {title}


            </Typography>
            <Box>
                <Button className="button-89">
                    مشاهده  کنید
                </Button>
            </Box>
        </CardSliderOverlayWrapper>
    )
}

const CardSlider: FC<CardSliderProps> = ({ image, topic, title }) => {
    return (
        <Box sx={{
            width: {
                md: "100%",
                xs: "75%"
            },
            height: "550px",
            position: "relative"
        }}>
            <img src={image} alt="" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "2rem"
            }} />
            <CardSliderOverlay topic={topic} title={title} />
            <Box sx={{
                position: 'absolute',
                bottom: "1%", left: "1%"
            }}>
                <IconButton>
                    <FilterCenterFocusIcon sx={{
                        fontSize : "2.2rem"
                    }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default CardSlider
