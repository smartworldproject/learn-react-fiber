/// <reference types="react" />
import { FiberProps } from './types';
declare function Fiber({ width, height, elements, fallback, backgroundColor }: FiberProps): JSX.Element;
declare namespace Fiber {
    var defaultProps: {
        backgroundColor: number;
        fallback: string;
        element: any[];
    };
}
export default Fiber;
