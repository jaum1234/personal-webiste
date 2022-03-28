import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoIosPaper } from 'react-icons/io';
import Navbar from "../components/layout/Navbar";
import { Flex } from "../styles/layout/Flex";

const navIcons = [
    { icon: <BsGithub/>, href: 'https://github.com/jaum1234' },
    { icon: <BsLinkedin/>, href: 'https://www.linkedin.com/in/joao-v%C3%ADtor-de-souza-coura-b435381a9/' },
    { icon: <IoIosPaper/>, href: 'https://drive.google.com/file/d/1Jdoi-YaiofzobAsWLhSbK3orz0f-3BuD/view?usp=sharing' }
]

export function NavbarContainer(): JSX.Element {
    return(
        <Navbar>
            <Flex
                alignItems="center"
            >
                <Navbar.Brand>JVSC</Navbar.Brand>
                <Navbar.Nav>
                    <Navbar.Item target='_self' href='#projects'>My projects</Navbar.Item>
                </Navbar.Nav>
            </Flex>

            <Navbar.SocialMedias>
            {
                navIcons.map(({ icon, href }) => (
                    <Navbar.Icon
                        href={ href }
                    >
                        { icon }
                    </Navbar.Icon>
                ))
            }
            </Navbar.SocialMedias>
        </Navbar>
    )
} 
