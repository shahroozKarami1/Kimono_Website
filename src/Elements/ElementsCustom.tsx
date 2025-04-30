"use client"
import { Box, ListItem, styled } from "@mui/material";

export let LandingContainer = styled(Box)({
    width: '100%',
    height: '100vh',
    backgroundColor: "var(--dark-color)",
})

export let NavBarContainer = styled(Box)({
    width: '100%',
    height: '100px',
    padding: ' 2rem 0',
    backgroundColor: "var(--dark-color)",
})

export let CusNavLink = styled(ListItem)({
    padding: '0',
    margin: '0',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: "120px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    listStyle: 'none',
    whiteSpace: "nowrap"
})

export let CardSliderOverlayWrapper = styled(Box)({
    position: "absolute",
    bottom: "10%",
    right: "5%",
    backgroundColor : 'transparent' ,  
    display: "flex",
    flexDirection: "column",
    color: "white",

})

