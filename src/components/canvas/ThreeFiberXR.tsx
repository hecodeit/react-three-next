import { Canvas } from '@react-three/fiber'
import styles from '@/styles/ThreeFiber.module.css'
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { Grid, OrbitControls, Sky } from '@react-three/drei'

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
                    <Grid args={[10, 10]} cellSize={.5} cellColor='#abbec7' cellThickness={1} sectionColor='#abbec7' sectionThickness={1} infiniteGrid fadeDistance={25} />
                    <directionalLight intensity={0.75} />
                    <ambientLight intensity={0.75} />
                    {children}
                    <OrbitControls />
                </XR>
            </Canvas>
        </div>
    )
}