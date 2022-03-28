import styled from "styled-components";

export const Container = styled.div`
    width: 1320px;
    margin: 0 auto;

    @media screen and (min-width: 1200px) and (max-width: 1399px) {
        width: 1140px;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        width: 960px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        width: 720px;
    }

    @media screen and (min-width: 576px) and (max-width: 767px) {
        width: 540px;
    }

    @media screen and (max-width: 575px) {
        width: 95%;
    }
`