import React from "react";
import { Icon, Item, Label, List } from './TechList';


function TechList({ children, ...restProps }: { children: React.ReactNode, [x: string]: any }): JSX.Element {

    return(
        <List { ...restProps }>
            { children }
        </List>
    )
}

TechList.Item = function TechListItem({ children, ...restProps }: { children: React.ReactNode, [x: string]: any}) {
    return (
        <Item { ...restProps }>
            { children }
        </Item>
    )
}

TechList.Icon = function TechListIcon({ children, ...restProps } : { children: React.ReactNode, [x: string]: any }): JSX.Element {
    return <Icon {...restProps} >{ children }</Icon>
}

TechList.Label = function TechListText({ children, ...restProps } : { children: React.ReactNode, [x: string]: any }): JSX.Element {
    return <Label {...restProps} >{ children }</Label>
}

export default TechList;