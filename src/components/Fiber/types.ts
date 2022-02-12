import { GroupProps } from '@react-three/fiber'
import { CSSProperties, ReactText } from 'react'
import { Color, ColorRepresentation } from 'three'

export interface FiberProps {
  width: ReactText
  height: ReactText
  elements: Elements[] | []
  fallback: JSX.Element
  backgroundColor: ColorRepresentation
}

export interface Elements extends GroupProps {
  element: JSX.Element
  elementStyle?: CSSProperties
}

export interface FramesProps {
  setEnabled: (arg: boolean) => void
  elements: Elements[]
  enabled: boolean
  rotate: boolean
}

export interface FrameProps extends Elements {
  clicked: boolean
  rotate: boolean
  name?: string
  c?: Color
}
