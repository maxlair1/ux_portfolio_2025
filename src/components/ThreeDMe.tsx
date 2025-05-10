import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

type ModelProps = {
    url: string;
};

function SpinningModel({ url }: ModelProps) {
    const group = useRef<THREE.Group>(null);
    const { scene } = useGLTF(url);

    useFrame((_, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.3; // Slow spin
        }
    });

    return (
        <Center>
            <primitive ref={group} object={scene} position={[0, 0, 0]}/>
        </Center>
    );
}

type ThreeDMeProps = {
    gltfUrl: string;
    style?: React.CSSProperties;
};

const ThreeDMe: React.FC<ThreeDMeProps> = ({ gltfUrl, style }) => (
    <div style={{ width: "100%", height: "400px", ...style }}>
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 2, 2]} intensity={2} blur={3} />
            <Suspense fallback={null}>
                <SpinningModel url={gltfUrl} />
            </Suspense>
        </Canvas>
    </div>
);

export default ThreeDMe;