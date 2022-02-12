import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from 'react';
import { useCursor, Text, Html } from '@react-three/drei';
import { Color } from 'three';
import { useThree } from '@react-three/fiber';
import { GOLDENRATIO } from './Constant';
export default function Frame(_a) {
    var { element, elementStyle, name, rotate, clicked, c = new Color() } = _a, props = __rest(_a, ["element", "elementStyle", "name", "rotate", "clicked", "c"]);
    const [hovered, hover] = useState(false);
    const [rnd] = useState(() => Math.random());
    const image = useRef();
    const frame = useRef();
    const group = useRef();
    const { width } = useThree((state) => state.viewport);
    const scaleWidth = useMemo(() => width / 50, [width]);
    useEffect(() => {
        group.current.rotateY(Math.PI);
    }, [rotate]);
    useCursor(hovered);
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
    return (_jsx("group", Object.assign({ ref: group }, props, { children: _jsxs("mesh", Object.assign({ name: name, onPointerOver: (e) => (e.stopPropagation(), hover(true)), onPointerOut: () => hover(false), scale: [1, GOLDENRATIO, 0.05], position: [0, GOLDENRATIO / 2, 0] }, { children: [_jsx("boxGeometry", { morphTargetsRelative: true }, void 0), _jsx(Html, Object.assign({ scale: [0.111, 0.16, 1], style: Object.assign({ overflow: clicked ? 'scroll' : 'hidden' }, elementStyle), transform: true, occlude: true }, { children: element }), void 0), _jsx("meshStandardMaterial", { color: 0x151515, metalness: 0.5, roughness: 0.5, envMapIntensity: 2 }, void 0), _jsx(Text, Object.assign({ name: name, maxWidth: 0.1, anchorX: "center", anchorY: "top", position: [0, 0.6, 0.3], fontSize: 0.1 }, { children: name }), void 0)] }), void 0) }), void 0));
}
//# sourceMappingURL=Frame.js.map