import showMeTheWeather from '../static/show-me-the-weather.png';
import hulmersMusicApp from '../static/hulmers-music-app.png'
import tkProducoes from '../static/tk-producoes.png';
import shareYourCodes from '../static/share-your-codes.png';
import hulmersEcommerce from '../static/hulmers-ecommerce.jpg';
import agenciaDialogo from '../static/agencia-dialogo.jpg';
import { SiBootstrap, SiLaravel, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiSass, SiStyledcomponents, SiTypescript, SiVuedotjs } from 'react-icons/si';

export const projects = [
    {
        title: 'Show Me The Weather',
        description: 'Simple, but awesome, weather app that allows the users to get the current weather or the forecast for the weekend based on a City/Country search.',
        img: {
            src: showMeTheWeather,
            alt: 'Banner for Show Me The Weather project'
        },
        github_url: 'https://github.com/jaum1234/show-me-the-weather',
        live_site_url: 'https://show-me-the-weather.vercel.app/',
        techs: [
            {
                name: 'Typescript',
                icon: <SiTypescript/>,
                color: '#3178C6'
            },
            {
                name: 'React',
                icon: <SiReact/>,
                color: '#61DAFB'
            }   
        ]
    },
    {
        title: 'Hulmers Music App',
        description: 'Music app done with Spotify WEB API. It allows the user to listen to his favorite albums and playlists, search for specific tracks and create his own playlists.',
        img: {
            src: hulmersMusicApp,
            alt: 'Banner for Hulmers Music App project' 
        },
        github_url: 'https://github.com/jaum1234/hulmers-spotify-clone',
        live_site_url: 'https://hulmers-spotify-clone.vercel.app/login',
        techs: [
            {
                name: 'NextJS',
                icon: <SiNextdotjs/>,
                color: ''
            },
            {
                name: 'Typescript',
                icon: <SiTypescript/>,
                color: '#3178C6'
            },
            {
                name: 'NodeJS',
                icon: <SiNodedotjs/>,
                color: '#43853D'
            }   
        ]
    },
    {
        title: 'TK Produções',
        description: 'Personal webiste made for the video editor TK Produçoes',
        img: {
            src: tkProducoes,
            alt: 'Banner for TK Produções project'
        },
        github_url: 'https://github.com/jaum1234/tk-producoes',
        live_site_url: 'https://tk-producoes.vercel.app/',
        techs: [
            {
                name: 'React',
                icon: <SiReact/>,
                color: '#61DAFB'
            },
            {
                name: 'Styled Components',
                icon: <SiStyledcomponents/>,
                color: '#EFAFED'
            }   
        ]
    },
    {
        title: 'Share Your Codes',
        description: 'Web plataform that allows user to write and post their code strechs, besides sharing it with the comunity or in the social medias.',
        img: {
            src: shareYourCodes,
            alt: 'Banner for Share Your Codes project'
        },
        github_url: 'https://github.com/jaum1234/share-your-codes-vuejs',
        live_site_url: 'https://share-your-codes-vuejs.vercel.app/comunidade',
        techs: [
            {
                name: 'VueJS',
                icon: <SiVuedotjs/>,
                color: '#327859'
            },
            {
                name: 'MySQL',
                icon: <SiMysql/>,
                color: '#F29111'
            },
            {
                name: 'Laravel',
                icon: <SiLaravel/>,
                color: '#F9322C'
            },
        ]
    },
    {
        title: "Hulmer's e-commerce",
        description: 'Brewery e-commerce project with all the basic features an e-commerce should have, like payment system, cart, admin dashboard, products page and search and shipping calculation.',
        img: {
            src: hulmersEcommerce,
            alt: 'Banner for Hulmers ecommerce project'
        },
        github_url: 'https://github.com/Leopalds/E-commerce',
        live_site_url: '#',
        techs: [
            {
                name: 'Laravel',
                icon: <SiLaravel/>,
                color: '#F9322C'
            },
            {
                name: 'MySQL',
                icon: <SiMysql/>,
                color: '#F29111'
            }
        ]
    },
    {
        title: 'Agencia Dialogo Hotsite',
        description: 'Hotsite made for a academic marketing campaign.',
        img : {
            src: agenciaDialogo,
            alt: 'Banner for Agencia Diálogo project'
        },
        github_url: 'https://github.com/jaum1234/agencia-dialogo-hotsite',
        live_site_url: 'https://agencia-dialogo.herokuapp.com/',
        techs: [
            {
                name: 'Bootstrap',
                icon: <SiBootstrap/>,
                color: '#7952B3'
            },
            {
                name: 'Sass',
                icon: <SiSass/>,
                color: '#CF649A'
            }
        ]
    },
    

]