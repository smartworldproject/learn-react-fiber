import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Canvas } from '@react-three/fiber';
import { MeshReflectorMaterial, Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import Frames from './Frames';
export default function Fiber({ width, height, elements, fallback, backgroundColor }) {
    const [enabled, setEnabled] = useState(false);
    const [rotate, setRotate] = useState(false);
    return (_jsx(Suspense, Object.assign({ fallback: fallback }, { children: _jsxs(Canvas, Object.assign({ style: { width, height }, gl: { alpha: true, antialias: true }, dpr: [1, 1.5], camera: { fov: 70, position: [0, 0, 10] } }, { children: [_jsx(OrbitControls, { onChange: (e) => (e.target.getDistance() < 5 ? setRotate(true) : setRotate(false)), enabled: enabled, autoRotate: true, enableDamping: true, enablePan: false, maxPolarAngle: Math.PI / 2, maxDistance: 10, minDistance: 1 }, void 0), _jsx("color", { attach: "background", args: [backgroundColor] }, void 0), _jsx("fog", { attach: "fog", args: [0x191920, 0, 25] }, void 0), _jsx(Environment, { preset: "city" }, void 0), _jsxs("group", Object.assign({ position: [0, -0.5, 0] }, { children: [_jsx(Frames, { elements: elements, rotate: rotate, enabled: enabled, setEnabled: setEnabled }, void 0), _jsxs("mesh", Object.assign({ rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0] }, { children: [_jsx("planeGeometry", { args: [50, 50] }, void 0), _jsx(MeshReflectorMaterial, { blur: [300, 100], resolution: 2048, mixBlur: 1, mixStrength: 60, roughness: 1, depthScale: 1.2, minDepthThreshold: 0.4, maxDepthThreshold: 1.4, color: 0x151515, metalness: 0.5, mirror: undefined }, void 0)] }), void 0)] }), void 0)] }), void 0) }), void 0));
}
Fiber.defaultProps = {
    backgroundColor: 0x000000,
    fallback: 'Loading...',
    element: []
};
//# sourceMappingURL=Fiber.js.map