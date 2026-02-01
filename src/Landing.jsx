import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

function HomeParallax() {
  const parallaxRef = useRef();

  return (
    <Parallax ref={parallaxRef} pages={2} style={{ background: "#222" }}>

      {/* ==========================
          PAGE 1: SAMURAI HOME
          ========================== */}

      {/* 1. MOUNTAINS (Background) */}
      <ParallaxLayer offset={0} speed={0.2} factor={2} style={{ zIndex: 1 }}>
        <img
          src="/mountain.png"
          className="w-full h-screen object-cover"
          alt="Mountains Background"
        />
      </ParallaxLayer>

      {/* 2. MAIN LOGO (Neon Blue) */}
      <ParallaxLayer
        offset={0}
        speed={0.2}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          paddingTop: '200px',
          paddingLeft: '50px',
          zIndex: 50
        }}
      >
        <img
          src="/logo2.png"
          alt="HackStreet Logo"
          className="w-[300px] md:w-[600px] opacity-100"
          style={{
            filter: `
            /* ICY ELECTRIC BLUE BASE */
            invert(100%) sepia(100%) saturate(400%) hue-rotate(180deg) brightness(200%) contrast(100%)
            
            /* GLOW EFFECTS */
            drop-shadow(0 0 3px rgba(0, 255, 255, 0.8)) 
            drop-shadow(0 0 15px rgba(0, 100, 255, 0.4))
        `
          }}
        />
      </ParallaxLayer>

      {/* 3. SUN */}
      <ParallaxLayer offset={0} speed={0} style={{ zIndex: 5 }}>
        <img
          src="/sun.png"
          className="absolute left-1/2 -translate-x-1/2 w-[300px]"
          style={{
            top: "8%",
            transform: `translate(-50%, ${parallaxRef.current
              ? parallaxRef.current.current * 0.3
              : 0
              }px)`,
          }}
        />
      </ParallaxLayer>

      {/* 4. TREES (Foreground Samurai) */}
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

      {/* 5. THE BRIDGE (Deep Fog Transition) */}


      {/* 6. BACKGROUND SCENERY (Lake & Pagoda) */}
      <ParallaxLayer
        offset={1}
        speed={0.2}
        style={{ zIndex: 20 }}
      >
        <div className="relative w-full h-screen">
          {/* The Image */}
          <img
            src="/about_bg.png"
            className="w-full h-full object-cover"
            alt="Lake Background"
          />


          {/* Dark Overlay */}

        </div>
      </ParallaxLayer>

      {/* 7. FOREGROUND TREES (Red Frame) */}
      <ParallaxLayer
        offset={1}
        speed={0.6}
        style={{ zIndex: 40, pointerEvents: 'none' }}
      >
        <img
          src="/about_trees.png"
          className="w-full h-screen object-cover"
          alt="Foreground Trees"
        />

        <div className="absolute inset-0 bg-black/10"></div>
      </ParallaxLayer>

      {/* 8. CONTENT LAYER (With New About Logo) */}
      {/* 8. CONTENT LAYER (Position: TOP) */}
      <ParallaxLayer
        offset={1}
        speed={0.4}
        style={{ zIndex: 30 }}
      >
        <div
          className="h-full flex flex-col items-center"
          // CHANGE 1: 'justify-start' moves everything to the top
          // CHANGE 2: 'pt-20' adds spacing so it doesn't touch the very edge
          style={{ justifyContent: 'flex-start', paddingTop: '5px' }}
        >

          <img
            src="/ab.png"
            alt="About HackStreet"
            className="w-[300px] md:w-[600px]"
            style={{
              filter: "invert(0) hue-rotate(0deg) drop-shadow(0 0 0px rgba(0, 0, 0, 0.66))"
            }}
          />



        </div>
      </ParallaxLayer>

    </Parallax>
  ); // <--- This closing parenthesis and semicolon were missing!
}

export default HomeParallax;