import styled from "styled-components";
import { Box } from "../../../styles/layout/Box";
import { Text } from "../../../styles/Typography/Text";

export const SectionBox = styled(Box)`
`

export const Title = styled(Text)`
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;

    @media screen and (max-width: 575px) {
        font-size: 18px;
    }
`

export const Paragraphy = styled(Text)`
    text-align: center;
    font-size: 18px;
    line-height: 22px;

    @media screen and (max-width: 575px) {
        font-size: 14px;
    }
`