import styled from "styled-components";

export const SponsorsSection = styled.section`

`

export const SponsorsContainer = styled.div`
    grid-template-columns: repeat(2, 1fr);
	row-gap: 2rem;
	padding: 1.5rem 0;
    @media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

export const SponsorsLogo = styled.div`
    display: flex;
	justify-content: center;
`

export const SponsorsImg = styled.img`
    width: 80px;
	filter: opacity(70%);
    :hover {
        filter: none;
    }
`