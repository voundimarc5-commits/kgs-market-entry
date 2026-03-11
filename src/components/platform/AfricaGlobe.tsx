import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
    }
  });

  const dotPositions = useMemo(() => {
    const positions: number[] = [];
    // African continent approximate lat/lng ranges converted to sphere points
    const africaPoints = [
      // North Africa
      { lat: 32, lng: 0 }, { lat: 30, lng: 10 }, { lat: 35, lng: -5 },
      { lat: 28, lng: 3 }, { lat: 25, lng: 30 }, { lat: 30, lng: 32 },
      // West Africa
      { lat: 14, lng: -17 }, { lat: 6, lng: 3 }, { lat: 9, lng: -12 },
      { lat: 12, lng: -8 }, { lat: 7, lng: -5 }, { lat: 5, lng: -1 },
      { lat: 10, lng: 2 }, { lat: 13, lng: 2 },
      // East Africa
      { lat: -1, lng: 37 }, { lat: -6, lng: 35 }, { lat: 9, lng: 38 },
      { lat: 0, lng: 32 }, { lat: -2, lng: 30 }, { lat: 15, lng: 33 },
      // Central Africa
      { lat: 4, lng: 15 }, { lat: -4, lng: 15 }, { lat: 0, lng: 25 },
      { lat: -1, lng: 10 }, { lat: 3, lng: 12 },
      // Southern Africa
      { lat: -26, lng: 28 }, { lat: -34, lng: 18 }, { lat: -15, lng: 28 },
      { lat: -12, lng: 34 }, { lat: -20, lng: 47 }, { lat: -18, lng: 25 },
      // Additional
      { lat: 20, lng: -10 }, { lat: 15, lng: 45 }, { lat: -8, lng: 13 },
      { lat: 2, lng: 45 }, { lat: -25, lng: 33 },
    ];

    africaPoints.forEach(({ lat, lng }) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const r = 2.02;
      positions.push(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    });

    return new Float32Array(positions);
  }, []);

  return (
    <group>
      {/* Globe wireframe */}
      <Sphere ref={meshRef} args={[2, 48, 48]}>
        <meshBasicMaterial
          color="#1a1a1a"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Solid dark sphere inside */}
      <Sphere args={[1.98, 48, 48]}>
        <meshBasicMaterial color="#0d0d0d" />
      </Sphere>

      {/* Africa highlighted dots */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dotPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#d4a843"
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      {/* Atmosphere glow ring */}
      <Sphere args={[2.15, 48, 48]}>
        <meshBasicMaterial
          color="#d4a843"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

const AfricaGlobe = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <GlobeMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default AfricaGlobe;
