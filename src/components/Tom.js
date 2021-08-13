/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react"
import tomImage from "./tom.png"
const Tom = props => {

    useEffect(() => {
        const updateMouse = event => {
            props.setTomPosition( p => ({
                x: event.x,
                y: event.y,
                direction: event.x >= p.x ? -1 : 1
            }))
        }
        window.addEventListener("mousemove", updateMouse);

        return () => {
            window.removeEventListener('mousemove', updateMouse);
        }
    }, [])

    console.log(props.tomPosition.direction)
    return <div>
        <img src={tomImage} style={{
            width: '140px',
            height: '200px',
            position: 'absolute',
            transform: `scaleX(${props.tomPosition.direction})`,
            left: props.tomPosition.x - 70,
            top: props.tomPosition.y - 100,
            // border:`1px solid`
        }} />
    </div>
}

export default Tom