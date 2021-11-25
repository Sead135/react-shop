import React from 'react'
import Backpack from './../../img/рюкзак.jpg'
import Bag from './../../img/сумка.jpg'
import Scarf from './../../img/шарфик.jpg'
import Watch from './../../img/часы.jpg'
import Hat from './../../img/шапочка.jpg'
import Jumper from './../../img/джемпер.jpg'

import { NewArrivalSection, NewArrivalTitle, NewArrivalLink, NewArrivalContainer, NewArrivalBox, NewArrivalIMG, NewArrivalBTN, NewArrivalSubtitle } from './NewArrivalComponents'

export const NewArrival = () => {

    const newItems = [
        { id: 1, img: Backpack, desc: 'Рюкзак' },
        { id: 2, img: Bag, desc: 'Сумка' },
        { id: 3, img: Scarf, desc: 'Шарф' },
        { id: 4, img: Watch, desc: 'Часы' },
        { id: 5, img: Hat, desc: 'Шапка' },
        { id: 6, img: Jumper, desc: 'Джемпер' }
    ]

    return (
        <NewArrivalSection id="new">
			<NewArrivalTitle>НОВОЕ ПОСТУПЛЕНИЕ</NewArrivalTitle>
			<NewArrivalSubtitle href="#">Посмотреть все</NewArrivalSubtitle>

			<NewArrivalContainer className="bd-grid">

                { newItems.map(item => 
                    <NewArrivalBox key={item.id}>
                        <NewArrivalIMG src={item.img} alt={item.desc}/>

                        <NewArrivalLink>
                            <NewArrivalBTN href="#">ПОСМОТРЕТЬ ТОВАР</NewArrivalBTN>
                        </NewArrivalLink>
				    </NewArrivalBox>
                ) }

			</NewArrivalContainer>
		</NewArrivalSection>
    )
}
