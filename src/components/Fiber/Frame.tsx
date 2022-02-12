import { useEffect, useMemo, useRef, useState } from 'react'
import { useCursor, Text, Html } from '@react-three/drei'
import { Color, Mesh } from 'three'
import { useThree } from '@react-three/fiber'
import { GOLDENRATIO } from './Constant'
import { FrameProps } from './types'

export const Frame: React.FC<FrameProps> = ({ element, elementStyle, name, rotate, clicked, c = new Color(), ...props }) => {
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const image = useRef<Mesh>()
  const frame = useRef<Mesh>()
  const group = useRef<Mesh>()
  const { width } = useThree((state) => state.viewport)
  const scaleWidth = useMemo(() => width / 50, [width])

  useEffect(() => {
    group.current?.rotateY(Math.PI)
  }, [rotate])

  useCursor(hovered)
  // useFrame((state) => {
  //   if (image.current) {
  //     ;(image.current.material as any).zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
  //     image.current.scale.x = MathUtils.lerp(image.current.scale.x, 0.85 * (hovered ? 0.85 : 1), 0.1)
  //     image.current.scale.y = MathUtils.lerp(image.current.scale.y, 0.9 * (hovered ? 0.905 : 1), 0.1)
  //   }
  //   if (frame.current) {
  //     ;(frame.current.material as any).color.lerp(c.set(hovered ? 0xffa500 : 0xffffff), 0.1)
  //   }
  // })

  return (
    <group ref={group} {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry morphTargetsRelative />
        <Html scale={[0.111, 0.16, 1]} style={{ overflow: clicked ? 'scroll' : 'hidden', ...elementStyle }} transform occlude>
          {element}
        </Html>
        <meshStandardMaterial color={0x151515} metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <Text name={name} maxWidth={0.1} anchorX="center" anchorY="top" position={[0, 0.6, 0.3]} fontSize={0.1}>
          {name}
        </Text>
      </mesh>
    </group>
  )
}

export default Frame
