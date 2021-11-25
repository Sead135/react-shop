import styled from "styled-components";
import { mb2, smallFontSize, darkColorLight, grayColor, firstColorAlt, firstColor, whiteColor, fontSemi, h2FontSize } from './../GlobalPresets'

export const NewsletterSection = styled.section`
    text-align: center;
`

export const NewsletterContainer = styled.div`
    
`

export const NewsletterSubscribe = styled.div`

`

export const NewsletterTitle = styled.h2`
    font-size: ${ h2FontSize };
	letter-spacing: 0.2rem;
	text-transform: uppercase;
	font-weight: ${ fontSemi };
    text-align: center;
`

export const NewsletterDesc = styled.p`
    margin-bottom: ${ mb2 };
	font-size: ${ smallFontSize };
	color: ${ darkColorLight };
`

export const NewsletterForm = styled.form`
    display: grid;
	grid-template-columns: 1fr 0.5fr;
    width: 100%;
	@media screen and (min-width: 768px) {
		width: 400px;
		margin: 0 auto;
	}
`

export const NewsletterInput = styled.input`
    outline: none;
	border: none;
	background-color: ${ grayColor };
	padding: 0 0.5rem;
`

export const NewsletterLink = styled.a`
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