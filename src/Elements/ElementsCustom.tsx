"use client"
import { Box, List, ListItem, styled, TextField } from "@mui/material";

export let LandingContainer = styled(Box)({
    width: '100%',
    height: '100vh',
    backgroundColor: "var(--dark-color)",
    position: 'relative',
})

export let NavBarContainer = styled(Box)({
    width: '100%',
    height: '100px',
    padding: ' 2rem 0',

    position: "relative",
    backgroundColor: "var(--dark-color)",
})

export let CusNavLink = styled(ListItem)({
    padding: '0',
    margin: '0',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: "120px",
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    listStyle: 'none',
    whiteSpace: "nowrap"
})

export let CardSliderOverlayWrapper = styled(Box)({
    position: "absolute",
    bottom: "10%",
    right: "5%",
    backgroundColor: 'transparent',
    display: "flex",
    flexDirection: "column",
    color: "white",

})

export let SubListNavBar = styled(List)({

    flexDirection: 'column',
    backgroundColor: '#000',
    position: 'absolute',
    right: '0',
    top: 40,
    width: '250px',
    zIndex: 999,
    borderRadius: '10px',
    padding: '  0.5rem',


})


export let CusTextFieldSearching = styled(TextField)({
    backgroundColor: 'var(--dark-color)',
    borderRadius: '10px',
    padding: '0.25rem',
    border: "1px solid #444",
    width: '100%',
    height: '100%',
    fontSize: '1.25rem',
    animation: "slideDown 0.3s ease-in-out",

    "& ::placeholder": {
        color: '#fff',
        fontSize: '1.25rem',
    }




})

export let RightSideInfoContainer = styled(Box)({
    width: '400px',
    height: '100%',
    padding: '3rem',
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    boxShadow: '0 0 20px 0px  var(--red-color)',
    left: 0,
    top: 0,
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: '#000',
})

export let WrapperImg = styled(Box)({

    borderRadius: '0.25rem',
    overflow: 'hidden',
    margin: '0.5rem 0 '
})

export let ContainerRightSideInfoList = styled(List)({
    padding: 0,
    margin: "1rem  0",
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
})
