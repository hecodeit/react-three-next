import { Canvas } from '@react-three/fiber'
import styles from '@/styles/ThreeFiber.module.css'


export default function ThreeFiber({ children, ...props }) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <div className={styles.canvas}>
            <Canvas {...props}>
                <directionalLight intensity={0.75} />
                <ambientLight intensity={0.75} />
                {children}
            </Canvas>
        </div>
    )
}