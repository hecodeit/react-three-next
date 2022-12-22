import Header from '@/header'
import Overlay from '@/components/dom/Overlay'
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Box = dynamic(() => import('@/components/canvas/Box'), { ssr: true })
const ThreeFiber = dynamic(() => import('@/components/canvas/ThreeFiber'), { ssr: true })

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
          <ThreeFiber eventSource={document.getElementById("__next")} eventPrefix="client">
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
          </ThreeFiber>
        </Suspense>
      )}
      <Overlay />

    </>
  )
}
