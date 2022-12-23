import Header from '@/header'
import Overlay from '@/components/dom/ScrollOverlay'
import { Suspense, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ThreeFiber = dynamic(() => import('@/components/canvas/ThreeFiber'), { ssr: true })
const Composition = dynamic(() => import('@/components/canvas/Composition'), { ssr: true })

export default function Home() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const overlay = useRef()
    const caption = useRef()
    const scroll = useRef(0)

    return (
        <>
            <Header />
            <Overlay ref={overlay} caption={caption} scroll={scroll} />
            {!isMounted ? null : (
                <Suspense fallback={null}>
                    <ThreeFiber eventSource={document.getElementById("__next")} eventPrefix="client">
                        <Composition scroll={scroll} />
                    </ThreeFiber>
                </Suspense>
            )}
        </>
    )
}
