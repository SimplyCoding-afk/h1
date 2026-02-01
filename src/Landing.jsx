import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

import CountdownTimer from "./components/CountdownTimer";
import SideScrollMenu from "./components/SideScrollMenu";

function HomeParallax() {
  const parallaxRef = useRef();

  // Scroll handler for the menu
  const scroll = (to) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to);
    }
  };

  return (
    <>
      <SideScrollMenu scrollToPage={scroll} />

      <Parallax ref={parallaxRef} pages={2} style={{ background: "#222" }}>

        {/* ==========================
            PAGE 1: SAMURAI HOME
            ========================== */}

        {/* 1. MOUNTAINS (Background) */}
        <ParallaxLayer offset={0} speed={0.2} factor={2} style={{ zIndex: 1 }}>
          <img
            src="/mountain.png"
            className="w-full h-screen object-cover"
            alt="Mountains"
          />
        </ParallaxLayer>

        {/* 2. LOGO (FIXED RESPONSIVENESS) 
            - Removed fixed 'paddingLeft' (was pushing it off-center).
            - Changed 'paddingTop: 200px' to 'paddingTop: 20vh' (20% of screen height).
            - Added 'w-[80vw]' to ensure it scales on phones too.
        */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            display: 'flex',
            justifyContent: 'center', // Perfectly centered horizontally
            alignItems: 'flex-start', // Starts from top
            paddingTop: '25vh',       // Pushes down by 25% of ANY screen height
            zIndex: 50
          }}
        >
          <img
            src="/logo2.png"
            alt="HackStreet Logo"
            // Width scales with screen width (80vw on mobile, max 600px on desktop)
            className="w-[80vw] md:w-[50vw] max-w-[600px] opacity-100"
            style={{
              filter: "invert(100%) sepia(100%) saturate(400%) hue-rotate(180deg) brightness(200%) contrast(100%) drop-shadow(0 0 3px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 15px rgba(0, 100, 255, 0.4))"
            }}
          />
        </ParallaxLayer>

        {/* 3. COUNTDOWN TIMER (FIXED RESPONSIVENESS)
            - Changed 'paddingBottom: 80px' to '10vh' so it stays proportional.
        */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            zIndex: 55,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '12vh', // 12% from bottom on any device
            pointerEvents: 'none'
          }}
        >
          <div style={{ pointerEvents: 'auto', transform: 'scale(0.9)' }}>
            {/* Added scale(0.9) to ensure it fits on smaller laptop screens */}
            <CountdownTimer />
          </div>
        </ParallaxLayer>

        {/* 4. SUN (Already good, but ensured centering) */}
        <ParallaxLayer offset={0} speed={0} style={{ zIndex: 5 }}>
          <img
            src="/sun.png"
            className="absolute left-1/2 -translate-x-1/2 w-[250px] md:w-[300px]" // Responsive width
            style={{
              top: "10%", // Relative top position is good
              transform: `translate(-50%, ${parallaxRef.current ? parallaxRef.current.current * 0.3 : 0}px)`
            }}
          />
        </ParallaxLayer>

        {/* 5. FOREGROUND TREES */}
        <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: 20 }}>
          <img
            src="/trees.png"
            className="w-full h-screen object-cover"
            style={{ opacity: 0.8 }}
          />
        </ParallaxLayer>


        {/* ==========================
            PAGE 2: ABOUT SECTION
            ========================== */}

        {/* 6. BACKGROUND SCENERY */}
        <ParallaxLayer offset={1} speed={0.2} style={{ zIndex: 20 }}>
          <div className="relative w-full h-screen">
            <img
              src="/about_bg.png"
              className="w-full h-full object-cover"
              alt="Lake"
            />
          </div>
        </ParallaxLayer>

        {/* 7. FOREGROUND TREES */}
        <ParallaxLayer offset={1} speed={0.6} style={{ zIndex: 40, pointerEvents: 'none' }}>
          <img
            src="/about_trees.png"
            className="w-full h-screen object-cover"
            alt="Trees"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </ParallaxLayer>

        {/* 8. CONTENT (About Logo - FIXED RESPONSIVENESS) 
            - Used flex-center instead of padding-top 5px (which is too tight).
            - Added margin-top using 'vh' so it floats nicely.
        */}
        <ParallaxLayer offset={1} speed={0.4} style={{ zIndex: 30 }}>
          <div
            className="h-full flex flex-col items-center"
            style={{
              justifyContent: 'flex-start',
              paddingTop: '15vh' // Pushes it down 15% from top
            }}
          >
            <img
              src="/ab.png"
              alt="About HackStreet"
              className="w-[80vw] md:w-[40vw] max-w-[600px]" // Responsive width
              style={{
                filter: "invert(0) hue-rotate(0deg) drop-shadow(0 0 0px rgba(0, 0, 0, 0.66))"
              }}
            />
          </div>
        </ParallaxLayer>

      </Parallax>
    </>
  );
}

export default HomeParallax;