"use client"
import { Rating } from '@mui/material';
import React, { FC, useState } from 'react'

const RatedStar: FC<{ PropsValue: number }> = ({ PropsValue }) => {
    let [value, setValue] = useState<number | null>(PropsValue ? PropsValue : 3)
    return (
        <Rating
            sx={{
                transform: 'rotate(360deg)',
                direction: 'rtl'
            }}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />
    )
}

export default RatedStar
