import React from 'react'
import { FallingLines } from 'react-loader-spinner'
import './Loading.scss'

export default function Loading() {
    return <FallingLines
        color="#272d32"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
    />
}
