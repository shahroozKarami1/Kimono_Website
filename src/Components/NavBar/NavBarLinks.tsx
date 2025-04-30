import { NavBarLinksProps } from '@/Types/Interfaces'
import React, { FC } from 'react'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CusNavLink } from '@/Elements/ElementsCustom'
const NavBarLinks: FC<NavBarLinksProps> = ({ link, title, subLinks }) => {
    return (
        <>
            <CusNavLink>
                <Link href={link} style={{
                    color: "#ccc",
                }}>
                    {title}
                </Link>
                <KeyboardArrowDownIcon />
            </CusNavLink>
            {/* {
                subLinks && subLinks.map((subLink) => (
                    <ListItem>
                        <Link href={subLink.link}>
                            {subLink.title}
                        </Link>
                    </ListItem>
                ))
            } */}
        </>
    )
}

export default NavBarLinks
