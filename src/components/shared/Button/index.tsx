import React from "react";
import { StyledButton } from "./Button";

function Button({ children, onClick, ...restProps }: { children: React.ReactNode, [x: string]: any, onClick?: () => void }): JSX.Element {
    return(
        <StyledButton
            { ...restProps } 
            onClick={ onClick }
        >
            { children }
        </StyledButton>
    )
}

export default Button;