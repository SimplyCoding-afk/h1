import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

import CountdownTimer from "./components/CountdownTimer";
import SideScrollMenu from "./components/SideScrollMenu";

function HomeParallax() {
  const parallaxRef = useRef();

  const scroll = (to) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to);
    }
  };

  return (
    <>
      <SideScrollMenu scrollToPage={scroll} />

      {/* Background set to BLACK to hide any potential seams */}
      <Parallax ref={parallaxRef} pages={2} style={{ background: "#000" }}>

        {/* ==========================
            PAGE 1: SAMURAI HOME
            ========================== */}

        <ParallaxLayer offset={0} speed={0.2} factor={2} style={{ zIndex: 1 }}>
          <img src="/mountain.png" className="w-full h-screen object-cover" alt="Mountains" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', paddingTop: '200px', paddingLeft: '50px', zIndex: 50 }}>
          <img
            src="/logo2.png"
            alt="HackStreet Logo"
            className="w-[300px] md:w-[600px] opacity-100"
            style={{ filter: "invert(100%) sepia(100%) saturate(400%) hue-rotate(180deg) brightness(200%) contrast(100%) drop-shadow(0 0 3px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 15px rgba(0, 100, 255, 0.4))" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} style={{ zIndex: 55, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '80px', pointerEvents: 'none' }}>
          <div style={{ pointerEvents: 'auto' }}>
            <CountdownTimer />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0} style={{ zIndex: 5 }}>
          <img src="/sun.png" className="absolute left-1/2 -translate-x-1/2 w-[300px]" style={{ top: "8%", transform: `translate(-50%, ${parallaxRef.current ? parallaxRef.current.current * 0.3 : 0}px)` }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3} factor={1.1} style={{ zIndex: 20 }}>
          <img src="/trees.png" className="w-full h-screen object-cover" style={{ opacity: 0.8 }} />
        </ParallaxLayer>


        {/* ==========================
            PAGE 2: ABOUT SECTION
            ========================== */}

        {/* 6. BACKGROUND SCENERY (Lake) */}
        <ParallaxLayer
          offset={0.99}
          speed={0.2}
          style={{ zIndex: 20 }}
        >
          {/* BRUTE FORCE FIX:
              1. height: '130vh' -> Forces it to be 30% taller than the screen.
              2. marginTop: '-15vh' -> Pulls it up to overlap the gap heavily.
              3. scale(1.05) -> Slight zoom to push edges off-screen.
          */}
          <img
            src="/about_bg.png"
            className="w-full object-cover"
            alt="Lake"
            style={{
              height: '130vh',
              marginTop: '-15vh',
              transform: 'scale(1.05)',
              minHeight: '100vh'
            }}
          />
        </ParallaxLayer>

        {/* 7. FOREGROUND TREES (About) */}
        <ParallaxLayer offset={1} speed={0.6} style={{ zIndex: 40, pointerEvents: 'none' }}>
          <img src="/about_trees.png" className="w-full h-screen object-cover" alt="Trees" />
          <div className="absolute inset-0 bg-black/10"></div>
        </ParallaxLayer>

        {/* 8. CONTENT (About Logo) */}
        <ParallaxLayer offset={1} speed={0.4} style={{ zIndex: 30 }}>
          <div className="h-full flex flex-col items-center" style={{ justifyContent: 'flex-start', paddingTop: '5px' }}>
            <img
              src="/ab.png"
              alt="About HackStreet"
              className="w-[300px] md:w-[600px]"
              style={{ filter: "invert(0) hue-rotate(0deg) drop-shadow(0 0 0px rgba(0, 0, 0, 0.66))" }}
            />
          </div>
        </ParallaxLayer>

      </Parallax>
    </>
  );
}

export default HomeParallax;