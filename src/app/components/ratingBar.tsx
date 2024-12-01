"use client";


import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

type Props = {
    rating: number
}

const RatingBar = ({ rating }: Props) => {
    return (
        <CircularProgressbar
            value={rating * 100}
            text={`${rating * 100}%`}
            styles={buildStyles({
                textSize: "29px",
                textColor: "#ffffff",
                pathColor: "#16a34a",
                trailColor: "#14532D",
            })}
        />
    )
}

export default RatingBar