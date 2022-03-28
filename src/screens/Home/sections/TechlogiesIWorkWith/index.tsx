import { TechStackContainer } from "../../../../containers/TechStack";
import { themes } from "../../../../styles/themes";
import { Container } from "../../../../styles/layout/Container";
import { Box } from "../../../../styles/layout/Box";
import { Text } from "../../../../styles/Typography/Text";
import Section from "..";


function TechnologiesIWorkWith() {
    return (
        <>
          <Section
              bg={ themes.colors.dark.variant_2 }
              color={ themes.colors.light }
              padding='10rem 0'
              boxShadow="0px 8px 4px -3px #838383"
          >
            <Section.Title 
              mb="3rem"
              as='h3'
            >
              Some technologies I work with:
            </Section.Title>
            <TechStackContainer/>
          </Section>
        </>
    )
}

export default TechnologiesIWorkWith;