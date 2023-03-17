import styled from 'styled-components';
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--var-violet-primary);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
 
export const LinkIcon = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    &:hover {
        position: relative;
    bottom: 3px;
    color: #e0e0e0;
    }
`
export const IconSocialMedia = styled(FontAwesomeIcon)`
    font-size: 25px;
` 