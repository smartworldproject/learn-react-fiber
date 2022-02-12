import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils, Quaternion, Vector3 } from 'three';
import { useLocation, useRoute } from 'wouter';
import { GOLDENRATIO } from './Constant';
import Frame from './Frame';
export default function Frames({ elements, rotate, enabled, setEnabled }) {
    const timer = useRef(null);
    const q = useRef(new Quaternion());
    const p = useRef(new Vector3());
    const ref = useRef();
    const clicked = useRef();
    const [, params] = useRoute('/item/:id');
    const [, setLocation] = useLocation();
    useEffect(() => {
        clicked.current = ref.current.getObjectByName(params === null || params === void 0 ? void 0 : params.id);
        if (clicked.current) {
            clicked.current.parent.updateWorldMatrix(true, true);
            clicked.current.parent.localToWorld(p.current.set(0, GOLDENRATIO / 2, 1.25));
            clicked.current.parent.getWorldQuaternion(q.current);
        }
        else {
            if (rotate) {
                p.current.set(0, 0, 0);
            }
            else {
                p.current.set(0, 0, 10);
                q.current.identity();
            }
        }
        setEnabled(false);
        timer.current = setTimeout(() => {
            if (!clicked.current)
                setEnabled(true);
        }, 2000);
        return () => {
            setEnabled(false);
            clearTimeout(timer.current);
        };
    }, [params]);
    useFrame((state, dt) => {
        if (!enabled) {
            state.camera.position.lerp(p.current, MathUtils.damp(0, 1, 3, dt));
            state.camera.quaternion.slerp(q.current, MathUtils.damp(0, 1, 3, dt));
        }
    });
    return (_jsx("group", Object.assign({ ref: ref, onClick: (e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name)), onPointerMissed: () => setLocation('/') }, { children: elements === null || elements === void 0 ? void 0 : elements.map((_a, i) => {
            var { name, element } = _a, rest = __rest(_a, ["name", "element"]);
            return (_jsx(Frame, Object.assign({ element: element, rotate: rotate, clicked: (params === null || params === void 0 ? void 0 : params.id) === name }, rest), i));
        }) }), void 0));
}
//# sourceMappingURL=Frames.js.map