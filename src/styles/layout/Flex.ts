import styled from "styled-components";

interface FlexProps {
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    flexDir?: 'column' | 'row';
    flexWrap?: 'wrap' | 'nowrap';
    justifyContent?: 'center' | 'space-between' | 'space-evenly' | 'space-around' | 'flex-end' | 'flex-start';
    w?: string | number;
    h?: string | number
    margin?: string;
    maxW?: string;
    maxH?: string
}

export const Flex = styled.div<FlexProps>`
    display: flex;

    align-items: ${props => props.alignItems || "flex-start"};
    flex-direction: ${props => props.flexDir || "row"};
    flex-wrap: ${props => props.flexWrap || "nowrap"};
    justify-content: ${props => props.justifyContent || "flex-start"};

    margin: ${props => props.margin};

    width: ${props => props.w || "auto"};
    max-width: ${props => props.maxW};
    height: ${props => props.h || "auto"};
    max-height: ${props => props.maxH};
`