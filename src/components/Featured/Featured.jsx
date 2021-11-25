import React from 'react'
import FeaturedIMG_1 from '../../img/Акссесуар1.jpeg'
import FeaturedIMG_2 from '../../img/Акссесуар2.jpeg'
import FeaturedIMG_3 from '../../img/Акссесуар3.jpeg'
import FeaturedIMG_4 from '../../img/Акссесуар4.jpeg'
import { FeaturedSection, FeaturedTitle, FeaturedLink, FeaturedContainer, FeaturedProduct, FeaturedBox, FeaturedType, FeaturedLinkItem, FeaturedIMG, FeaturedData, FeaturedPrice, FeaturedName } from './FeaturedComponents'

export const Featured = () => {

    const featuredAcc = 'https://www2.hm.com/ru_ru/muzhchiny/vybrat-kategoriyu/aksessuary.html'

    const featuredItems = [
        { id: 1, type: 'Новое', title: 'Комплект, 3 предмета', price: '999 руб.', link: 'https://www2.hm.com/ru_ru/productpage.0557048001.html', img: FeaturedIMG_1},
        { id: 2, type: 'Новое', title: 'Кожаный ремень', price: '1 199 руб.', link: 'https://www2.hm.com/ru_ru/productpage.0337991001.html', img: FeaturedIMG_2},
        { id: 3, type: 'Новое', title: 'Кожаный несессер', price: '2 299 руб.', link: 'https://www2.hm.com/ru_ru/productpage.0721176006.html', img: FeaturedIMG_3},
        { id: 4, type: 'Новое', title: 'Дорожная сумка', price: '2 999 руб.', link: 'https://www2.hm.com/ru_ru/productpage.0650534002.html', img: FeaturedIMG_4},
    ]

    return (
        <FeaturedSection id="featured">
			<FeaturedTitle>РЕКОМЕНДУЕМ</FeaturedTitle>
			<FeaturedLink href={ featuredAcc }>Посмотреть все</FeaturedLink>

			<FeaturedContainer className="bd-grid">

            {featuredItems.map(item => 
                <FeaturedProduct key={item.id}>
					<FeaturedBox>
						<FeaturedType>{ item.type }</FeaturedType>
						<FeaturedLinkItem href={ item.link }>
                            <FeaturedIMG src={ item.img }/>
                        </FeaturedLinkItem>
					</FeaturedBox>

					<FeaturedData>
						<FeaturedName>{ item.title }</FeaturedName>
						<FeaturedPrice>{ item.price }</FeaturedPrice>
					</FeaturedData>
				</FeaturedProduct>
            )}

			</FeaturedContainer>	
		</FeaturedSection>
    )
}
