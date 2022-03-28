import styled from "styled-components";
import { themes } from "../../../styles/themes";

interface LinkProps {
    color?: string;
}

export const StyledLink = styled.a<LinkProps>`
    color: ${props => props.color || themes.colors.dark.variant_2};
`