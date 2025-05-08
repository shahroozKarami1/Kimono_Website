import { ContainerRightSideInfoList, RightSideInfoContainer, WrapperImg } from '@/Elements/ElementsCustom'
import { Box, Grid, IconButton, List, Typography } from '@mui/material'
import React, { FC } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import RightSideInfoList from './RightSideInfoList';
import GoogleIcon from '@mui/icons-material/Google';
import SosialMediaIcons from '../Landing/SocialMediaIcons';
import CloseIcon from '@mui/icons-material/Close';
interface RightSideInfoProps {
    open: boolean,
    handleClose: (open: boolean) => void
}

const RightSideInfo: FC<RightSideInfoProps> = ({ open, handleClose }) => {
    return (
        <RightSideInfoContainer
            // className={open ? ' animate__animated  animate__backInLeft' : ' animate__animated  animate__backOutLeft'}
            sx={{
                transform: open ? 'translateX(0)' : 'translateX(-100%)'
            }} >
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
            }}>
                <IconButton onClick={() => handleClose(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{
                width: '50%',
                height: '100px',

            }}>
                <img src="/images/LandingPage/Logo.svg" alt=""
                    style={{
                        objectFit: 'contain',
                        height: "100%",
                        width: '100%',
                    }} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={2} mt={"1rem"}>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                    <InstagramIcon />
                    <Typography sx={{
                        fontStyle: 'italic',
                    }}>
                        اینستاگرام
                    </Typography>
                </Box>
                <Typography sx={{
                    fontStyle: "italic",
                    borderBottom: '1px  solid #fff'
                }}>

                    Ishahrroozam
                </Typography>
            </Box>
            <Grid container spacing={1} sx={{
                mt: '1rem'
            }}>
                <Grid size={{ xs: 4 }}>
                    <WrapperImg>
                        <img src="/images/LandingPage/ImgSlider/LeftSideInfo/img1.jpg" alt="" />
                    </WrapperImg>
                    <WrapperImg>
                        <img src="/images/LandingPage/ImgSlider/LeftSideInfo/img2.jpg" alt="" />
                    </WrapperImg>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <WrapperImg>
                        <img src="/images/LandingPage/ImgSlider/LeftSideInfo/img3.jpg" alt="" />
                    </WrapperImg>
                    <WrapperImg>
                        <img src="/images/LandingPage/ImgSlider/LeftSideInfo/img4.jpg" alt="" />
                    </WrapperImg>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <WrapperImg>
                        <img src="/images/LandingPage/ImgSlider/LeftSideInfo/img5.jpg" alt="" />
                    </WrapperImg>
                    <WrapperImg>
                        <img src="/images/LandingPage/ImgSlider/LeftSideInfo/img6.jpg" alt="" />
                    </WrapperImg>
                </Grid>
            </Grid>
            <ContainerRightSideInfoList >
                <RightSideInfoList title="shahrooz.programmer@gmail.com" icon={<GoogleIcon />} />
                <RightSideInfoList title="تهران ـ جنت آباد" icon={<GoogleIcon />} />
                <RightSideInfoList title="09305151712" icon={<GoogleIcon />} />
            </ContainerRightSideInfoList>
            <Box sx={{
                width: '100%',
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5
            }}>
                <SosialMediaIcons icon={<GoogleIcon />} />
                <SosialMediaIcons icon={<GoogleIcon />} />
                <SosialMediaIcons icon={<GoogleIcon />} />
                <SosialMediaIcons icon={<GoogleIcon />} />
            </Box>

        </RightSideInfoContainer>
    )
}

export default RightSideInfo
