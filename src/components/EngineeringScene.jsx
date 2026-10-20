
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

// ============================================
// ENGINEERING DATA
// Keep this export for EngineeringExplorer.jsx
// ============================================

export const engineeringAreas = [
    {
        id: 'web',
        title: 'Software Engineering',
        subtitle: 'Building reliable digital platforms',
        color: '#2dd4bf',
        position: [-2.1, 1.15, 0],
        description:
            'Production web applications, frontend & backend systems, CMS development and API integrations.',
        technologies: [
            'Python',
            'Django',
            'PostgreSQL',
            'Wagtail',
            'WordPress',
        ],
        projects: [
            {
                name: 'AGRINFO',
                url: 'https://agrinfo.eu/',
            },
            {
                name: 'Agrinnovators',
                url: 'https://agrinnovators.org/',
            },
        ],
    },
    {
        id: 'ai',
        title: 'AI Engineering',
        subtitle: 'Developing intelligent applications',
        color: '#a78bfa',
        position: [2.1, 1.15, 0],
        description:
            'Exploring LLM integration, agent workflows and intelligent automation through hands-on Django projects.',
        technologies: [
            'Python',
            'Django',
            'LLM APIs',
            'AI Agents',
            'RAG — Exploring',
        ],
        projects: [
            {
                name: 'Django AI Employees — In Progress',
                url: 'https://github.com/Atinos31/django-ai-employees',
            },
        ],
    },
    {
        id: 'data',
        title: 'Data Engineering',
        subtitle: 'Turning data into useful systems',
        color: '#38bdf8',
        position: [-2.1, -1.2, 0],
        description:
            'Expanding my Python, PostgreSQL and SQL experience into data processing, pipelines and analytics.',
        technologies: [
            'Python',
            'SQL',
            'PostgreSQL',
            'Pandas — Learning',
            'ETL — Learning',
        ],
        projects: [],
    },
    {
        id: 'creative',
        title: 'Creative Engineering',
        subtitle: 'Building interactive web experiences',
        color: '#f59e0b',
        position: [2.1, -1.2, 0],
        description:
            'Combining frontend engineering, React and Three.js to create engaging interactive experiences.',
        technologies: [
            'React',
            'JavaScript',
            'Three.js',
            'React Three Fiber',
            'Tailwind CSS',
        ],
        projects: [
            {
                name: 'Interactive Developer Portfolio',
                url: 'https://github.com/Atinos31/atinosdev-portfolio',
            },
        ],
    },
];

// ============================================
// 1. WEB ENGINEERING: 3D LAPTOP
// ============================================

function Laptop({ selected, reducedMotion }) {
    const laptopRef = useRef(null);
    const cursorRef = useRef(null);

    useFrame((state, delta) => {
        if (reducedMotion) return;

        const time = state.clock.elapsedTime;

        if (laptopRef.current) {
            laptopRef.current.rotation.y =
                -0.18 + Math.sin(time * 0.45) * 0.13;
        }

        if (cursorRef.current) {
            cursorRef.current.visible =
                Math.sin(time * 5) > 0;
        }
    });

    return (
        <group ref={laptopRef} scale={0.95}>
            {/* Laptop base */}
            <mesh position={[0, -0.43, 0.15]}>
                <boxGeometry args={[1.55, 0.10, 1.05]} />
                <meshStandardMaterial
                    color="#34465d"
                    metalness={0.65}
                    roughness={0.3}
                />
            </mesh>

            {/* Keyboard surface */}
            <mesh
                position={[0, -0.372, 0.12]}
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <planeGeometry args={[1.35, 0.78]} />
                <meshStandardMaterial color="#101d2d" />
            </mesh>

            {/* Keyboard keys */}
            {Array.from({ length: 4 }, (_, row) =>
                Array.from({ length: 9 }, (_, col) => (
                    <mesh
                        key={`${row}-${col}`}
                        position={[
                            -0.56 + col * 0.14,
                            -0.362,
                            -0.12 + row * 0.15,
                        ]}
                    >
                        <boxGeometry args={[0.10, 0.008, 0.09]} />
                        <meshStandardMaterial color="#52657a" />
                    </mesh>
                ))
            )}

            {/* Display */}
            <group position={[0, 0.03, -0.39]}>
                <mesh>
                    <boxGeometry args={[1.52, 0.93, 0.085]} />
                    <meshStandardMaterial
                        color="#34465d"
                        metalness={0.5}
                        roughness={0.32}
                    />
                </mesh>

                <mesh position={[0, 0, 0.046]}>
                    <planeGeometry args={[1.40, 0.81]} />
                    <meshBasicMaterial color="#071322" />
                </mesh>

                {/* Code editor top bar */}
                <mesh position={[0, 0.335, 0.051]}>
                    <planeGeometry args={[1.38, 0.12]} />
                    <meshBasicMaterial color="#16283a" />
                </mesh>

                {/* Coloured lines of code */}
                {Array.from({ length: 7 }, (_, index) => (
                    <mesh
                        key={index}
                        position={[
                            -0.20 + (index % 3) * 0.08,
                            0.22 - index * 0.085,
                            0.054,
                        ]}
                    >
                        <planeGeometry
                            args={[
                                index % 2 === 0 ? 0.67 : 0.44,
                                0.027,
                            ]}
                        />
                        <meshBasicMaterial
                            color={
                                ['#5eead4', '#a78bfa', '#facc15'][
                                index % 3
                                    ]
                            }
                        />
                    </mesh>
                ))}

                {/* Animated typing cursor */}
                <mesh
                    ref={cursorRef}
                    position={[-0.30, -0.33, 0.055]}
                >
                    <planeGeometry args={[0.025, 0.06]} />
                    <meshBasicMaterial color="#5eead4" />
                </mesh>
            </group>

            {/* Screen glow */}
            <pointLight
                position={[0, 0.2, 0.4]}
                intensity={selected ? 3 : 1.2}
                distance={3}
                color="#2dd4bf"
            />
        </group>
    );
}

// ============================================
// 2. AI ENGINEERING: NEURAL BRAIN
// ============================================

const neuralPoints = [
    [-0.55, 0.35, 0.1],
    [-0.30, 0.70, 0],
    [0.05, 0.58, 0.22],
    [0.45, 0.50, 0.05],
    [0.65, 0.15, 0.1],
    [0.42, -0.30, 0.2],
    [0.10, -0.55, 0.05],
    [-0.32, -0.45, 0.15],
    [-0.67, -0.10, 0.05],
    [-0.18, 0.10, 0.55],
    [0.25, 0.12, 0.5],
    [0.00, -0.10, -0.35],
];

const neuralConnections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [4, 5], [5, 6], [6, 7], [7, 8],
    [8, 0], [0, 9], [9, 10], [10, 4],
    [9, 7], [10, 6], [2, 10], [1, 11],
    [11, 5], [11, 8], [3, 11],
];

function NeuralBrain({ selected, reducedMotion }) {
    const brainRef = useRef(null);
    const coreRef = useRef(null);

    useFrame((state, delta) => {
        if (reducedMotion) return;

        const time = state.clock.elapsedTime;

        if (brainRef.current) {
            brainRef.current.rotation.y += delta * 0.18;
            brainRef.current.rotation.z =
                Math.sin(time * 0.35) * 0.08;
        }

        if (coreRef.current) {
            const pulse = 1 + Math.sin(time * 2.8) * 0.14;
            coreRef.current.scale.setScalar(pulse);
        }
    });

    return (
        <group ref={brainRef}>
            {/* Two subtle neural lobes */}
            {[-0.27, 0.27].map((x) => (
                <mesh key={x} position={[x, 0.02, -0.18]}>
                    <sphereGeometry args={[0.56, 20, 16]} />
                    <meshStandardMaterial
                        color="#7c3aed"
                        transparent
                        opacity={0.09}
                        depthWrite={false}
                        roughness={0.3}
                    />
                </mesh>
            ))}

            {/* Neural connections */}
            {neuralConnections.map(([start, end], index) => (
                <Line
                    key={index}
                    points={[
                        neuralPoints[start],
                        neuralPoints[end],
                    ]}
                    color="#a78bfa"
                    transparent
                    opacity={selected ? 0.9 : 0.48}
                    lineWidth={1.5}
                />
            ))}

            {/* Glowing brain nodes */}
            {neuralPoints.map((point, index) => (
                <mesh key={index} position={point}>
                    <sphereGeometry args={[0.075, 12, 12]} />
                    <meshBasicMaterial
                        color={
                            index % 3 === 0 ? '#2dd4bf' : '#c4b5fd'
                        }
                    />
                </mesh>
            ))}

            {/* Central processing core */}
            <mesh ref={coreRef}>
                <icosahedronGeometry args={[0.20, 1]} />
                <meshStandardMaterial
                    color="#ddd6fe"
                    emissive="#a78bfa"
                    emissiveIntensity={selected ? 1.5 : 0.7}
                    metalness={0.25}
                    roughness={0.25}
                />
            </mesh>

            <pointLight
                position={[0, 0, 0.2]}
                color="#a78bfa"
                intensity={selected ? 5 : 2}
                distance={3}
            />
        </group>
    );
}

// ============================================
// 3. DATA ENGINEERING: DATABASE TOWER
// ============================================

function DatabaseTower({ selected, reducedMotion }) {
    const towerRef = useRef(null);
    const ringRef = useRef(null);

    useFrame((state, delta) => {
        if (reducedMotion) return;

        const time = state.clock.elapsedTime;

        if (towerRef.current) {
            towerRef.current.rotation.y += delta * 0.12;
        }

        if (ringRef.current) {
            ringRef.current.position.y =
                -0.56 + ((time * 0.35) % 1.15);
            ringRef.current.rotation.z += delta * 0.3;
        }
    });

    return (
        <group ref={towerRef}>
            {/* Three stacked database cylinders */}
            {[-0.42, 0, 0.42].map((y, index) => (
                <group key={index} position={[0, y, 0]}>
                    <mesh>
                        <cylinderGeometry
                            args={[0.62, 0.62, 0.35, 40]}
                        />
                        <meshStandardMaterial
                            color="#153958"
                            metalness={0.55}
                            roughness={0.25}
                        />
                    </mesh>

                    {/* Upper glowing rim */}
                    <mesh
                        position={[0, 0.18, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <torusGeometry args={[0.62, 0.025, 8, 48]} />
                        <meshBasicMaterial color="#38bdf8" />
                    </mesh>

                    {/* Front indicator */}
                    <mesh position={[0, -0.05, 0.625]}>
                        <sphereGeometry args={[0.04, 12, 12]} />
                        <meshBasicMaterial
                            color={index === 1 ? '#2dd4bf' : '#7dd3fc'}
                        />
                    </mesh>
                </group>
            ))}

            {/* Scanning data ring */}
            <group ref={ringRef}>
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.78, 0.023, 8, 48]} />
                    <meshBasicMaterial
                        color="#7dd3fc"
                        transparent
                        opacity={selected ? 0.95 : 0.65}
                    />
                </mesh>
            </group>

            {/* Base */}
            <mesh position={[0, -0.70, 0]}>
                <cylinderGeometry args={[0.75, 0.80, 0.10, 40]} />
                <meshStandardMaterial
                    color="#223f5a"
                    metalness={0.5}
                    roughness={0.3}
                />
            </mesh>

            <pointLight
                position={[0, 0.2, 1]}
                intensity={selected ? 4 : 1.5}
                color="#38bdf8"
                distance={3}
            />
        </group>
    );
}

// ============================================
// 4. CREATIVE ENGINEERING: 3D SCULPTURE
// ============================================

function CreativeSculpture({
                               selected,
                               reducedMotion,
                           }) {
    const sculptureRef = useRef(null);
    const innerRef = useRef(null);
    const particlesRef = useRef(null);

    useFrame((state, delta) => {
        if (reducedMotion) return;

        const time = state.clock.elapsedTime;

        if (sculptureRef.current) {
            sculptureRef.current.rotation.x += delta * 0.12;
            sculptureRef.current.rotation.y += delta * 0.22;
        }

        if (innerRef.current) {
            innerRef.current.rotation.z -= delta * 0.18;
        }

        if (particlesRef.current) {
            particlesRef.current.rotation.y =
                time * 0.25;
        }
    });

    return (
        <group>
            <group ref={sculptureRef}>
                {/* Colourful sculptural knot */}
                <mesh>
                    <torusKnotGeometry
                        args={[0.43, 0.14, 120, 14, 2, 3]}
                    />
                    <meshStandardMaterial
                        color="#f59e0b"
                        metalness={0.6}
                        roughness={0.16}
                        emissive="#c2410c"
                        emissiveIntensity={selected ? 0.48 : 0.2}
                    />
                </mesh>

                {/* Secondary twisting shape */}
                <mesh
                    ref={innerRef}
                    rotation={[Math.PI / 3, 0, 0]}
                >
                    <torusGeometry
                        args={[0.65, 0.035, 10, 64]}
                    />
                    <meshStandardMaterial
                        color="#c084fc"
                        emissive="#a855f7"
                        emissiveIntensity={0.5}
                        metalness={0.45}
                        roughness={0.25}
                    />
                </mesh>
            </group>

            {/* Orbiting coloured particles */}
            <group ref={particlesRef}>
                {Array.from({ length: 8 }, (_, index) => {
                    const angle = (index / 8) * Math.PI * 2;

                    return (
                        <mesh
                            key={index}
                            position={[
                                Math.cos(angle) * 0.95,
                                Math.sin(angle * 2) * 0.2,
                                Math.sin(angle) * 0.95,
                            ]}
                        >
                            <sphereGeometry args={[0.045, 10, 10]} />
                            <meshBasicMaterial
                                color={
                                    ['#f59e0b', '#c084fc', '#38bdf8'][
                                    index % 3
                                        ]
                                }
                            />
                        </mesh>
                    );
                })}
            </group>

            <pointLight
                position={[0, 0, 1]}
                intensity={selected ? 4 : 1.5}
                color="#f59e0b"
                distance={3}
            />
        </group>
    );
}

// ============================================
// INTERACTIVE WRAPPER
// ============================================

function EngineeringObject({
                               area,
                               selected,
                               onSelect,
                               reducedMotion,
                           }) {
    const groupRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const targetScale =
            selected ? 1.14 : hovered ? 1.10 : 1;

        const targetZ =
            selected ? 0.32 : hovered ? 0.16 : 0;

        if (reducedMotion) {
            groupRef.current.scale.setScalar(targetScale);
            groupRef.current.position.z = targetZ;
            return;
        }

        const alpha = 1 - Math.exp(-delta * 7);

        groupRef.current.scale.lerp(
            new THREE.Vector3(
                targetScale,
                targetScale,
                targetScale
            ),
            alpha
        );

        groupRef.current.position.z = THREE.MathUtils.lerp(
            groupRef.current.position.z,
            targetZ,
            alpha
        );
    });

    const model = (
        <group ref={groupRef}>
            {area.id === 'web' && (
                <Laptop
                    selected={selected}
                    reducedMotion={reducedMotion}
                />
            )}

            {area.id === 'ai' && (
                <NeuralBrain
                    selected={selected}
                    reducedMotion={reducedMotion}
                />
            )}

            {area.id === 'data' && (
                <DatabaseTower
                    selected={selected}
                    reducedMotion={reducedMotion}
                />
            )}

            {area.id === 'creative' && (
                <CreativeSculpture
                    selected={selected}
                    reducedMotion={reducedMotion}
                />
            )}

            {/* Invisible selection area */}
            <mesh
                onClick={(event) => {
                    event.stopPropagation();
                    onSelect(area.id);
                }}
                onPointerOver={(event) => {
                    event.stopPropagation();
                    setHovered(true);
                }}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[1.05, 20, 20]} />
                <meshBasicMaterial
                    transparent
                    opacity={0}
                    depthWrite={false}
                    colorWrite={false}
                />
            </mesh>
        </group>
    );

    return (
        <group position={area.position}>
            {reducedMotion ? (
                model
            ) : (
                <Float
                    speed={selected ? 1.5 : 0.9}
                    floatIntensity={selected ? 0.18 : 0.10}
                    rotationIntensity={0}
                >
                    {model}
                </Float>
            )}
        </group>
    );
}

// ============================================
// 3D SCENE
// ============================================

function EngineeringWorld({
                              selectedId,
                              onSelect,
                              reducedMotion,
                          }) {
    return (
        <>
            <ambientLight intensity={1.3} />

            <hemisphereLight
                skyColor="#94a3b8"
                groundColor="#0a1628"
                intensity={1}
            />

            <directionalLight
                position={[3, 5, 6]}
                intensity={2.2}
            />

            <directionalLight
                position={[-4, -2, 3]}
                intensity={0.8}
                color="#38bdf8"
            />

            {engineeringAreas.map((area) => (
                <EngineeringObject
                    key={area.id}
                    area={area}
                    selected={selectedId === area.id}
                    onSelect={onSelect}
                    reducedMotion={reducedMotion}
                />
            ))}

            <OrbitControls
                enabled={!reducedMotion}
                enablePan={false}
                enableZoom={false}
                enableRotate
                minAzimuthAngle={-Math.PI / 8}
                maxAzimuthAngle={Math.PI / 8}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 1.65}
                dampingFactor={0.08}
                enableDamping
            />
        </>
    );
}

// ============================================
// EXPORTED COMPONENT
// ============================================

export default function EngineeringScene({
                                             selectedId,
                                             onSelect,
                                             reducedMotion = false,
                                         }) {
    return (
        <div
            className="h-[330px] w-full
                 overflow-hidden sm:h-[400px]"
            aria-label="Interactive 3D engineering explorer"
        >
            <Canvas
                camera={{
                    position: [0, 0, 9.5],
                    fov: 45,
                }}
                dpr={[1, 1.5]}
                frameloop={
                    reducedMotion ? 'demand' : 'always'
                }
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'low-power',
                }}
                style={{
                    background: 'transparent',
                    touchAction: 'pan-y',
                }}
            >
                <EngineeringWorld
                    selectedId={selectedId}
                    onSelect={onSelect}
                    reducedMotion={reducedMotion}
                />
            </Canvas>
        </div>
    );
}

