import styled from "styled-components";

interface ImageProps {
    objectFit?: 'cover' | 'fill' | 'none';
    h?: string;
    w?: string;
    maxW?: string;
    maxH?: string
}

export const StyledImage = styled.img<ImageProps>`
    object-fit: ${props => props.objectFit || "cover"};
    height: ${props => props.h};
    width: ${props => props.w};

    max-width: ${props => props.maxW};
    max-height: ${props => props.maxH};

`