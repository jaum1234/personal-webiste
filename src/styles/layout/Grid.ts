import styled from "styled-components";

interface GridProps {
    alignItems?: 'center' | 'start' | 'end' | 'normal';
    gap?: string; 
    rowGap?: string;
    templateColumns?: string
    autoRow?: string;
    autoColumn?: string;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    gap: ${props => props.gap};
    row-gap: ${props => props.rowGap};

    align-items: ${props => props.alignItems || "normal"};
    grid-template-columns: ${props => props.templateColumns};
    grid-auto-rows: ${props => props.autoRow};
    grid-auto-columns: ${props => props.autoColumn};

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`