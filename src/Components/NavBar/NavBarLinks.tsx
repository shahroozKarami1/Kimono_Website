import { NavBarLinksProps } from '@/Types/Interfaces'
import React, { FC } from 'react'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CusNavLink, SubListNavBar } from '@/Elements/ElementsCustom'
import { ListItem } from '@mui/material';
const NavBarLinks: FC<NavBarLinksProps> = ({ link, title, subLinks }) => {
    return (
        <>
            <CusNavLink className='landing__nav-link' >
                <Link href={link} style={{
                    color: "#ccc",
                }}>
                    {title}
                </Link>
                {
                    subLinks && subLinks.length > 0 && (
                        <KeyboardArrowDownIcon />

                    )
                }
                <SubListNavBar className='landing__sub-list' sx={{
                    display: {
                        xs: "none",
                        md: "none"
                    },

                }}>
                    {
                        subLinks && subLinks.map(({ link, title }, index) => (
                            <ListItem key={index} sx={{
                                padding: "1rem  "
                            }}>
                                <Link href={link}>
                                    {title}
                                </Link>
                            </ListItem>
                        ))
                    }
                </SubListNavBar>
            </CusNavLink>
        </>
    )
}

export default NavBarLinks
