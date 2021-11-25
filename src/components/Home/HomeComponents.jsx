import styled from "styled-components";
import { bigFontSize, firstColor, firstColorAlt, fontSemi, grayColor, h1FontSize, headerHeight, smallFontSize, whiteColor } from '../GlobalPresets'

export const HomeSection = styled.section`
    background-color: ${ grayColor };
`

export const HomeContainer = styled.div`
    height: calc(100vh - ${ headerHeight });
    @media screen and (min-width: 768px) {
        height: 100vh;
    }
`

export const HomeData = styled.div`
    padding-top: 6rem;
    @media screen and (min-width: 768px) {
        padding: 0;
		height: max-content;
		align-self: center;
    }
    @media screen and (min-width: 1024px) {
        padding-left: 7rem;
    }
`

export const HomeTitle = styled.h1`
    align-self: center;
	font-size: ${ bigFontSize };
	line-height: 1;
	letter-spacing: 0.5rem;
	margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    span {
        font-size: ${ h1FontSize };
    }
    @media screen and (min-width: 768px) {
		letter-spacing: 1rem;
        line-height: 1.5;
    }
`

export const HomeBTN = styled.a`
    display: inline-block;
	background-color: ${ firstColor };
	color: ${ whiteColor };
	padding: 1rem;
	font-size: ${ smallFontSize };
	font-weight: ${ fontSemi };
	transition: 0.3s;
    :hover {
        background-color: ${ firstColorAlt };
    }
`

export const HomeIMG = styled.img`
    position: absolute;
	right: 0;
	bottom: 0;
	width: 200px;
    @media screen and (min-width: 768px) {
        width: 370px;
        bottom: -48px;
    }
    @media screen and (min-width: 1024px) {
        right: 15%;
        bottom: -48px;
    }
`