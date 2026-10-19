import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function RotatingShape() {
    const meshRef = useRef(null);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        meshRef.current.rotation.x += delta * 0.15;
        meshRef.current.rotation.y += delta * 0.3;
    });

    return (
        <mesh ref={meshRef} rotation={[0.3, 0.2, 0]}>
            <dodecahedronGeometry args={[1.5, 0]} />

            <meshStandardMaterial
                color="#20b9ad"
                metalness={0.3}
                roughness={0.3}
                flatShading
            />
        </mesh>
    );
}

export default function HeroScene() {
    return (
        <div className="h-full w-full">
            <Canvas
                camera={{
                    position: [0, 0, 5.5],
                    fov: 45,
                }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={1.5} />

                <directionalLight
                    position={[4, 5, 5]}
                    intensity={3}
                    color="#a7fff0"
                />

                <pointLight
                    position={[-3, -2, 2]}
                    intensity={15}
                    color="#a78bfa"
                />

                <RotatingShape />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableDamping
                />
            </Canvas>
        </div>
    );
}
