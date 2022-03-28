import styled from "styled-components";

interface BoxProps {
    bg?: string;
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    flexDir?: 'column' | 'row';
    flexWrap?: 'wrap' | 'nowrap';
    justifyContent?: 'center' | 'space-between' | 'space-evenly' | 'space-around' | 'flex-end' | 'flex-start';
    display?: 'flex' | 'block' | 'inline' | 'grid'
    color?: string;
    bgImg?: string;
    bgAttach?: string;
    borderRadius?: string;
    boxShadow?: string;
    padding?: string;
    margin?: string;
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    pt?: string;
    pb?: string;
    pr?: string;
    pl?: string;
    position?: 'absolute' | 'relative' | 'fixed' | 'static';
    transition?: string;
    transform?: string;
    w?: string | number;
    h?: string | number
}

export const Box = styled.div<BoxProps>`
    display: block;

    background: ${props => props.bg || "none"};
    background-image: ${props => `url(${props.bgImg})` || "none"};
    background-attachment: ${props => props.bgAttach || ""};

    display: ${props => props.display};

    align-items: ${props => props.alignItems || "flex-start"};
    flex-direction: ${props => props.flexDir || "row"};
    flex-wrap: ${props => props.flexWrap || "nowrap"};
    justify-content: ${props => props.justifyContent || "flex-start"};

    color: ${props => props.color || "none"};

    box-sizing: border-box;

    box-shadow: ${props => props.boxShadow || "none"};

    border-radius: ${props => props.borderRadius || "none"};

    margin: ${props => props.margin};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};

    padding: ${props => props.padding};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};

    position: ${props => props.position || "static"};

    transition: ${props => props.transition};

    transform: ${props => props.transform};

    width: ${props => props.w || "auto"};
    height: ${props => props.h || "auto"};
`