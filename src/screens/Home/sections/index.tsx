import React from "react";
import { Container } from "../../../styles/layout/Container";
import { Paragraphy, SectionBox, Title } from "./Section";

function Section({ children, id, ...restProps }: { children: React.ReactNode, id?: string, [x: string]: any }): JSX.Element {
    return (
        <SectionBox 
            id={ id }
            { ...restProps } 
            as='section'
        >
            <Container>
                { children }
            </Container>
        </SectionBox>
    )
}

Section.Title = function SectionTitle({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return (
        <Title { ...restProps }>
            { children }
        </Title>
    )
}

Section.Paragraphy = function SectionParagraphy({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return (
        <Paragraphy { ...restProps }>
            { children }
        </Paragraphy>
    )
}

export default Section;