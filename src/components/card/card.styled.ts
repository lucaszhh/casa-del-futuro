import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const CardStyled = styled.div`
    display: flex;
    gap: 1rem;
    box-shadow: ${props=>props.theme.shadows.bgShadow};
    background-color: ${props=>props.theme.colors.whiteSecondary};
    border-radius: 1rem;
    max-width: 800px;
    height: auto 100%;
`

export const CardImage = styled(Image)`
    background: no-repeat inherit;
    background-position: center;
    background-size: cover;
    max-width: 21rem;
    min-height: 100%;
    border-radius: 1rem 0 0 1rem;
`

export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    height: auto;
    padding: 1rem;
    font-size: 1rem;
    gap: 0.5rem;
    width: 100%;
`

export const CardDescription = styled.p`

`

export const CardLayoutButton = styled(Link)`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    text-decoration: none;
`


