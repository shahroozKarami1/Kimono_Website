import { LandingContainer } from '@/Elements/ElementsCustom'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import SosialMediaIcons from './SocialMediaIcons'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LandingSlider from '../Slider/LandingSlider';
const Landing = () => {
    return (
        <LandingContainer>
            <Grid container alignItems={"center"} justifyContent={"center"}>
                <Grid size={{ md: 1 }}>
                    <Box sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        },
                        transform: "rotate(90deg)",
                        mb: "5rem"
                    }}>
                        <Typography sx={{ fontSize: "1.2rem", whiteSpace: "nowrap" }}>
                            خدمات ما
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ md: 10  ,  xs :  12 }}>
                    <LandingSlider SliderData={[{
                        image: "/images/LandingPage/ImgSlider/img1.jpg", topic: "نمونه  کار مد", title: "برترین مد رنگ مو های  برند کیمونو"
                    }, {
                        image: "/images/LandingPage/ImgSlider/img2.jpg", topic: "1نمونه  کار مد", title: "برترین مد رنگ مو های  برند کیمونو"
                    }, {
                        image: "/images/LandingPage/ImgSlider/img3.jpg", topic: "2نمونه  کار مد", title: "برترین مد رنگ مو های  برند کیمونو"
                    }]} />
                </Grid>
                <Grid size={{ md: 1 ,  xs :  12 }}>
                    <Box sx={{
                        mt: {
                            xs: "1rem",
                            md: "0"
                        },
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: {
                            md: "column",
                            xs: "row"
                        },
                        gap: 1.3
                    }}>
                        <SosialMediaIcons icon={<FacebookIcon />} />
                        <SosialMediaIcons icon={<InstagramIcon />} />
                        <SosialMediaIcons icon={<TwitterIcon />} />
                        <SosialMediaIcons icon={<LinkedInIcon />} />
                        <SosialMediaIcons icon={<YouTubeIcon />} />
                        <SosialMediaIcons icon={<PinterestIcon />} />
                    </Box>
                </Grid>
            </Grid>

        </LandingContainer>
    )
}

export default Landing
