import styled from "styled-components";
import { whiteColor, h1FontSize, fontSemi, mb2, firstColor, smallFontSize, firstColorAlt} from './../GlobalPresets'
import Background from './../../img/Offer.jpg'

export const OfferSection = styled.section`

`

export const OfferBG = styled.div`
    background: url(${ Background }) no-repeat center/cover;
	text-align: center;
`

export const OfferData = styled.div`
    padding: 3.5rem 0.25rem;
	background: rgba(0, 0, 0, 0.5);
	color: ${ whiteColor };
	@media screen and (min-width: 768px) {
		padding: 5rem 0;
	}
`

export const OfferTitle = styled.h2`
    font-size: ${ h1FontSize };
	letter-spacing: 0.2rem;
	text-transform: uppercase;
	font-weight: ${ fontSemi };
`

export const OfferDescription = styled.p`
    margin-bottom: ${ mb2 };
	letter-spacing: 0.2rem;
`

export const OfferLink = styled.a`
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