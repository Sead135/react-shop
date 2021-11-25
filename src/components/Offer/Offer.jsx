import React from 'react'
import { OfferBG, OfferData, OfferDescription, OfferLink, OfferSection, OfferTitle } from './OfferComponents'

export const Offer = () => {
    return (
        <OfferSection>
			<OfferBG>
				<OfferData>
					<OfferTitle>Специальное предложение</OfferTitle>
					<OfferDescription>Специальное дисконтное предложение на все покупки в этой недели.</OfferDescription>
					<OfferLink href='#'>ПОЛУЧИТЬ</OfferLink>
				</OfferData>
			</OfferBG>
		</OfferSection>
    )
}
