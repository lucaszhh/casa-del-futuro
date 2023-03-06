import React from "react"
import Image from "next/image"
import Link from "next/link"
import logoCdf from "./coverNotion-cdf.png"

const Header = () => {
	return (
		<header className="header">
			<Link href="/">
				<Image src={logoCdf} width="250" height="100" alt="logo cdf"/>
			</Link>
			<nav className="social">
				<Link href="/" className="socialitem">
					<i className="fas fa-home"/>
					<p>Bienvenida</p>
				</Link>
				<Link href="/cursos" className="socialitem">
					<i className="fas fa-chalkboard-teacher"/>
					<p>Cursos</p>
				</Link>
				<Link href="/eventos" className="socialitem">
					<i className="fas fa-calendar-alt"/>
					<p>Eventos</p>
				</Link>
				<Link href="/contacto" className="socialitem">
					<i className="fas fa-comment-alt"/>
					<p>Contacto</p>
				</Link>
			</nav>
			<div className="social">
				<Link href="https://mail.google.com/mail/" target="_blank" className="socialitem">
					<i className="far fa-envelope"/>	
				</Link>
				<Link href="https://api.whatsapp.com/send?phone=5492612051915" target="_blank" className="socialitem">
					<i className="fab fa-whatsapp"/>
				</Link>
				<Link href="https://instagram.com/casadelfuturo.godoycruz?utm_medium=copy_link" target="_blank" className="socialitem">
					<i className="fab fa-instagram"/>
				</Link>
				<Link href="https://www.facebook.com/pages/Casa%20Del%20Futuro%20Godoy%20Cruz/2030594193923869/" target="_blank" className="socialitem">
					<i className="fab fa-youtube"></i>
				</Link>
			</div>
		</header>
	)
}

export default Header


