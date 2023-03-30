import {Nav, LinkIcon, IconSocialMedia} from "../header.styled"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faWhatsapp, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons"

export const NavSocialMedia = () => {
    return(
        <Nav>
				<LinkIcon href="https://mail.google.com/mail/" target="_blank" >
					<IconSocialMedia icon={faEnvelope}/>	
				</LinkIcon>
				<LinkIcon href="https://api.whatsapp.com/send?phone=5492612051915" target="_blank" >
					<IconSocialMedia icon={faWhatsapp}/>
				</LinkIcon>
				<LinkIcon href="https://instagram.com/casadelfuturo.godoycruz?utm_medium=copy_link" target="_blank">
					<IconSocialMedia icon={faInstagram}/>
				</LinkIcon>
				<LinkIcon href="https://www.youtube.com/@casadelfuturogc6632" target="_blank" >
					<IconSocialMedia icon={faYoutube}/>
				</LinkIcon>
		</Nav>
    )
}