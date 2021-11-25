import React, { useState } from 'react'
import { Nav, Header, NavLogo, NavMenu, NavItem, NavLink, NavList, NavToggle } from './NavBarComponents'

export const NavBar = ( props ) => {

    const [ active, setActive ] = useState(1)
    const [ show, setShow ] = useState(true)

    const Links = props.links

    return (
        <Header>
            <Nav className="bd-grid">
                <div>
                    <NavLogo href='#'>Shop</NavLogo>
                </div>

                <NavMenu show={show}>
                    <NavList>
                        {Links.map(link =>
                            <NavItem key={ link.id } onClick={ () => setActive(link.id) }>
                                <NavLink href={ link.link } active={ active === link.id ? active : '' } onClick={() => setShow(!show)}>{ link.title }</NavLink>
                            </NavItem>
                        )}
                    </NavList>
                </NavMenu>

                <div className="nav-toggle">
                    <NavToggle className="bx bx-cart-alt"></NavToggle>
                    <NavToggle className="bx bx-menu" onClick={ () => setShow(!show) }></NavToggle>
                </div>
            </Nav>
        </Header>
    )
}
