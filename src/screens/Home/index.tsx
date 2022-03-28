import { Box } from "../../styles/layout/Box";
import { Grid } from "../../styles/layout/Grid";
import AboutMe from "./sections/AboutMe";
import SomeOfMyProjects from "./sections/SomeOfMyProjects";
import TechnologiesIWorkWith from "./sections/TechlogiesIWorkWith";

function Home(): JSX.Element {
    return (
        <>
            <Box
                as='main'
            >
                <Grid
                    rowGap='10rem'
                    templateColumns="1fr"
                >
                    <AboutMe/>
                    <TechnologiesIWorkWith/>
                    <SomeOfMyProjects/>
                </Grid>
            </Box>
        </>
    )
}

export default Home;