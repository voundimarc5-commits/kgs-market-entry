import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";

interface CountryMarker {
  name: string;
  lat: number;
  lng: number;
  opportunities: number;
}

const COUNTRY_MARKERS: CountryMarker[] = [
  { name: "Lagos", lat: 6.5, lng: 3.4, opportunities: 3 },
  { name: "Nairobi", lat: -1.3, lng: 36.8, opportunities: 2 },
  { name: "Cape Town", lat: -33.9, lng: 18.4, opportunities: 1 },
  { name: "Kigali", lat: -1.9, lng: 30, opportunities: 1 },
  { name: "Casablanca", lat: 33.6, lng: -7.6, opportunities: 1 },
  { name: "Abidjan", lat: 5.3, lng: -4, opportunities: 1 },
  { name: "Accra", lat: 5.6, lng: -0.2, opportunities: 1 },
  { name: "Johannesburg", lat: -26.2, lng: 28, opportunities: 1 },
  { name: "Cairo", lat: 30.0, lng: 31.2, opportunities: 1 },
  { name: "Dakar", lat: 14.7, lng: -17.5, opportunities: 1 },
];

// Network connections between cities
const CONNECTIONS: [number, number][] = [
  [0, 5], // Lagos - Abidjan
  [0, 6], // Lagos - Accra
  [0, 9], // Lagos - Dakar
  [1, 3], // Nairobi - Kigali
  [1, 7], // Nairobi - Johannesburg
  [1, 8], // Nairobi - Cairo
  [2, 7], // Cape Town - Johannesburg
  [4, 8], // Casablanca - Cairo
  [4, 9], // Casablanca - Dakar
  [5, 9], // Abidjan - Dakar
  [3, 7], // Kigali - Johannesburg
  [0, 8], // Lagos - Cairo
];

const latLngToSphere = (lat: number, lng: number, r: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
};

// Generate curved arc between two points on sphere
const getArcPoints = (start: THREE.Vector3, end: THREE.Vector3, segments: number = 32): THREE.Vector3[] => {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const point = new THREE.Vector3().lerpVectors(start, end, t);
    // Lift the arc above the sphere surface
    const lift = 1 + Math.sin(t * Math.PI) * 0.15;
    point.normalize().multiplyScalar(point.length() * lift);
    points.push(point);
  }
  return points;
};

const NetworkLine = ({ from, to }: { from: CountryMarker; to: CountryMarker }) => {
  const lineRef = useRef<any>(null);
  const startPos = useMemo(() => latLngToSphere(from.lat, from.lng, 2.02), [from]);
  const endPos = useMemo(() => latLngToSphere(to.lat, to.lng, 2.02), [to]);
  const arcPoints = useMemo(() => getArcPoints(startPos, endPos, 24), [startPos, endPos]);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      const opacity = 0.15 + Math.sin(clock.getElapsedTime() * 1.5 + from.lat) * 0.1;
      lineRef.current.material.opacity = Math.max(0.05, opacity);
    }
  });

  return (
    <Line
      ref={lineRef}
      points={arcPoints}
      color="#2d6a4f"
      lineWidth={0.8}
      transparent
      opacity={0.2}
    />
  );
};

const PulsingMarker = ({ marker }: { marker: CountryMarker }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const position = useMemo(() => latLngToSphere(marker.lat, marker.lng, 2.03), [marker]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      const scale = 1 + Math.sin(t * 3) * 0.3;
      meshRef.current.scale.setScalar(scale);
    }
    if (ringRef.current) {
      const ringScale = 1 + Math.sin(t * 2) * 0.5;
      ringRef.current.scale.setScalar(ringScale);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.4 - Math.sin(t * 2) * 0.3;
    }
  });

  const size = 0.03 + marker.opportunities * 0.008;
  const color = marker.opportunities >= 3 ? "#d4a843" : marker.opportunities >= 2 ? "#c4963a" : "#2d6a4f";

  return (
    <group position={position}>
      <mesh ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.95} />
      </mesh>

      <mesh ref={ringRef}>
        <ringGeometry args={[size * 1.5, size * 2.5, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      <mesh>
        <sphereGeometry args={[size * 4, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.06} />
      </mesh>

      {hovered && (
        <Html distanceFactor={8} style={{ pointerEvents: "none" }}>
          <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
            <p className="text-xs font-semibold text-foreground">{marker.name}</p>
            <p className="text-[10px] text-primary font-medium">
              {marker.opportunities} opportunit{marker.opportunities > 1 ? "ies" : "y"}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
};

const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const markersGroupRef = useRef<THREE.Group>(null);
  const networkGroupRef = useRef<THREE.Group>(null);
  const rotationRef = useRef(0);

  useFrame((_, delta) => {
    const speed = delta * 0.1;
    rotationRef.current += speed;
    if (meshRef.current) meshRef.current.rotation.y += speed;
    if (pointsRef.current) pointsRef.current.rotation.y += speed;
    if (markersGroupRef.current) markersGroupRef.current.rotation.y += speed;
    if (networkGroupRef.current) networkGroupRef.current.rotation.y += speed;
  });

  const dotPositions = useMemo(() => {
    const positions: number[] = [];
    const africaPoints = [
      { lat: 32, lng: 0 }, { lat: 30, lng: 10 }, { lat: 35, lng: -5 },
      { lat: 28, lng: 3 }, { lat: 25, lng: 30 }, { lat: 30, lng: 32 },
      { lat: 14, lng: -17 }, { lat: 6, lng: 3 }, { lat: 9, lng: -12 },
      { lat: 12, lng: -8 }, { lat: 7, lng: -5 }, { lat: 5, lng: -1 },
      { lat: 10, lng: 2 }, { lat: 13, lng: 2 },
      { lat: -1, lng: 37 }, { lat: -6, lng: 35 }, { lat: 9, lng: 38 },
      { lat: 0, lng: 32 }, { lat: -2, lng: 30 }, { lat: 15, lng: 33 },
      { lat: 4, lng: 15 }, { lat: -4, lng: 15 }, { lat: 0, lng: 25 },
      { lat: -1, lng: 10 }, { lat: 3, lng: 12 },
      { lat: -26, lng: 28 }, { lat: -34, lng: 18 }, { lat: -15, lng: 28 },
      { lat: -12, lng: 34 }, { lat: -20, lng: 47 }, { lat: -18, lng: 25 },
      { lat: 20, lng: -10 }, { lat: 15, lng: 45 }, { lat: -8, lng: 13 },
      { lat: 2, lng: 45 }, { lat: -25, lng: 33 },
      { lat: 22, lng: 15 }, { lat: 18, lng: 20 }, { lat: 5, lng: 20 },
      { lat: -10, lng: 25 }, { lat: -5, lng: 20 }, { lat: 8, lng: 30 },
      { lat: 15, lng: -5 }, { lat: 20, lng: 0 }, { lat: -15, lng: 35 },
      { lat: -22, lng: 30 }, { lat: 10, lng: 15 }, { lat: -8, lng: 30 },
    ];

    africaPoints.forEach(({ lat, lng }) => {
      const pos = latLngToSphere(lat, lng, 2.02);
      positions.push(pos.x, pos.y, pos.z);
    });

    return new Float32Array(positions);
  }, []);

  return (
    <group>
      {/* Globe wireframe */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshBasicMaterial color="#1a1a1a" wireframe transparent opacity={0.15} />
      </Sphere>

      {/* Solid dark sphere */}
      <Sphere args={[1.98, 64, 64]}>
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.1} />
      </Sphere>

      {/* Africa dots */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dotPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#2d6a4f" size={0.04} sizeAttenuation transparent opacity={0.6} />
      </points>

      {/* Network connections */}
      <group ref={networkGroupRef}>
        {CONNECTIONS.map(([fromIdx, toIdx], i) => (
          <NetworkLine key={i} from={COUNTRY_MARKERS[fromIdx]} to={COUNTRY_MARKERS[toIdx]} />
        ))}
      </group>

      {/* Country markers */}
      <group ref={markersGroupRef}>
        {COUNTRY_MARKERS.map((marker) => (
          <PulsingMarker key={marker.name} marker={marker} />
        ))}
      </group>

      {/* Atmosphere glow */}
      <Sphere args={[2.2, 64, 64]}>
        <meshBasicMaterial color="#d4a843" transparent opacity={0.03} side={THREE.BackSide} />
      </Sphere>
      <Sphere args={[2.35, 64, 64]}>
        <meshBasicMaterial color="#2d6a4f" transparent opacity={0.015} side={THREE.BackSide} />
      </Sphere>
    </group>
  );
};

const AfricaGlobe = () => {
  return (
    <div className="w-full h-[400px] md:h-[520px]">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 40 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#d4a843" />
        <pointLight position={[-10, -5, -10]} intensity={0.3} color="#2d6a4f" />
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
