export default function Terrain() {
    return (
        <>
            <mesh rotation-x={-Math.PI / 2} position={[0, -0.04, 0]}>
                <planeGeometry args={[80, 80]} />
                <meshBasicMaterial color='#9ba1b4' />
            </mesh>
            <gridHelper args={[80, 50, '#abbec7', '#abbec7']} position={[0, -0.03, 0]} />
        </>
    )
}