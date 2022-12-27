import Header from '@/header'
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ThreeFiberXR = dynamic(() => import('@/components/canvas/ThreeFiberXR'), { ssr: true })
const XRBox = dynamic(() => import('@/components/canvas/XRBox'), { ssr: true })
const XRButton = dynamic(() => import('@/components/canvas/XRBurron'), { ssr: true })

export default function Home() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <Header />
            {!isMounted ? null : (
                <Suspense fallback={null}>
                    <ThreeFiberXR eventSource={document.getElementById("__next")} eventPrefix="client">
                        <XRBox position={[-1.2, 1, -2]} />
                        <XRBox position={[1.2, 1, -2]} />
                        <XRButton position={[0, 1, -2]} />
                    </ThreeFiberXR>
                </Suspense>
            )}
        </>
    )
}
