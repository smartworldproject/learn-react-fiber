import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial, Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { FiberProps } from './types'
import Frames from './Frames'

const Fiber: React.FC<FiberProps> = ({ fallback, width, height, elements, backgroundColor }) => {
  const [enabled, setEnabled] = useState(false)
  const [rotate, setRotate] = useState(false)

  return (
    <Suspense fallback={fallback}>
      <Canvas style={{ width, height }} gl={{ alpha: true, antialias: true }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 0, 10] }}>
        <OrbitControls
          onChange={(e) => (e?.target.getDistance() < 5 ? setRotate(true) : setRotate(false))}
          enabled={enabled}
          autoRotate
          enableDamping
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          maxDistance={10}
          minDistance={1}
        />
        <color attach="background" args={[backgroundColor]} />
        <fog attach="fog" args={[0x191920, 0, 25]} />
        <Environment preset="city" />
        <group position={[0, -0.5, 0]}>
          <Frames elements={elements} rotate={rotate} enabled={enabled} setEnabled={setEnabled} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={60}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color={0x151515}
              metalness={0.5}
              mirror={0}
            />
          </mesh>
        </group>
      </Canvas>
    </Suspense>
  )
}
Fiber.defaultProps = {
  backgroundColor: 0x000000,
  fallback: <>'Loading...'</>,
  elements: []
}

export default Fiber
