
import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const knowledgeNodes = [
    {
        id: 'python',
        name: 'Python',
        color: '#FACC15',
        position: 'top-left',
        description:
            'I use Python for backend development, business logic, automation and web applications.',
    },
    {
        id: 'django',
        name: 'Django',
        color: '#44B78B',
        position: 'top-right',
        description:
            'I build database-driven applications, APIs and content management systems with Django and Wagtail.',
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        color: '#60A5FA',
        position: 'bottom-left',
        description:
            'I work with PostgreSQL, relational data models and SQL queries in backend applications.',
    },
    {
        id: 'agents',
        name: 'AI Agents',
        color: '#C084FC',
        position: 'bottom-right',
        description:
            'I am developing my skills in AI agents, language model integrations and intelligent workflows.',
    },
    {
        id: 'data',
        name: 'Data Engineering',
        color: '#2DD4BF',
        position: 'bottom-center',
        description:
            'I am expanding my Python and SQL experience into data pipelines, data processing and analytics.',
    },
];

// Coordinates for the decorative Three.js network.
// Clickable labels are positioned separately using HTML.
const points = [
    [-1.9, 1.3, -0.6],
    [1.9, 1.3, -0.6],
    [-1.9, -1.0, -0.6],
    [1.9, -1.0, -0.6],
    [0, -2.0, -0.6],
    [0, 1.9, -1.4],
    [-0.2, 0, -1.8],
];

const connections = [
    [0, 1],
    [0, 2],
    [0, 5],
    [0, 6],
    [1, 3],
    [1, 5],
    [1, 6],
    [2, 4],
    [2, 6],
    [3, 4],
    [3, 6],
    [4, 6],
    [5, 6],
];

function NetworkScene({ reducedMotion }) {
    const groupRef = useRef(null);

    const geometry = useMemo(() => {
        const vertices = [];

        connections.forEach(([start, end]) => {
            vertices.push(
                ...points[start],
                ...points[end]
            );
        });

        const result = new THREE.BufferGeometry();

        result.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(vertices, 3)
        );

        return result;
    }, []);

    useEffect(() => {
        return () => geometry.dispose();
    }, [geometry]);

    useFrame((state) => {
        if (!groupRef.current || reducedMotion) return;

        const time = state.clock.elapsedTime;

        // Extremely small movement to avoid distraction.
        groupRef.current.rotation.y =
            Math.sin(time * 0.2) * 0.04;

        groupRef.current.position.y =
            Math.sin(time * 0.35) * 0.03;
    });

    return (
        <group ref={groupRef} scale={0.72}>
            <lineSegments geometry={geometry}>
                <lineBasicMaterial
                    color="#2DD4BF"
                    transparent
                    opacity={0.22}
                    depthWrite={false}
                />
            </lineSegments>

            {points.map((point, index) => (
                <mesh key={index} position={point}>
                    <sphereGeometry args={[0.045, 12, 12]} />
                    <meshBasicMaterial
                        color={
                            index === 5 ? '#38BDF8' : '#2DD4BF'
                        }
                        transparent
                        opacity={0.65}
                    />
                </mesh>
            ))}

        </group>
    );
}

export default function KnowledgeGraph({
                                           reducedMotion = false,
                                       }) {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <Canvas
                camera={{
                    position: [0, 0, 8],
                    fov: 45,
                }}
                dpr={[1, 1.5]}
                frameloop={
                    reducedMotion ? 'demand' : 'always'
                }
                gl={{
                    alpha: true,
                    antialias: true,
                    powerPreference: 'low-power',
                }}
                style={{
                    background: 'transparent',
                }}
            >
                <NetworkScene reducedMotion={reducedMotion} />
            </Canvas>
        </div>
    );
}
