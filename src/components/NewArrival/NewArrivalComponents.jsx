import styled from "styled-components";
import { h1FontSize, fontSemi, smallFontSize, darkColorLight, mb2, grayColor, firstColor, whiteColor, firstColorAlt} from './../GlobalPresets'

export const NewArrivalSection = styled.section`

`

export const NewArrivalTitle = styled.h2`
    font-size: ${ h1FontSize };
	letter-spacing: 0.2rem;
	text-transform: uppercase;
	font-weight: ${ fontSemi };
    text-align: center;
`

export const NewArrivalSubtitle = styled.a`
    display: block;
	font-size: ${ smallFontSize };
	font-weight: ${ fontSemi };
	color: ${ darkColorLight };
	text-align: center;
	margin-bottom: ${ mb2 };
`

export const NewArrivalContainer = styled.div`
    row-gap: 2rem;
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const NewArrivalIMG = styled.img`

`

export const NewArrivalLink = styled.div`
    position: absolute;
	bottom: 100%;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(229, 89, 71, 0.2);
	transition: 0.3s ease-in-out;
    opacity: 0;
`

export const NewArrivalBox = styled.div`
    position: relative;
	display: flex;
	justify-content: center;
	background-color: ${ grayColor };
	overflow: hidden;
    :hover ${ NewArrivalLink } {
        bottom: 0;
        opacity: 1;
    }
`

export const NewArrivalBTN = styled.a`
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