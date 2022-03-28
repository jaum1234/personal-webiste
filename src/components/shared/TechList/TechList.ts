import styled from "styled-components";
import { Flex } from "../../../styles/layout/Flex";
import { Text } from "../../../styles/Typography/Text";

export const List = styled(Flex)`
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
`

export const Item = styled(Flex)`
    align-items: center;
    flex-direction: column;
    width: 50px;
`

export const Icon = styled(Text)`
    font-size: 30px;

    @media screen and (max-width: 575px) {
        font-size: 25px;
    }
`

export const Label = styled(Text)`
    font-size: 20px;

    @media screen and (max-width: 575px) {
        font-size: 15px;
    }
`