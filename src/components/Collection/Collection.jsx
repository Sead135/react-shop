import React from 'react'
import { CollectionBox, CollectionContainer, CollectionData, CollectionIMG, CollectionSection, CollectionTitile, CollectionLink } from './CollectionComponents'
import MenIMG from '../../img/ПальтоМ.png'
import WomenIMG from '../../img/ПальтоЖ.png'

export const Collection = () => {
    const linkMen = 'https://www2.hm.com/ru_ru/muzhchiny.html'
    const linkWomen = 'https://www2.hm.com/ru_ru/zhenshchiny.html'


    return (
        <CollectionSection>
			<CollectionContainer className="bd-grid">

				<CollectionBox>
					<CollectionIMG src={ MenIMG }/>

					<CollectionData>
					    <CollectionTitile><span>МУЖСКАЯ</span>КОЛЛЕКЦИЯ</CollectionTitile>
					    <CollectionLink href={ linkMen } >ПОСМОТРЕТЬ</CollectionLink>
					</CollectionData>
				</CollectionBox>

                <CollectionBox>
					<CollectionData>
					    <CollectionTitile><span>ЖЕНСКАЯ</span>КОЛЛЕКЦИЯ</CollectionTitile>
					    <CollectionLink href={ linkWomen } >ПОСМОТРЕТЬ</CollectionLink>
					</CollectionData>

                    <CollectionIMG src={ WomenIMG }/>
				</CollectionBox>

			</CollectionContainer>
		</CollectionSection>
    )
}
