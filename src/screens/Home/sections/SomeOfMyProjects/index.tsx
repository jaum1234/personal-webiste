import { ProjectsContainer } from "../../../../containers/Projects";
import Section from "..";

function SomeOfMyProjects(): JSX.Element {
    return (
        <>
            <Section id='projects'>
                <Section.Title
                    mb="3rem"
                    as='h3'
                >
                    Some of my projects:
                </Section.Title>
                <ProjectsContainer/>
            </Section>
        </>
    )
}

export default SomeOfMyProjects;