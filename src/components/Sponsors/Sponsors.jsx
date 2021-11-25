import React from 'react'
import Logo_1 from './../../img/logo1.png'
import Logo_2 from './../../img/logo2.png'
import Logo_3 from './../../img/logo3.png'
import Logo_4 from './../../img/logo4.png'
import { SponsorsSection, SponsorsContainer, SponsorsLogo, SponsorsImg } from './SponsorsComponents'

export const Sponsors = () => {

    const sponsorsItems = [
        { id: 1, img: Logo_1, alt: 'Adidas' },
        { id: 2, img: Logo_2, alt: 'Chanel' },
        { id: 3, img: Logo_3, alt: 'Beats' },
        { id: 4, img: Logo_4, alt: 'LV' }
    ]

    return (
        <SponsorsSection>
			<SponsorsContainer className="bd-grid">

                { sponsorsItems.map( item => 
                        <SponsorsLogo key={ item.id }>
                            <SponsorsImg src={ item.img } alt={ item.alt }/>
                        </SponsorsLogo>
                    ) }

			</SponsorsContainer>
		</SponsorsSection>
    )
}
