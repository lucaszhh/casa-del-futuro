import { Nav, LinkIcon, IconSocialMedia } from "../header.styled"
import { faHome, faChalkboardUser, faCalendarAlt, faCommentAlt} from "@fortawesome/free-solid-svg-icons"

export const NavBar = () => {
    return(
        <Nav>
            <LinkIcon href="/" >
                <IconSocialMedia icon={faHome}/>
                <p>Bienvenida</p>
            </LinkIcon>
            <LinkIcon href="/cursos" >
                <IconSocialMedia icon={faChalkboardUser}/>
                <p>Cursos</p>
            </LinkIcon>
            <LinkIcon href="/eventos" >
                <IconSocialMedia icon={faCalendarAlt}/>
                <p>Eventos</p>
            </LinkIcon>
            <LinkIcon href="/contacto" >
                <IconSocialMedia icon={faCommentAlt}/>
                <p>Contacto</p>
            </LinkIcon>
        </Nav>
    )
}