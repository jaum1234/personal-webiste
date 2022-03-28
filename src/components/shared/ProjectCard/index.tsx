import React from "react";
import { 
    ProjectBox, 
    Body, 
    Title, 
    Description, 
    Links, 
    Link, 
    Banner,
    Icons 
} from './ProjectCard';

function ProjectCard({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }): JSX.Element {

    return (
        <ProjectBox
            { ...restProps }
        >
          
            { children }
        </ProjectBox>
    )
}

ProjectCard.Image = function({ src, alt, ...restProps }: { src: string, alt: string, [x: string]: any }) {
    return (
        <Banner 
            { ...restProps }
            src={ src }
            alt={ alt }
        />
    ) 
}

ProjectCard.Body = function ProjectCardBody({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return (
        <Body
            { ...restProps}
        >
            { children }
        </Body>
    )
}

ProjectCard.Title = function ProjectCardTitle({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return (
        <Title
            { ...restProps }
        >
            { children }
        </Title>
    )
}

ProjectCard.Description = function ProjectCardDescription({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return (
        <Description
            { ...restProps }
        >
            { children }
        </Description>
    )
}

ProjectCard.Links = function ProjectCardLinks({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return (
        <Links
            { ...restProps }
        >
            { children }
        </Links>
    )
}

ProjectCard.Link = function ProjectCardLink({ children, href, ...restProps }: { children: React.ReactNode, href: string, [x: string]: any }) {
    return (
        <Link
            { ...restProps }
            href={ href }
        >
            { children }
        </Link>
    )
}

ProjectCard.Icons = function ProjectCardIcons({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return (
        <Icons
            { ...restProps }
        >
            { children }
        </Icons>
    )
}




export default ProjectCard;