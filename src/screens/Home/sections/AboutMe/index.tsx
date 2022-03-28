import { BsFillSuitHeartFill } from "react-icons/bs";
import Button from "../../../../components/shared/Button";
import { themes } from "../../../../styles/themes";
import Section from "..";
import { Flex } from "../../../../styles/layout/Flex";
import { Highlighter } from "../../../../styles/Typography/Highlighter";

function AboutMe(): JSX.Element {
    return (
        <>
            <Section pt='8rem'>
                <Flex
                    flexDir="column"
                    alignItems="center"
                >
                    <Section.Title
                        as='h1'
                        fs='3rem !important'
                        mb='0.8rem'
                    >
                        Fullstack Web <br></br> <Highlighter color={ themes.colors.blue.variant_3 }>Developer</Highlighter>
                    </Section.Title>
                    <BsFillSuitHeartFill 
                        color="#B31509"
                        fontSize={25}
                    />
                    <Section.Paragraphy mt='0.8rem' w='80%'>
                        Hi, my name is João Vítor and I'm a fullstack devolper currently <br></br> more focused on frontend develpement with React and Vue.
                    </Section.Paragraphy>
                    <Button
                        mt="2rem"
                        as='a'
                        href='#projects'
                    >
                        Check some of my works
                    </Button>
                </Flex>
            </Section>
        </>
    )
}

export default AboutMe;