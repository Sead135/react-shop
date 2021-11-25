import React from 'react'
import { HomeSection, HomeContainer, HomeData, HomeTitle, HomeBTN, HomeIMG } from './HomeComponents'
import HomePNG from '../../img/home.png'

export const Home = () => {
    return (
        <HomeSection id="home">
			<HomeContainer className="bd-grid">
				<HomeData>
					<HomeTitle>НОВОЕ<span>ПОСТУПЛЕНИЕ</span></HomeTitle>
					<HomeBTN href="#featured">ПОСМОТРЕТЬ</HomeBTN>
				</HomeData>

                <HomeIMG src={ HomePNG }/>
			</HomeContainer>
		</HomeSection>
    )
}
