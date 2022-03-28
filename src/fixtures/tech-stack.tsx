import { FaReact, FaLaravel, FaVuejs, FaSymfony, FaNodeJs, FaSass } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiJquery, SiTypescript } from 'react-icons/si';

export const techStack = [
    {
        name: 'Laravel',
        icon: <FaLaravel/>,
        active: false
    },
    {
        name: 'Vue',
        icon: <FaVuejs/>,
        active: true
    },
    {
        name: 'React',
        icon:  <FaReact/>,
        active: true
    },
    {
        name: 'MySQL',
        icon: <GrMysql/>,
        active: false
    },
    {
        name: 'Bootstrap',
        icon: <BsBootstrapFill/>,
        active: false
    },
    {
        name: 'Symfony',
        icon: <FaSymfony/>,
        active: false
    },
    {
        name: 'Sass',
        icon: <FaSass/>,
        active: false
    },
    {
        name: 'JQuery',
        icon: <SiJquery/>,
        active: false
    },
    {
        name: 'NodeJS',
        icon: <FaNodeJs/>,
        active: true
    },
    {
        name: 'Typescript',
        icon: <SiTypescript/>,
        active: true
    }
]