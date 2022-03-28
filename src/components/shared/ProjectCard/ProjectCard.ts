import styled from "styled-components";
import { Box } from "../../../styles/layout/Box";
import { Flex } from "../../../styles/layout/Flex";
import { themes } from "../../../styles/themes";
import { Text } from "../../../styles/Typography/Text";
import Image from "../Image";
import MyLink from "../Link";


export const ProjectBox = styled(Box)`
    position: relative;
    display: flex;
    box-shadow: 0px 0px 11px 3px rgba(0,0,0,0.1);
    margin-bottom: 3rem;
    transition: 0.2s ease-in-out;
    border-radius: 5px;

    width: 620px;
    height: 250px;

    &:hover {
        box-shadow: 0px 9px 11px 3px rgba(0,0,0,0.1);
        transform: translateY(-10px);
    }

    @media screen and (max-width: 575px) {
        flex-direction: column;
        width: 100%;
        height: 450px;
    }
`

export const Banner = styled(Image)`
    width: 300px;
    height: 250px;

    @media screen and (max-width: 575px) {
        width: 100%;
        
    }
`

export const Body = styled(Flex)`
    flex-direction: column;
    padding: 1rem;
`

export const Title = styled(Text)`
    font-weight: bold;
    margin-bottom: 1rem;

`

export const Description = styled(Text)`
    font-size: 14px;
    line-height: 18px;

    @media screen and (max-width: 575px) {
        font-size: 12px;
    }
`

export const Links = styled(Flex)`
    margin-top: 1rem;
`

export const Link = styled(MyLink)`
    display: flex;
    align-items: center;
    margin-right: 1rem;

    color: ${themes.colors.blue.variant_3};
`

export const Icons = styled(Flex)`
    position: absolute;
    top: 90%;
    right: 1%;
    font-size: 1.2rem;
`