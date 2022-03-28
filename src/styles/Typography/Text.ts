import React from "react";
import styled from "styled-components";
import { themes } from '../themes';
 
export interface TextProps {
    children: React.ReactNode;
    ff?: string;
    fw?: string;
    fs?: string;
    lineHeight?: string;
    textAlign?: "center" | "start" | "end" | "justify" | "unset";
    textShadow?: string; 
    textTranform?: 'uppercase' | 'lowercase';
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    pt?: string;
    pb?: string;
    pr?: string;
    pl?: string;
    w?: string
    h?: string
}

export const Text = styled.p<TextProps>`
    color: ${props => props.color};

    font-family: ${props => props.ff || themes.fonts.inter};
    font-weight: ${props => props.fw || "500"};
    font-size: ${props => props.fs || "16px"};

    line-height: ${props => props.lineHeight};

    text-align: ${props => props.textAlign || "unset"};
    text-shadow: ${props => props.textShadow || "none"};
    text-transform: ${props => props.textTranform || "none"};

    margin-top: ${props => props.mt || "0"};
    margin-bottom: ${props => props.mb || "0"};
    margin-left: ${props => props.ml || "0"};
    margin-right: ${props => props.mr || "0"};

    padding-top: ${props => props.pt || "0"};
    padding-bottom: ${props => props.pb || "0"};
    padding-left: ${props => props.pl || "0"};
    padding-right: ${props => props.pr || "0"};

    width: ${props => props.w};
    height: ${props => props.h};
`