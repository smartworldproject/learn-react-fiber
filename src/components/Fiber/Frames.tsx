import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Event, MathUtils, Object3D, Quaternion, Vector3 } from 'three'
import { useLocation, useRoute } from 'wouter'
import { GOLDENRATIO } from './Constant'
import { FramesProps } from './types'
import Frame from './Frame'

export const Frames: React.FC<FramesProps> = ({ elements, rotate, enabled, setEnabled }) => {
  const timer = useRef<any>()
  const q = useRef(new Quaternion())
  const p = useRef(new Vector3())
  const ref = useRef<Object3D<Event>>()
  const clicked = useRef<Object3D<Event>>()
  const [, params] = useRoute<{ id?: string }>('/item/:id')
  const [, setLocation] = useLocation()

  useEffect(() => {
    clicked.current = undefined
    if (params?.id) clicked.current = ref.current?.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent?.updateWorldMatrix(true, true)
      clicked.current.parent?.localToWorld(p.current.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent?.getWorldQuaternion(q.current)
    } else {
      if (rotate) {
        p.current.set(0, 0, 0)
      } else {
        p.current.set(0, 0, 10)
        q.current.identity()
      }
    }
    setEnabled(false)
    timer.current = setTimeout(() => {
      if (!clicked.current) setEnabled(true)
    }, 2000)
    return () => {
      setEnabled(false)
      clearTimeout(timer.current)
    }
  }, [params])

  useFrame((state, dt) => {
    if (!enabled) {
      state.camera.position.lerp(p.current, MathUtils.damp(0, 1, 3, dt))
      state.camera.quaternion.slerp(q.current, MathUtils.damp(0, 1, 3, dt))
    }
  })

  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {elements?.map(({ name, element, ...rest }, i) => (
        <Frame element={element} key={i} rotate={rotate} clicked={params?.id === name} {...rest} />
      ))}
    </group>
  )
}

export default Frames
