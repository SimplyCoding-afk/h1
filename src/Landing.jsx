import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

function HomeParallax() {
  const parallaxRef = useRef();

  return (
    <Parallax ref={parallaxRef} pages={2} style={{ background: "black" }}>

      {/* Mountains */}
      <ParallaxLayer offset={0} speed={0.2}>
        <img src="/mountains.png" className="w-full h-screen object-cover" />
      </ParallaxLayer>

      {/* Sun - manual downward movement */}
      <ParallaxLayer offset={0} speed={0}>
        <img
          src="/sun.png"
          className="absolute left-1/2 -translate-x-1/2 w-[300px]"
          style={{
            top: "10%",
            transform: `translate(-50%, ${
              parallaxRef.current
                ? parallaxRef.current.current * 0.3
                : 0
            }px)`,
          }}
        />
      </ParallaxLayer>

      {/* Trees */}
      <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: 10 }}>
  <img
    src="/trees.png"
    className="w-full h-screen object-cover"
    style={{ opacity: 0.95 }}
  />
</ParallaxLayer>


      {/* Text */}
      <ParallaxLayer offset={0} speed={0.4}>
        <div className="h-screen flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-bold">HackStreet</h1>
          <p className="mt-4">Code. Compete. Conquer.</p>
        </div>
      </ParallaxLayer>
      


      
      

      {/* About */}
      <ParallaxLayer offset={1} speed={0.3}>
        <div className="h-screen bg-black text-white flex justify-center items-center">
          <h2 className="text-4xl">About HackStreet</h2>
        </div>
      </ParallaxLayer>

    </Parallax>
  );
}

export default HomeParallax;
