import React from 'react'
import { NewsletterSection, NewsletterContainer, NewsletterSubscribe, NewsletterTitle, NewsletterDesc, NewsletterForm, NewsletterInput, NewsletterLink } from './NewsletterComponents'

export const Newsletter = () => {
    return (
        <NewsletterSection id="subscribed">
			<NewsletterContainer className=" bd-grid">
				<NewsletterSubscribe>
					<NewsletterTitle>Рассылка</NewsletterTitle>
					<NewsletterDesc>Подпишитесь на нашу рассылку, чтобы быть в курсе о новых поступлениях и скидках.</NewsletterDesc>

					<NewsletterForm>
						<NewsletterInput type="email" name="email" placeholder="Введите свой email адрес"/>
						<NewsletterLink href="#">Подписаться</NewsletterLink>
					</NewsletterForm>
				</NewsletterSubscribe>
			</NewsletterContainer>
		</NewsletterSection>
    )
}
