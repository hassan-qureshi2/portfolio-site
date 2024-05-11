import { DiJavascript1, DiMongodb, DiMysql, DiNodejs } from 'react-icons/di';
import { RiReactjsFill, RiReactjsLine } from 'react-icons/ri';
import {
    SiCypress,
    SiExpress,
    SiJavascript,
    SiJest,
    SiNestjs,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiVitest,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import zustandIcon from '../assets/zustand.png';
import swell from '../assets/swell.png';
import { FaDocker, FaNodeJs, FaShopify } from 'react-icons/fa';
export const frontendTech = [
    {
        icon: <RiReactjsFill className="text-7xl text-cyan-400 " />,
        delay: 2.5,
        text: 'React.js',
    },
    {
        icon: <TbBrandNextjs className="text-7xl text-white" />,
        delay: 3,
        text: 'Next.js',
    },
    {
        icon: <SiJavascript className="text-7xl text-yellow-400" />,
        delay: 5,
        text: 'Javascript',
    },
    {
        icon: <SiTypescript className="text-7xl text-blue-600" />,
        delay: 2,
        text: 'Typescript',
    },
    {
        icon: <SiRedux className="text-7xl text-pink-800" />,
        delay: 6,
        text: 'Redux',
    },
    {
        icon: <SiTailwindcss className="text-7xl text-blue-500" />,
        delay: 5.5,
        text: 'TailwindCSS',
    },
    {
        icon: (
            <img
                src={zustandIcon}
                width={100}
                height={100}
                className=" object-cover p-0 m-0"
            />
        ),
        text: 'Zustand',
        delay: 4,
    },
];

export const BackendTech = [
    { icon: <FaNodeJs className="text-7xl text-green-500" />, delay: 2.5 },
    { icon: <SiExpress className="text-7xl text-blue-500" />, delay: 3 },
    {
        icon: <SiTypescript className="text-7xl text-blue-500" />,
        delay: 5,
    },
    { icon: <FaDocker className="text-7xl text-blue-600" />, delay: 2 },
    { icon: <SiNestjs className="text-7xl text-pink-800" />, delay: 6 },
    { icon: <DiMongodb className="text-7xl text-green-800" />, delay: 4.5 },
    { icon: <DiMysql className="text-7xl text-blue-800" />, delay: 5.5 },
];
export const Testing = [
    { icon: <SiCypress className="text-7xl text-green-500" />, delay: 2.5 },
    { icon: <SiJest className="text-7xl text-red-800" />, delay: 3 },
    {
        icon: <SiVitest className="text-7xl text-green-500" />,
        delay: 5,
    },
];

export const Ecommerce = [
    { icon: <FaShopify className="text-7xl text-green-500" />, delay: 2.5 },
    {
        icon: (
            <img
                src={swell}
                width={75}
                height={75}
                className=" object-cover p-0 m-0"
            />
        ),
        delay: 3,
    },
];
