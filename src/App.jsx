import React from 'react';
import Landing from './Landing'; // This is your "HomeParallax" file
import Petals from './components/Petals';


function App() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Layer 1: Particles */}
      <Petals />


      {/* Layer 2: Tint */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-[15]"></div>

      {/* Layer 3: The Main Parallax Page (Logo is now inside here!) */}
      <Landing />
    </div>
  );
}

export default App;