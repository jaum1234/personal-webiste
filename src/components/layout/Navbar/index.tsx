import React from "react";
import { Container } from "../../../styles/layout/Container";
import { Brand, Item, Nav, SocialMedias, Icon, NavbarBox, Body } from "./Navbar";

function Navbar({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }): JSX.Element {
    return(
        <NavbarBox 
            as='header'
            
            {...restProps}
        >
            <Container>
                <Body>
                    { children }
                </Body>
            </Container>
        </NavbarBox>
    )
}

Navbar.Brand = function NavbarBrand({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return(
        <Brand { ...restProps }>
            { children }
        </Brand>
    )
}

Navbar.Nav = function NavbarNav({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return(
        <Nav { ...restProps } as='nav'>
            { children }
        </Nav>
    )
}

Navbar.Item = function NavbarItem({ children, target, href, ...restProps }: { children: React.ReactNode, target: string, href: string, [x: string]: any }) {
    return(
        <Item
            href={ href } 
            target={ target }
            { ...restProps }
        >
            { children }
        </Item>
    )
}

Navbar.SocialMedias = function NavbarSocialMedias({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }) {
    return(
        <SocialMedias 
            { ...restProps }
        >
            { children }
        </SocialMedias>
    )
}

Navbar.Icon = function NavbarIcon({ children, href, ...restProps }: { children: React.ReactNode, href: string, [x: string]: any }) {
    return(
        <Icon
            href={ href }
            { ...restProps }
        >
            { children }
        </Icon>
    )
}

export default Navbar;