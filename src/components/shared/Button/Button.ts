import styled from "styled-components";
import { themes } from "../../../styles/themes";

interface ButtonProps {
    color?:string;
    bg?: string;
    border?: string;

    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    pt?: string;
    pb?: string;
    pr?: string;
    pl?: string;
}

export const StyledButton = styled.button<ButtonProps>`
    border: ${props => props.border || "none"};
    border-radius: 5px;
    background-color: ${props => props.bg || themes.colors.blue.variant_3};
    cursor: pointer;


    color: ${props => props.color || themes.colors.light};

    font-size: 1rem;
    font-weight: bold;

    padding: 0.8rem;

    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};

    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};

    text-transform: uppercase;
    transition: 0.2s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 3px 2px #A1FEFF;
    }
`