import { headerHeight, mb1, mb4, grayColor, whiteColor, fontBold, darkColor, fontSemi, firstColor } from "../GlobalPresets";
import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	background-color: ${ grayColor };
`

export const Nav = styled.nav`
    height: ${ headerHeight };
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (min-width: 768px) {
		height: calc(${ headerHeight }+ 1rem);
		justify-content: initial;
	}
`

export const NavItem = styled.div`
    margin-bottom: ${ mb1 };
	@media screen and (min-width: 768px) {
		margin-left: ${ mb4 };
		margin-bottom: 0;
	}
`

export const NavMenu = styled.div`
    @media screen and (max-width: 768px) {
		position: fixed;
		top: ${ headerHeight };
		right: ${({ show }) => ( show ? '-100%' : '0' )};
		width: 80%;
		height: 100%;
		padding: 2rem;
		background-color: ${ whiteColor };
		transition: 0.5s;
    }
	@media screen and (min-width: 768px) {
		margin-left: auto;
	}
`

export const NavLogo = styled.a`
    font-weight: ${ fontBold };
`

export const NavList = styled.ul`
	@media screen and (min-width: 768px) {
		display: flex;
	}
`

export const NavLink = styled.a`
    color: ${({ active }) => ( active ? firstColor : darkColor )};
	font-weight: ${ fontSemi };
    :hover {
        color: ${ firstColor };
    }
`

export const NavToggle = styled.i`
    font-size: 1.5rem;
	cursor: pointer;
`