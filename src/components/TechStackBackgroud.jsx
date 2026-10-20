
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function FloatingHexagon({
                             position,
                             size = 1,
                             speed = 0.1,
                             color = '#2dd4bf',
                         }) {
    const meshRef = useRef(null);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        meshRef.current.rotation.y += delta * speed;
        meshRef.current.rotation.x =
            Math.sin(state.clock.elapsedTime * speed) * 0.15;
    });

    return (
        <mesh ref={meshRef} position={position}>
            <cylinderGeometry args={[size, size, 0.12, 6]} />

            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.12}
                wireframe
                depthWrite={false}
            />
        </mesh>
    );
}

function FloatingShapes() {
    return (
        <>
            <FloatingHexagon
                position={[-3, 1, -2]}
                size={0.9}
                speed={0.12}
                color="#2dd4bf"
            />

            <FloatingHexagon
                position={[3, 1.5, -3]}
                size={1.3}
                speed={-0.1}
                color="#38bdf8"
            />

            <FloatingHexagon
                position={[0, -2, -4]}
                size={0.8}
                speed={0.15}
                color="#a78bfa"
            />

            <FloatingHexagon
                position={[3.2, -1.8, -3]}
                size={0.6}
                speed={-0.08}
                color="#2dd4bf"
            />
        </>
    );
}

export default function TechStackBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0
                 hidden overflow-hidden
                 md:block motion-reduce:hidden"
        >
            <Canvas
                camera={{ position: [0, 0, 9], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ alpha: true }}
                style={{ background: 'transparent' }}
            >
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
