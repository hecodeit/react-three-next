import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Interactive } from '@react-three/xr'

export default function XRBox(props: JSX.IntrinsicElements['mesh']) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!)
    // Hold state for hovered and clicked events
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return (
        <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)}>
            <mesh
                {...props}
                ref={ref}
                scale={hovered ? 1.5 : 1}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
        </Interactive>
    )
}