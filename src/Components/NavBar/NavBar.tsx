import { Box, Grid, IconButton, List } from '@mui/material'
import React from 'react'
import CusContainer from '../Container/CusContainer'
import { NavBarContainer } from '@/Elements/ElementsCustom'
import NavBarLinks from './NavBarLinks'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
const NavBar = () => {
    return (
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
                            <NavBarLinks link="/" title="درباره ما" />
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
                            <IconButton>
                                <SearchIcon sx={{
                                    fontSize: "2rem"
                                }} />
                            </IconButton>
                            |
                            <IconButton>
                                <MenuIcon sx={{
                                    fontSize: "2rem"
                                }} />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </CusContainer>
        </NavBarContainer>
    )
}

export default NavBar
