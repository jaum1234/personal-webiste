import { StyledLink } from "./Link";

interface LinkProps {
    children: React.ReactNode;
    target?: '_blank' | '_self';
    href: 'string';
    [x: string]: any;
}

function Link({ children, target, href, ...restProps}: LinkProps) {
    return(
        <StyledLink
            href={ href }
            target={ target ? target : '_blank' }
            { ...restProps }
        >
            { children }
        </StyledLink>
    )
}

export default Link;