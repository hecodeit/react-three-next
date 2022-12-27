import { Canvas } from '@react-three/fiber'
import styles from '@/styles/ThreeFiber.module.css'
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { Sky } from '@react-three/drei'
import Terrain from './Terrain'


export default function ThreeFiberXR({ children, ...props }) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <div className={styles.canvas}>
            <VRButton />
            <Canvas {...props}>
                <XR>
                    <Controllers />
                    <Hands />
                    <Sky sunPosition={[0, 1, 0]} />
                    <Terrain />
                    <directionalLight intensity={0.75} />
                    <ambientLight intensity={0.75} />
                    {children}
                </XR>
            </Canvas>
        </div>
    )
}