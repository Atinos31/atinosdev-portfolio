
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Connections between nodes
const positions = [
    [-2.2, 1.3, 0],
    [-1.1, 2, -0.4],
    [0.4, 1.9, 0],
    [1.8, 1.3, -0.3],
    [2.3, 0, 0],
    [1.6, -1.4, 0],
    [0, -2, -0.2],
    [-1.8, -1.3, 0],
    [-2.4, 0, 0],
    [0, 0, -1],
];

const connections = [
    [0, 1], [1, 2], [2, 3],
    [3, 4], [4, 5], [5, 6],
    [6, 7], [7, 8], [8, 0],
    [0, 9], [2, 9], [4, 9],
    [6, 9], [8, 9],
    [1, 3], [5, 7],
];

function Network() {
    const group = useRef(null);

    const geometry = useMemo(() => {
        const points = [];

        connections.forEach(([start, end]) => {
            points.push(
                ...positions[start],
                ...positions[end]
            );
        });

        const result = new THREE.BufferGeometry();

        result.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(points, 3)
        );

        return result;
    }, []);

    useFrame((state, delta) => {
        if (!group.current) return;

        group.current.rotation.y += delta * 0.035;
        group.current.rotation.x =
            Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    });

    return (
        <group ref={group}>
            <lineSegments geometry={geometry}>
                <lineBasicMaterial
                    color="#2dd4bf"
                    transparent
                    opacity={0.4}
                />
            </lineSegments>

            {positions.map((position, index) => (
                <mesh key={index} position={position}>
                    <sphereGeometry args={[0.055, 12, 12]} />
                    <meshBasicMaterial color="#5eead4" />
                </mesh>
            ))}
        </group>
    );
}

export default function KnowledgeGraph() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0"
        >
            <Canvas
                camera={{ position: [0, 0, 7], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
            >
                <Network />
            </Canvas>
        </div>
    );
}
