import { forwardRef } from "react"
import styles from '@/styles/Overlay.module.css'

const Overlay = forwardRef<any, any>(({ caption, scroll }, ref) => (
    <div
        ref={ref}
        onScroll={(e: any) => {
            scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
            caption.current.innerText = Math.floor(scroll.current * 100) + ' %'
        }}
        className={styles.scroll}>
        <div style={{ height: "400vh" }}>
            <div className={styles.dot}>
                <h1>headset<span style={{ fontSize: '.4em' }}>头戴式设备</span></h1>
                Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className={styles.dot}>
                <h1>headphone</h1>
                Headphones are a pair of small loudspeaker drivers worn on or around the head over a user&apos;s ears.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className={styles.dot}>
                <h1>rocket</h1>A rocket (from Italian: rocchetto, lit. &apos;bobbin/spool&apos;)[nb 1][1] is a projectile that spacecraft, aircraft or other vehicle use to obtain thrust from a
                rocket engine.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className={styles.dot}>
                <h1>turbine</h1>A turbine (/&apos;tɜːrbaɪn/ or /&apos;tɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary mechanical device that extracts energy
                from a fluid flow and converts it into useful work.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className={styles.dot}>
                <h1>table</h1>A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things.[1][2]
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className={styles.dot}>
                <h1>laptop</h1>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className={styles.dot}>
                <h1>zeppelin</h1>A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn]) who pioneered rigid
                airship development at the beginning of the 20th century.
            </div>
        </div>
        <span className={styles.caption} ref={caption}>
            0 %
        </span>

    </div>
))

// 👇️ set display name
Overlay.displayName = 'Overlay';
export default Overlay
