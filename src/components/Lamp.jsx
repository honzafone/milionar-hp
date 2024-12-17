import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const LampModel = ({ position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF("/assets/lamp.glb");
  const lampRef = useRef();

  // Animace rotace
  useFrame(() => {
    if (lampRef.current) {
      lampRef.current.rotation.y += 0.005; // Rychlost rotace kolem osy Y
    }
  });

  return <primitive ref={lampRef} object={scene} scale={scale} position={position} />;
};

useGLTF.preload("/assets/lamp.glb");

const Lamp = ({ position, scale }) => {
  return (
    <div style={{ width: "100%", height: "100vh", zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 2, 2]} />
        <Suspense>
          <LampModel position={position} scale={scale} />
        </Suspense>
      </Canvas>
    </div>
  );
};


export default Lamp;
