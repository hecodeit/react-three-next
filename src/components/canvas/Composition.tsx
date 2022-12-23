import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three'
import { useRef } from 'react';
import Box from '@/components/canvas/Box'

export default function Composition({ scroll }) {
    const group = useRef<any>()

    useFrame((state, delta) => {
        group.current.rotation.y = MathUtils.damp(group.current.rotation.y, -Math.PI * scroll.current, 4, delta)
    })
    return (
        <group ref={group}>
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </group>
    )
}