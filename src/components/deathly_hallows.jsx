import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const DeathlyHallowsModel = ({ position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF("/assets/deathly_hallows.glb");
  const deathlyHallowsRef = useRef();

  // Animace rotace
  useFrame(() => {
    if (deathlyHallowsRef.current) {
      deathlyHallowsRef.current.rotation.y += 0.005; // Rychlost rotace kolem osy Y
    }
  });

  return (
    <primitive
      ref={deathlyHallowsRef}
      object={scene}
      scale={scale}
      position={position}
    />
  );
};

useGLTF.preload("/assets/deathly_hallows.glb");

const DeathlyHallows = ({ position = [0, 0, 0], scale = 1 }) => {
  return (
    <div style={{ width: "100%", height: "100vh", zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={0.5} color={"black"} />
        <directionalLight position={[-2, 2, 2]} color={"yellow"} intensity={0.5}/>
        <Suspense>
          <DeathlyHallowsModel position={position} scale={scale} />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default DeathlyHallows;
