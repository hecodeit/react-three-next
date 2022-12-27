import { Interactive } from "@react-three/xr"
import { useState } from "react"
import { Text } from '@react-three/drei'

function Box({ color, size, scale, children, ...rest }: any) {
    return (
        <mesh scale={scale} {...rest}>
            <boxGeometry args={size} />
            <meshPhongMaterial color={color} />
            {children}
        </mesh>
    )
}

export default function XRButton(props: any) {
    const [hover, setHover] = useState(false)
    const [color, setColor] = useState(0x123456)

    const onSelect = () => {
        setColor((Math.random() * 0xffffff) | 0)
    }

    return (
        <Interactive onSelect={onSelect} onHover={() => setHover(true)} onBlur={() => setHover(false)}>
            <Box color={color} scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]} size={[0.4, 0.1, 0.1]} {...props}>
                <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
                    Hello react-xr!
                </Text>
            </Box>
        </Interactive>
    )
}