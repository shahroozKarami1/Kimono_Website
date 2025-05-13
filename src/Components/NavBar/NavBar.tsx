"use client"
import { Box, Grid, IconButton, List } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import CusContainer from '../Container/CusContainer'
import { CusTextFieldSearching, NavBarContainer } from '@/Elements/ElementsCustom'
import NavBarLinks from './NavBarLinks'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ModalContainer from '../ModalContainer/ModalContainer'
import RightSideInfo from '../RightSideInfo/RightSideInfo'
const NavBar = () => {
    let [isOpenSearchBar, setIsOpenSearchBar] = useState(false)
    let [isOpenLeftSideinfo, setIsOpenLeftSideinfo] = useState(false)
    const handleCloseSearchBar = useCallback(() => {
        setIsOpenSearchBar(false);
    }, []);

    const handleCloseLeftSideInfo = useCallback(() => {
        setIsOpenLeftSideinfo(false);
    }, []);

    return (
        <>
            <NavBarContainer>
                <CusContainer>
                    <Grid container justifyContent={{
                        md: "center",
                        xs: "space-between"
                    }} alignItems={"center"}>
                        <Grid size={{ md: 2 }}>
                            <Box sx={{
                                width: {
                                    xs: "100%",
                                    md: "60%"
                                },
                                height: '100%',

                            }}>
                                <img src="/images/LandingPage/Logo.svg" alt="logo" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'center',
                                    display: 'block',
                                }} />
                            </Box>
                        </Grid>
                        <Grid size={{ md: 8 }}>
                            <List sx={{
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <NavBarLinks subLinks={[
                                    { link: "/", title: "کلاسیک", },
                                    { link: "/", title: "مدرن", },
                                    { link: "/", title: "سنتی ایرانی", },
                                    { link: "/", title: "هنری", }

                                ]} link="/" title="صفحه اصلی" />



                                <NavBarLinks subLinks={[
                                    { link: "/", title: "کلاسیک", },
                                    { link: "/", title: "مدرن", },
                                    { link: "/", title: "سنتی ایرانی", },
                                    { link: "/", title: "هنری", }

                                ]} link="/" title="گالری" />
                                <NavBarLinks link="/aboutUs" title="درباره ما" />
                                <NavBarLinks link="/" title="صفحات" />
                                <NavBarLinks link="/" title="تماس" />
                                <NavBarLinks link="/" title="وبلاگ" />
                            </List>
                        </Grid>
                        <Grid size={{ md: 2 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                gap: '10px',
                            }}>
                                <IconButton onClick={() => setIsOpenSearchBar(true)}>
                                    <SearchIcon sx={{
                                        fontSize: "2rem"
                                    }} />
                                </IconButton>
                                |
                                <IconButton onClick={() => setIsOpenLeftSideinfo(true)}>
                                    <MenuIcon sx={{
                                        fontSize: "2rem"
                                    }} />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </CusContainer>

            </NavBarContainer>
            <ModalContainer open={isOpenSearchBar} handleClose={handleCloseSearchBar}>

                <Box sx={{
                    height: '60px',
                    width: {
                        xs: "400px",
                        md: "800px"
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50% , -50%)",
                    zIndex: 999,
                }}>
                    <CusTextFieldSearching placeholder='دنبال چی میگردی؟' className='search-input' />

                </Box>
            </ModalContainer>
            {/* <RightSideInfo open={isOpenLeftSideinfo} handleClose={handleCloseLeftSideInfo} /> */}

        </>

    )
}

export default NavBar
