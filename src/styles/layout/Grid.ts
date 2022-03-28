import styled from "styled-components";

interface GridProps {
    alignItems?: 'center' | 'start' | 'end' | 'normal';
    gap?: string; 
    rowGap?: string;
    templateColumns?: string
}

export const Grid = styled.div<GridProps>`
    display: grid;
    gap: ${props => props.gap};
    row-gap: ${props => props.rowGap};

    align-items: ${props => props.alignItems || "normal"};
    grid-template-columns: ${props => props.templateColumns};
`