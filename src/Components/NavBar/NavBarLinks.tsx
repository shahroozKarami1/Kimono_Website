import { NavBarLinksProps } from '@/Types/Interfaces'
import React, { FC } from 'react'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CusNavLink, SubListNavBar } from '@/Elements/ElementsCustom'
import { List, ListItem } from '@mui/material';
const NavBarLinks: FC<NavBarLinksProps> = ({ link, title, subLinks }) => {
    return (
        <>
            <CusNavLink className='landing__nav-link' >
                <Link href={link} style={{
                    color: "#ccc",
                }}>
                    {title}
                </Link>
                <KeyboardArrowDownIcon />
                <SubListNavBar className='landing__sub-list' sx={{
                    display: {
                        xs: "none",
                        md: "none"
                    },

                }}>
                    {
                        subLinks && subLinks.map(({ link, title }) => (
                            <ListItem sx={{
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
