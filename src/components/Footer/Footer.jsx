import React from 'react'
import Store_1 from './../../img/footerstore1.png'
import Store_2 from './../../img/footerstore2.png'
import { FooterContainer, FooterBox, FooterTitle, FooterDeal, FooterLinkStore, FooterStoreImg, FooterItems, FooterItem, FooterLink, FooterFollow, FooterFollowItem, FooterFollowLink, FooterFollowIcon, FooterCopy } from './FooterComponents'

export const Footer = ( props ) => {

    const footerLinks = props.links

    const socialItems = [
        { id: 1, name: 'VK', link: '#', icon: 'bx bxl-vk' },
        { id: 2, name: 'Instagram', link: '#', icon: 'bx bxl-instagram-alt' },
        { id: 3, name: 'Facebook', link: '#', icon: 'bx bxl-facebook-square' }
    ]

    const storeItems = [
        { id: 1, name: 'Первый магазин', link: 'https://1001goroskop.ru/', img: Store_1 },
        { id: 2, name: 'Второй магазин', link: 'http://kakoysegodnyaprazdnik.ru/', img: Store_2 }
    ]

    return (
        <>
            <FooterContainer className="bd-grid">
                <FooterBox>
                    <FooterTitle>Shop</FooterTitle>
                    <FooterDeal>Приложение доступно</FooterDeal>

                    { storeItems.map( item => 
                        <FooterLinkStore key={ item.id } href={ item.link }>
                            <FooterStoreImg src={ item.img } alt={ item.name }/>
                        </FooterLinkStore>
                    ) }

                </FooterBox>

                <FooterBox>
                    <FooterTitle>Разделы</FooterTitle>
                    <FooterItems>

                        { footerLinks.map( link => 
                            <FooterItem key={ link.id }>
                                <FooterLink href={ link.link }>{ link.title }</FooterLink>
                            </FooterItem>
                        ) }

                    </FooterItems>
                </FooterBox>

                <FooterBox>
                    <FooterTitle>Подписывайтесь</FooterTitle>
                    <FooterFollow>
                        { socialItems.map( item => 
                            <FooterFollowItem key={ item.id }>
                                <FooterFollowLink href={ item.link }>
                                    <FooterFollowIcon className={ item.icon }></FooterFollowIcon>
                                </FooterFollowLink>
                            </FooterFollowItem>
                        ) }
                    </FooterFollow>
                </FooterBox>
            </FooterContainer>
		
		    <FooterCopy>&#169; 2021 Все права защищены.</FooterCopy>
        </>
    )
}
