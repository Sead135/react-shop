import styled from "styled-components";
import { darkColor, darkColorLight, firstColor, fontSemi, h2FontSize, mb1, mb2, mb4, normalFontSize, smallFontSize, whiteColor } from './../GlobalPresets'

export const FeaturedSection = styled.section`

`

export const FeaturedTitle = styled.h2`
    font-size: ${ h2FontSize };
	color: ${ darkColor };
	margin: ${ mb4 } 0 ${ mb1 };
	text-align: center;
`

export const FeaturedLink = styled.a`
    display: block;
	font-size: ${ smallFontSize };
	font-weight: ${ fontSemi };
	color: ${ darkColorLight };
	text-align: center;
	margin-bottom: ${ mb2 };
	@media screen and (min-width: 768px) {
		margin-bottom: ${ mb4 };
	}
`

export const FeaturedContainer = styled.div`
    row-gap: 2rem;
	grid-template-columns: repeat(2, 1fr);
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

export const FeaturedProduct = styled.div`
    transition: 0.3s;
    :hover {
        transform: translateY(-0.5rem);
    }
`

export const FeaturedBox = styled.div`
    position: relative;
	display: flex;
	justify-content: center;
`

export const FeaturedType = styled.h6`
    position: absolute;
	top: 0;
	left: 0;
	background-color: ${ firstColor };
	color: ${ whiteColor };
	padding: 0.3rem 0.75rem;
	font-size: ${ smallFontSize };
`

export const FeaturedLinkItem = styled.a`

`

export const FeaturedData = styled.div`
    text-align: center;
`

export const FeaturedName = styled.h3`
    margin-bottom: ${ mb1 };
	text-transform: uppercase;
	font-size: ${ normalFontSize };
`

export const FeaturedPrice = styled.span`
    color: ${ darkColorLight };
	font-weight: ${ fontSemi };
`

export const FeaturedIMG = styled.img`

`

