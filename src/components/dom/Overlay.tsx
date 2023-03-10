import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Overlay() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>pages/index.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="./vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="./next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <div className={styles.thirteen}>
                    <Image
                        src="./thirteen.svg"
                        alt="13"
                        width={40}
                        height={31}
                        priority
                    />
                </div>
            </div>

            <div className={styles.grid}>

                <Link href="./scroll" className={styles.card}>
                    <h2>
                        Scroll Page <span>-&gt;</span>
                    </h2>
                    <p>
                        Show how rendering and scrolling DOM and Canvas both.
                    </p>
                </Link>

                <Link href="./xr" className={styles.card}>
                    <h2>
                        XR <span>-&gt;</span>
                    </h2>
                    <p>
                        XR Sample page.
                    </p>
                </Link>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>
                        Discover and deploy boilerplate example Next.js&nbsp;projects.
                    </p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL
                        with&nbsp;Vercel.
                    </p>
                </a>
            </div>
        </main>
    )
}