import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const NimbusModel = ({ position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF("/assets/nimbus.glb");
  const nimbusRef = useRef();
  const clockRef = useRef(0);

  // Animace "letání"
  useFrame(() => {
    if (nimbusRef.current) {
      clockRef.current += 0.02; // Rychlost pohybu
      nimbusRef.current.position.y = position[1] + Math.sin(clockRef.current) * 0.2; // Pohyb nahoru a dolů
    }
  });

  return (
    <primitive
      ref={nimbusRef}
      object={scene}
      scale={scale}
      position={position}
    />
  );
};

// useGLTF.preload("/assets/nimbus.glb");

const Nimbus = ({ position = [0, 0, 0], scale = 1 }) => {
  return (
    <div style={{ width: "100%", height: "100vh", zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={5} />
        <directionalLight position={[-2, 2, 2]} />
        <Suspense>
          <NimbusModel position={position} scale={scale} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Nimbus;
