/* eslint-disable jsx-a11y/alt-text */
import jerryImage from './jerry.png'
import { motion } from "framer-motion"

const Jerry = props => {

    return <motion.img src={jerryImage} layout="jerry" style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: props.y + 'px',
            left: props.x + 'px',
            // filter: 'invert(1) !important',
            // border:` ${props.isCaught ? 3 : 1}px solid ${props.isCaught ? "red" : "gray"}`
        }}></motion.img>
}

export default Jerry;