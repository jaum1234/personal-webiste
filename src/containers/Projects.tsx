import { BsGithub } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";
import ProjectCard from "../components/shared/ProjectCard";
import { projects } from "../fixtures/projects";
import { Box } from "../styles/layout/Box";
import { Flex } from "../styles/layout/Flex";
import { Text } from "../styles/Typography/Text";


export function ProjectsContainer(): JSX.Element {

    return(
        <Flex
            flexWrap="wrap"
            justifyContent="space-between"
        >
        {
        projects.map(project => (
            <ProjectCard>
                <ProjectCard.Image
                    src={ project.img.src }
                    alt={ project.img.alt }
                />
                <ProjectCard.Body>
                    <ProjectCard.Title>{ project.title }</ProjectCard.Title>
                    <ProjectCard.Description>{ project.description }</ProjectCard.Description>
                    <ProjectCard.Links>
                        <ProjectCard.Link
                            href={ project.github_url }
                        >
                            <BsGithub fontSize={14}/>
                            <Text ml="0.2rem" fs="14px">Repository</Text>
                        </ProjectCard.Link>
                        <ProjectCard.Link
                            href={ project.live_site_url }
                        >
                            <GoBrowser fontSize={14}/>
                            <Text ml="0.2rem" fs="14px">Live site</Text>
                        </ProjectCard.Link>
                    </ProjectCard.Links>
                    <ProjectCard.Icons>
                        {
                            project.techs.map(tech => (
                                <Box 
                                    mr="0.5rem"
                                    onMouseOver={ (event) => event.currentTarget.style.color = tech.color }
                                    onMouseOut={ (event) => event.currentTarget.style.color = ''}
                                >
                                    { tech.icon }
                                </Box>
                            ))
                        }
                    </ProjectCard.Icons>
                </ProjectCard.Body>
            </ProjectCard>
        ))
        }
        </Flex>
    )
}