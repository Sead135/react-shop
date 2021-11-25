import styled from "styled-components";
import { mb1, mb2, mb4, darkColorLight, smallFontSize } from './../GlobalPresets'

export const FooterContainer = styled.div`
    row-gap: 1.5rem;
	margin-bottom: ${ mb4 };
    @media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
        padding: 2rem 0;
	}
`

export const FooterBox = styled.div`

`

export const FooterTitle = styled.h3`
    margin-bottom: ${ mb1 };
`

export const FooterDeal = styled.p`
    margin-bottom: ${ mb2 };
`

export const FooterLinkStore = styled.a`
    color: ${ darkColorLight };
    margin-right: ${ mb1 };
`

export const FooterStoreImg = styled.img`
    width: 100px;
`

export const FooterItems = styled.ul`
`

export const FooterItem = styled.li`
`

export const FooterLink = styled.a`
    color: ${ darkColorLight };
    :hover {
        text-decoration: underline;
    }
`

export const FooterFollow = styled.ul`
    color: ${ darkColorLight };
`

export const FooterFollowItem = styled.li`
    color: ${ darkColorLight };
    display: inline;
`

export const FooterFollowLink = styled.a`
    :hover {
        text-decoration: underline;
    }
`

export const FooterFollowIcon = styled.i`
    color: ${ darkColorLight };
    font-size: 20px;
	margin-right: 10px;
`

export const FooterCopy = styled.p`
    border-top: 1px solid ${ darkColorLight };
	padding-top: 3rem;
	text-align: center;
	color: ${ darkColorLight };
	font-size: ${ smallFontSize };
`