/* eslint-disable jsx-a11y/alt-text */
import jerryImage from './jerry.png'
import { motion } from "framer-motion"

const Jerry = props => {
    const variants = {
        left: { scaleX: -1 },
        right: { scaleX: 1 },
    }
    return <motion.div style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: props.y + 'px',
            left: props.x + 'px',
    }}
    layout="jerry"
    >
        <img
            src={jerryImage}
            style={{
                width: '100px',
                height: '100px',
                transform: `scaleX(${props.direction})`
            }}
            ></img>
        </motion.div>
}

export default Jerry;