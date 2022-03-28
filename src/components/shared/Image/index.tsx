import { StyledImage } from "./Image";

function Image({ src, ...restProps }: { src: string, [x: string]: any}): JSX.Element {
    return (
        <StyledImage 
            src={ src }
            { ...restProps }
        />
    )
}

export default Image;