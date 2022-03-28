import styled from "styled-components";
import { Box } from "../../../styles/layout/Box";
import { Flex } from "../../../styles/layout/Flex";
import { themes } from "../../../styles/themes";
import Link from "../../shared/Link";

export const NavbarBox = styled(Box)`
    padding: 15px 0;
    background-color: ${themes.colors.dark.variant_2};
    box-shadow: 0px 8px 4px -3px #838383;
    width: 100%;
    color: ${themes.colors.light};
`

export const Body = styled(Flex)`
    align-items: center;
    justify-content: space-between;
`

export const Brand = styled.h2`
    font-size: 26px;
    margin-right: 1.5rem;
`
export const Nav = styled(Flex)``

export const Item = styled(Link)`
    color: ${themes.colors.light};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    transition: 0.5s ease-in-out;

    &:hover {
        color: ${themes.colors.blue.variant_3};
    }
`

export const SocialMedias = styled(Flex)`
    align-items: center;
`

export const Icon = styled(Link)`
    color: ${themes.colors.light};
    font-size: 20px;
    margin-left: 1rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
        color: ${themes.colors.blue.variant_3};
    }
`