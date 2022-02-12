import { jsx as _jsx } from "react/jsx-runtime";
import Fiber from './Fiber';
const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const elements = [
    {
        name: 'item1',
        scale: [1, 1, 1],
        position: [0, 0, 4],
        rotation: [0, Math.PI, 0],
        element: _jsx("img", { src: pexel(1103970) }, void 0)
    },
    {
        name: 'item2',
        scale: [1, 1, 1],
        position: [-3.46410179138183, 0, 2],
        rotation: [0, Math.PI / 1.5, 0],
        element: _jsx("img", { src: pexel(325185) }, void 0)
    },
    {
        name: 'item3',
        scale: [1, 1, 1],
        position: [-3.46410179138183, 0, -2],
        rotation: [0, Math.PI / 3, 0],
        element: _jsx("img", { src: pexel(358574) }, void 0)
    },
    {
        name: 'item4',
        scale: [1, 1, 1],
        position: [0, 0, -4],
        rotation: [0, 0, 0],
        element: _jsx("img", { src: pexel(327482) }, void 0)
    },
    {
        name: 'item5',
        scale: [1, 1, 1],
        position: [3.46410179138183, 0, 2],
        rotation: [0, -Math.PI / 1.5, 0],
        element: _jsx("img", { src: pexel(416430) }, void 0)
    },
    {
        name: 'item6',
        scale: [1, 1, 1],
        position: [3.46410179138183, 0, -2],
        rotation: [0, -Math.PI / 3, 0],
        element: _jsx("img", { src: pexel(310452) }, void 0)
    }
];
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Fiber',
    component: Fiber,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => _jsx(Fiber, Object.assign({ height: 600 }, args), void 0);
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Fiber',
    elements
};
//# sourceMappingURL=Fiber.stories.js.map