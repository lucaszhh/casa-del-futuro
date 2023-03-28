import styled from "styled-components"

export const PrimaryButton = styled.button`
  font-size: 1.1rem;
  padding: 0.3rem 1.2rem;
  color: ${props => props.theme.colors.whiteSecondary};
  background-color: ${props => props.theme.colors.violetPrimary};
  border: 2px solid ${props => props.theme.colors.violetPrimary};
  border-radius: 3px;
  display: block;
  transition-duration: 0.5s;
  text-decoration: none;

  &:hover{
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${props => props.theme.colors.violetPrimary} inset, 0 0 10px 1px ${props => props.theme.colors.violetPrimary};
    color: ${props => props.theme.colors.violetPrimary};
    background-color: ${props => props.theme.colors.whiteSecondary};
  }

`

export const SecondaryButton = styled(PrimaryButton)`
  color: ${props => props.theme.colors.violetPrimary};
  background-color: ${props => props.theme.colors.whiteSecondary};
`