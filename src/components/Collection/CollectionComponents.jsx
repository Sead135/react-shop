import styled from "styled-components";
import { darkColorLight, firstColor, fontSemi, grayColor, h1FontSize, h2FontSize, mb2, smallFontSize, whiteColor } from '../GlobalPresets'

export const CollectionSection = styled.section`

`

export const CollectionContainer = styled.div`
    row-gap: 2rem;
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
    }
`

export const CollectionBox = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.5rem;
	background-color: ${ grayColor };
	transition: 0.3s;
    :hover {
        transform: translateY(-0.5rem);
    }
    @media screen and (min-width: 768px) {
        padding: 0.5rem 3rem 0;
    }
`

export const CollectionIMG = styled.img`
    width: 100px;
    @media screen and (min-width: 768px) {
        width: 130px;
    }
`

export const CollectionData = styled.div`

`

export const CollectionTitile = styled.h2`
    font-size: ${ h1FontSize };
	line-height: 1.2;
	margin-bottom: ${ mb2 };
	text-transform: uppercase;
	font-weight: ${ fontSemi };
    display: flex;
    flex-direction: column;
    span {
        font-size: ${ h2FontSize };
	    color: ${ darkColorLight };
    }
`

export const CollectionLink = styled.a`
    font-size: ${ smallFontSize };
	color: ${ darkColorLight };
    :hover {
        display: inline-block;
        background-color: ${ firstColor };
        color: ${ whiteColor };
        padding: 0.5rem;
        transition: 0.3s;
    }
`