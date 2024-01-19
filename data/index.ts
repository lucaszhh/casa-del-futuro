import { DESCRIPTION_CDF, DESCRIPTION_FABLAB } from "../constants"
import { IAbotUs, ICourse, IEvent, IQuote } from "../types"
import  fablabImage  from "/public/imgs/fablab.png"
import cdfImage from "/public/imgs/cartelCasaDelFuturo.png"
import escuelaProgramacionImg from "/public/imgs/logoEscuelaProgramacion.png"

export const courses : ICourse[] = [
	{
		id: "1",
		title: " Fotografía",
		description: "Aprenderás a tomar fotografías artísticas con las herramientas que nos brindan los teléfonos celulares. Conocerá conceptos básicos de composición e iluminación, además se aprenderá a utilizar aplicaciones de edición fotográfica para celulares.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "2",
		title: " Introducción al diseño vectorial",
		description: "Destinados a los que estén interesados en conocer una herramienta de dibujo vectorial de fácil utilización, gratuita, que permite crear diseños gráficos de alta calidad para materializarlos por medio de sublimación, plotter de corte, corte láser o router cnc.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "3",
		title: "Producción audiovisual",
		description: "El taller esta destinado al desarrollo de todo el proceso de producción audiovisual: manejo de cámara (calibración de color, iris, iso), investigación, pre producción, producción (documental, reportaje, formatos para web, revista televisiva), post-producción. Capacitar a los participantes en el entendimiento del sonido como alma, ritmo y tempo de una pieza audiovisual.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "4",
		title: "Ilustración Meta",
		description: "En el taller Ilustración Meta crearemos ilustraciones para el Metaverso. Aprenderemos e investigaremos acerca de este nuevo universo, además, profundizaremos en técnicas y estilos de ilustración. A lo largo del taller lograremos sumergirnos en el desarrollo y programación de una de las ramas que habita en el metaverso para poder vivenciar nuestras obras ilustradas desde otra realidad, vivenciando entre otras, ilustraciones animadas y de realidad aumentada. Se deberá tener conocimientos previos sobre ilustración.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "5",
		title: "Reparación, armado y mantenimiento de PC/Notebook",
		description: "En este taller aprenderás sobre todo lo relacionado con hardware y software para armar o reparar equipos portátiles y de escritorio. Como así también sobre conceptos básicos de electricidad, mediciones y componentes electrónicos.",
		duration: "2 meses",
		category: {
			category:"Electronica",
			icon:"/icons/electronica-marco.png"
		}
	},
	{
		id: "6",
		title: " Introducción al desarrollo web",
		description: "El curso está dirigido a personas interesadas en la creación web o blog y autogestionarse, es de fácil manejo y actualización, utilizando WordPress como herramienta principal para el desarrollo, ya que permite la gestión de contenidos dentro de tu página web además es open source y completamente gratuito.",
		duration: "2 meses",
		category: {
			category:"Programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "7",
		title: " Producción Musical",
		description: "Este curso es para personas que tengan el interés de aprender sobre el proceso de composición, arreglos y grabación de música, tanto para quien quiera iniciarse como para quienes tengan la intención de profundizar sobre conocimientos previos. Se trabajará el concepto de Home Studio utilizando diversos programas profesionales incorporando plugins, e incluso explorando desde los instrumentos distintas opciones.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "8",
		title: "Diseño 2D-CAD",
		description: "Introducción al uso de programas de diseño CAD profesional en 2D  orientada a la producción de objetos en  máquinas de corte y router CNC.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "9",
		title: " Post-Producción",
		description: "Durante el taller se aprenderá a tratar videos de forma creativa a través de postproducción animando tipografías y gráficos para incluir en cualquier proyecto audiovisual. ",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "10",
		title: "Creación de videojuegos en Unity",
		description: "Mediante el diseño y la creación de un videojuego de plataformas 2D, se irán explicando las herramientas y los conceptos básicos relacionados a la plataforma de Unity.  No es necesario tener conocimientos previos de programación.",
		duration: "2 meses",
		category: {
			category:"Programacion",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "11",
		title: " Formación musical",
		description: "Un taller destinado a personas sin conocimientos previos con curiosidad por aprender sobre teoría musical, tocar instrumentos y aprender a usar programas de registro de audio. ",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "12",
		title: " Dibujo Digital",
		description: "En el taller de Dibujo Digital podrás experimentar y formar técnicas de dibujo para explotar al máximo tus ideas, además se pondrán en escena maneras y estilos de dibujo. No se requiere conocimientos previos en dibujo.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "13",
		title: "Diseño creativo",
		description: "Destinados a los que estén interesados en conocer una herramienta de dibujo vectorial de fácil utilización, gratuita, que permite crear diseños gráficos de alta calidad para materializarlos por medio de sublimación y plotter de corte.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "14",
		title: "Reparación, armado y mantenimiento de PC/Notebook",
		description: "En este taller aprenderás sobre todo lo relacionado con hardware y software para armar o reparar equipos portátiles y de escritorio. Como así también sobre conceptos básicos de electricidad, mediciones y componentes electrónicos.",
		duration: "2 meses",
		category: {
			category:"Electronica",
			icon:"/icons/electronica-marco.png"
		}
	},
	{
		id: "15",
		title: "Diseño 2D con software profesional",
		description: "Durante el curso, los estudiantes aprenderán a utilizar las herramientas y comandos de software necesarios para dibujar líneas, círculos, arcos, polilíneas y otros objetos geométricos. También aprenderán a utilizar las herramientas de edición para modificar y ajustar los dibujos orientada a la producción de objetos en  máquinas de corte y router CNC.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "16",
		title: "Postproducción y efectos especiales",
		description: "Utilizando software profesional de postproducción de video y animación digital ampliamente utilizado en la industria del cine, la televisión y la producción de video aprenderás a crear efectos especiales, animaciones, composiciones y gráficos en movimiento. Además produciras composiciones de video y animación mediante la combinación de capas de video y efectos visuales, animación de texto, gráficos en movimiento y efectos visuales, lo que permite a los usuarios crear títulos de crédito, efectos de transición, animaciones de personajes, entre otros.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "17",
		title: "Desarrollo de Videojuegos 2D con Unity:",
		description: "Durante el curso, los estudiantes aprenderán a trabajar con los elementos clave del desarrollo de videojuegos 2D, como el diseño de niveles, el movimiento de personajes, la creación de obstáculos, la implementación de la física del juego y la lógica de programación. También aprenderán a trabajar con herramientas gráficas para crear los elementos visuales del juego, como los personajes, los fondos y los objetos. No es necesario tener conocimientos previos de programación.",
		duration: "2 meses",
		category: {
			category:"Programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "18",
		title: "Beat Lab : Formación y Producción Musical",
		description: " ¿Te gusta la música? ¿Querés aprender a producir tus propias canciones o aprender a hacerlas? ¡Entonces este taller es para vos! Destinado a personas con o sin experiencia previa en una etapa formativa con intenciones de aprender aspectos básicos sobre Audio, Sonido y Música y técnicas para trabajar con ellos. Además, te brindaremos la oportunidad de conocer y colaborar con otras personas como vos y de esa forma hacer nuevas conexiones.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "19",
		title: "Dibujo Digital",
		description: "Los asistentes aprenderán a utilizar software de dibujo digital profesional para crear obras de arte digitales. Se les enseñará cómo utilizar herramientas de dibujo, como lápices, pinceles y plumas, para crear líneas y formas, así como técnicas de sombreado y coloración para dar vida a sus dibujos utilizando tabletas gráficas.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "20",
		title: "Diseño 3D con Blender",
		description: "¿Te interesa el diseño 3D? Siendo parte de este curso, podrás adquirir los conocimientos adecuados para manejar herramientas de diseño y modelado 3D, también aprenderás sobre las impresoras 3D y su funcionamiento. A lo largo de este taller conocerás todo lo necesario para incorporarte al mundo del 3D.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "21",
		title: "Realidad Aumentada",
		description: "Los asistentes aprenderán a utilizar herramientas de software especializadas, para crear objetos y elementos virtuales que se integran en el mundo real. También se les enseñará cómo utilizar dispositivos de realidad aumentada, como smartphones, tablets o smartglasses, para experimentar y probar sus creaciones.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "22",
		title: "Escenografía Digital",
		description: "Este taller está pensado para aprender a manejar el espacio escénico, crear y generar el mismo a partir de la imaginación teniendo en cuenta la utilización de distintos materiales, colores, formas y texturas. Combinaremos prácticas manuales y digitales para  diseñar escenografías teatrales, o de cine y tv.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "23",
		title: "Robótica",
		description: "Es un curso diseñado para que conozcas los fundamentos de la robótica y la programación utilizando la plataforma de desarrollo de hardware Arduino. Durante el curso,  aprenderás a utilizar la plataforma Arduino para crear proyectos de robótica, desde robots simples hasta proyectos más avanzados con múltiples sensores y actuadores. Como así también conectar y programar sensores y actuadores, como motores, servos, sensores de distancia.",
		duration: "2 meses",
		category: {
			category:"Electronica",
			icon:"/icons/electronica-marco.png"
		}
	},
	{
		id: "24",
		title: "Programación Web",
		description: "¡Lleva tu diseño al navegador! En este curso, se te enseñará a crear páginas web con las herramientas más fundamentales: HTML y CSS. Aprenderás a escribir tu propio código, entendiendo cómo funciona por dentro y cómo diseñar una web responsive para que sea más efectiva. Y si el diseño no es lo tuyo, este curso puede suponer una buena base para comenzar en el mundo del Desarrollo Web FrontEnd.",
		duration: "2 meses",
		category: {
			category:"Programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "25",
		title: "K-Pop",
		description: "Orientado a jóvenes de entre 15 a 25 años sin conocimientos previos en danza que tengan ganas de introducirse a la escena del K-pop en Mendoza. Historia, danza y música se van a combinar para que puedas vivir el Hallyu (Ola coreana) de la mano del K-pop.  ¡Se necesita ropa cómoda, botella de agua y ganas de bailar canciones de tus grupos favoritos!",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "26",
		title: "Diseño UX/UI",
		description: "Destinados a jóvenes que tengan conocimiento sobre herramientas de diseño, para desarrollar prototipos de un MVP de una app móvil. Donde se desarrollará fundamentos del diseño de interfaces de usuario (UI) y la experiencia de usuario (UX). Los estudiantes aprenderán cómo crear interfaces de usuario atractivas y fáciles de usar para aplicaciones web y móviles. También aprenderán a diseñar experiencias de usuario que sean intuitivas, eficientes y satisfactorias para los usuarios.",
		duration: "2 meses",
		category: {
			category:"Escuela de programación",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "27",
		title: "Base de Datos",
		description: "Destinado a jóvenes que tengan conocimientos en manejo e implementación de Bases de Datos. Donde implementarán, administrarán y modelarán Bases de Datos. Aprenderán a crear tablas, definir las relaciones entre ellas y realizar consultas complejas utilizando SQL. El curso cubrirá temas como el modelado de datos, la normalización de bases de datos, la optimización de consultas, la administración de usuarios y permisos necesarios para manejar Bases de Datos.",
		duration: "2 meses",
		category: {
			category:"Escuela de programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "28",
		title: "IA con Python",
		description: "Este curso de Inteligencia Artificial con Python está destinado a jóvenes que posean conocimientos de nivel medio en Python y GIT. En él implementarán Python para crear modelos de inteligencia artificial (IA) y  aprendizaje automático (machine learning). Se cubrirán temas como la regresión lineal, la clasificación, el agrupamiento y la red neuronal, así como técnicas avanzadas de aprendizaje profundo. Los estudiantes también aprenderán a preprocesar y visualizar datos para prepararlos para el análisis.",
		duration: "2 meses",
		category: {
			category:"Escuela de programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "29",
		title: "JavaScript",
		description: "Además, los estudiantes tendrán la oportunidad de trabajar en proyectos prácticos que les permitan aplicar los conceptos y habilidades que han aprendido. Al final del curso, los estudiantes tendrán una comprensión sólida de los fundamentos de las bases de datos relacionales y estarán listos para aplicar este conocimiento en el mundo real. Al final del cursado, los estudiantes tendrán una comprensión sólida de los principios de diseño de UI/UX, Bases de Datos, IA con Python, Javascripts y estarán listos para continuar su educación en esta emocionante y en constante evolución del sector IT.",
		duration: "2 meses",
		category: {
			category:"Escuela de programación",
			icon:"/icons/programacion-marco.png"
		}
	},
    
]

export const coursesMarzo : ICourse[] = [
	{
		id: "1",
		title: " Fotografía",
		description: "Aprenderás a tomar fotografías artísticas con las herramientas que nos brindan los teléfonos celulares. Conocerá conceptos básicos de composición e iluminación, además se aprenderá a utilizar aplicaciones de edición fotográfica para celulares.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "2",
		title: " Introducción al diseño vectorial",
		description: "Destinados a los que estén interesados en conocer una herramienta de dibujo vectorial de fácil utilización, gratuita, que permite crear diseños gráficos de alta calidad para materializarlos por medio de sublimación, plotter de corte, corte láser o router cnc.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "3",
		title: "Producción audiovisual",
		description: "El taller esta destinado al desarrollo de todo el proceso de producción audiovisual: manejo de cámara (calibración de color, iris, iso), investigación, pre producción, producción (documental, reportaje, formatos para web, revista televisiva), post-producción. Capacitar a los participantes en el entendimiento del sonido como alma, ritmo y tempo de una pieza audiovisual.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "4",
		title: "Ilustración Meta",
		description: "En el taller Ilustración Meta crearemos ilustraciones para el Metaverso. Aprenderemos e investigaremos acerca de este nuevo universo, además, profundizaremos en técnicas y estilos de ilustración. A lo largo del taller lograremos sumergirnos en el desarrollo y programación de una de las ramas que habita en el metaverso para poder vivenciar nuestras obras ilustradas desde otra realidad, vivenciando entre otras, ilustraciones animadas y de realidad aumentada. Se deberá tener conocimientos previos sobre ilustración.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "5",
		title: "Reparación, armado y mantenimiento de PC/Notebook",
		description: "En este taller aprenderás sobre todo lo relacionado con hardware y software para armar o reparar equipos portátiles y de escritorio. Como así también sobre conceptos básicos de electricidad, mediciones y componentes electrónicos.",
		duration: "2 meses",
		category: {
			category:"Electronica",
			icon:"/icons/electronica-marco.png"
		}
	},
	{
		id: "6",
		title: " Introducción al desarrollo web",
		description: "El curso está dirigido a personas interesadas en la creación web o blog y autogestionarse, es de fácil manejo y actualización, utilizando WordPress como herramienta principal para el desarrollo, ya que permite la gestión de contenidos dentro de tu página web además es open source y completamente gratuito.",
		duration: "2 meses",
		category: {
			category:"Programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "7",
		title: " Producción Musical",
		description: "Este curso es para personas que tengan el interés de aprender sobre el proceso de composición, arreglos y grabación de música, tanto para quien quiera iniciarse como para quienes tengan la intención de profundizar sobre conocimientos previos. Se trabajará el concepto de Home Studio utilizando diversos programas profesionales incorporando plugins, e incluso explorando desde los instrumentos distintas opciones.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "8",
		title: "Diseño 2D-CAD",
		description: "Introducción al uso de programas de diseño CAD profesional en 2D  orientada a la producción de objetos en  máquinas de corte y router CNC.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "9",
		title: " Post-Producción",
		description: "Durante el taller se aprenderá a tratar videos de forma creativa a través de postproducción animando tipografías y gráficos para incluir en cualquier proyecto audiovisual. ",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "10",
		title: "Creación de videojuegos en Unity",
		description: "Mediante el diseño y la creación de un videojuego de plataformas 2D, se irán explicando las herramientas y los conceptos básicos relacionados a la plataforma de Unity.  No es necesario tener conocimientos previos de programación.",
		duration: "2 meses",
		category: {
			category:"Programacion",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "11",
		title: " Formación musical",
		description: "Un taller destinado a personas sin conocimientos previos con curiosidad por aprender sobre teoría musical, tocar instrumentos y aprender a usar programas de registro de audio. ",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "12",
		title: " Dibujo Digital",
		description: "En el taller de Dibujo Digital podrás experimentar y formar técnicas de dibujo para explotar al máximo tus ideas, además se pondrán en escena maneras y estilos de dibujo. No se requiere conocimientos previos en dibujo.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	}
    
]

export const coursesMayo : ICourse[] = [
	{
		id: "13",
		title: "Diseño creativo",

		description: "Destinados a los que estén interesados en conocer una herramienta de dibujo vectorial de fácil utilización, gratuita, que permite crear diseños gráficos de alta calidad para materializarlos por medio de sublimación y plotter de corte.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "14",
		title: "Reparación, armado y mantenimiento de PC/Notebook",

		description: "En este taller aprenderás sobre todo lo relacionado con hardware y software para armar o reparar equipos portátiles y de escritorio. Como así también sobre conceptos básicos de electricidad, mediciones y componentes electrónicos.",
		duration: "2 meses",
		category: {
			category:"Electronica",
			icon:"/icons/electronica-marco.png"
		}
	},
	{
		id: "15",
		title: "Diseño 2D con software profesional",

		description: "Durante el curso, los estudiantes aprenderán a utilizar las herramientas y comandos de software necesarios para dibujar líneas, círculos, arcos, polilíneas y otros objetos geométricos. También aprenderán a utilizar las herramientas de edición para modificar y ajustar los dibujos orientada a la producción de objetos en  máquinas de corte y router CNC.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "16",
		title: "Postproducción y efectos especiales",

		description: "Utilizando software profesional de postproducción de video y animación digital ampliamente utilizado en la industria del cine, la televisión y la producción de video aprenderás a crear efectos especiales, animaciones, composiciones y gráficos en movimiento. Además produciras composiciones de video y animación mediante la combinación de capas de video y efectos visuales, animación de texto, gráficos en movimiento y efectos visuales, lo que permite a los usuarios crear títulos de crédito, efectos de transición, animaciones de personajes, entre otros.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "17",
		title: "Desarrollo de Videojuegos 2D con Unity:",

		description: "Durante el curso, los estudiantes aprenderán a trabajar con los elementos clave del desarrollo de videojuegos 2D, como el diseño de niveles, el movimiento de personajes, la creación de obstáculos, la implementación de la física del juego y la lógica de programación. También aprenderán a trabajar con herramientas gráficas para crear los elementos visuales del juego, como los personajes, los fondos y los objetos. No es necesario tener conocimientos previos de programación.",
		duration: "2 meses",
		category: {
			category:"Programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "18",
		title: "Beat Lab : Formación y Producción Musical",

		description: " ¿Te gusta la música? ¿Querés aprender a producir tus propias canciones o aprender a hacerlas? ¡Entonces este taller es para vos! Destinado a personas con o sin experiencia previa en una etapa formativa con intenciones de aprender aspectos básicos sobre Audio, Sonido y Música y técnicas para trabajar con ellos. Además, te brindaremos la oportunidad de conocer y colaborar con otras personas como vos y de esa forma hacer nuevas conexiones.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "19",
		title: "Dibujo Digital",

		description: "Los asistentes aprenderán a utilizar software de dibujo digital profesional para crear obras de arte digitales. Se les enseñará cómo utilizar herramientas de dibujo, como lápices, pinceles y plumas, para crear líneas y formas, así como técnicas de sombreado y coloración para dar vida a sus dibujos utilizando tabletas gráficas.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "20",
		title: "Diseño 3D con Blender",

		description: "¿Te interesa el diseño 3D? Siendo parte de este curso, podrás adquirir los conocimientos adecuados para manejar herramientas de diseño y modelado 3D, también aprenderás sobre las impresoras 3D y su funcionamiento. A lo largo de este taller conocerás todo lo necesario para incorporarte al mundo del 3D.",
		duration: "2 meses",
		category: {
			category:"Diseño",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "21",
		title: "Realidad Aumentada",

		description: "Los asistentes aprenderán a utilizar herramientas de software especializadas, para crear objetos y elementos virtuales que se integran en el mundo real. También se les enseñará cómo utilizar dispositivos de realidad aumentada, como smartphones, tablets o smartglasses, para experimentar y probar sus creaciones.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "22",
		title: "Escenografía Digital",

		description: "Este taller está pensado para aprender a manejar el espacio escénico, crear y generar el mismo a partir de la imaginación teniendo en cuenta la utilización de distintos materiales, colores, formas y texturas. Combinaremos prácticas manuales y digitales para  diseñar escenografías teatrales, o de cine y tv.",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "23",
		title: "Robótica",

		description: "Es un curso diseñado para que conozcas los fundamentos de la robótica y la programación utilizando la plataforma de desarrollo de hardware Arduino. Durante el curso,  aprenderás a utilizar la plataforma Arduino para crear proyectos de robótica, desde robots simples hasta proyectos más avanzados con múltiples sensores y actuadores. Como así también conectar y programar sensores y actuadores, como motores, servos, sensores de distancia.",
		duration: "2 meses",
		category: {
			category:"Electronica",
			icon:"/icons/electronica-marco.png"
		}
	},
	{
		id: "24",
		title: "Programación Web",

		description: "¡Lleva tu diseño al navegador! En este curso, se te enseñará a crear páginas web con las herramientas más fundamentales: HTML y CSS. Aprenderás a escribir tu propio código, entendiendo cómo funciona por dentro y cómo diseñar una web responsive para que sea más efectiva. Y si el diseño no es lo tuyo, este curso puede suponer una buena base para comenzar en el mundo del Desarrollo Web FrontEnd.",
		duration: "2 meses",
		category: {
			category:"Programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "25",
		title: "K-Pop",

		description: "Orientado a jóvenes de entre 15 a 25 años sin conocimientos previos en danza que tengan ganas de introducirse a la escena del K-pop en Mendoza. Historia, danza y música se van a combinar para que puedas vivir el Hallyu (Ola coreana) de la mano del K-pop.  ¡Se necesita ropa cómoda, botella de agua y ganas de bailar canciones de tus grupos favoritos!",
		duration: "2 meses",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
]

export const coursesProgramacion : ICourse[] = [
	{
		id: "26",
		title: "Diseño UX/UI",

		description: "Destinados a jóvenes que tengan conocimiento sobre herramientas de diseño, para desarrollar prototipos de un MVP de una app móvil. Donde se desarrollará fundamentos del diseño de interfaces de usuario (UI) y la experiencia de usuario (UX). Los estudiantes aprenderán cómo crear interfaces de usuario atractivas y fáciles de usar para aplicaciones web y móviles. También aprenderán a diseñar experiencias de usuario que sean intuitivas, eficientes y satisfactorias para los usuarios.",
		duration: "2 meses",
		category: {
			category:"Escuela de programación",
			icon:"/icons/diseño-marco.png"
		}
	},
	{
		id: "27",
		title: "Base de Datos",

		description: "Destinado a jóvenes que tengan conocimientos en manejo e implementación de Bases de Datos. Donde implementarán, administrarán y modelarán Bases de Datos. Aprenderán a crear tablas, definir las relaciones entre ellas y realizar consultas complejas utilizando SQL. El curso cubrirá temas como el modelado de datos, la normalización de bases de datos, la optimización de consultas, la administración de usuarios y permisos necesarios para manejar Bases de Datos.",
		duration: "2 meses",
		category: {
			category:"Escuela de programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "28",
		title: "IA con Python",

		description: "Este curso de Inteligencia Artificial con Python está destinado a jóvenes que posean conocimientos de nivel medio en Python y GIT. En él implementarán Python para crear modelos de inteligencia artificial (IA) y  aprendizaje automático (machine learning). Se cubrirán temas como la regresión lineal, la clasificación, el agrupamiento y la red neuronal, así como técnicas avanzadas de aprendizaje profundo. Los estudiantes también aprenderán a preprocesar y visualizar datos para prepararlos para el análisis.",
		duration: "2 meses",
		category: {
			category:"Escuela de programación",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "29",
		title: "JavaScript",

		description: "Además, los estudiantes tendrán la oportunidad de trabajar en proyectos prácticos que les permitan aplicar los conceptos y habilidades que han aprendido. Al final del curso, los estudiantes tendrán una comprensión sólida de los fundamentos de las bases de datos relacionales y estarán listos para aplicar este conocimiento en el mundo real. Al final del cursado, los estudiantes tendrán una comprensión sólida de los principios de diseño de UI/UX, Bases de Datos, IA con Python, Javascripts y estarán listos para continuar su educación en esta emocionante y en constante evolución del sector IT.",
		duration: "2 meses",
		category: {
			category:"Escuela de programación",
			icon:"/icons/programacion-marco.png"
		}
	},
]

export const events : IEvent[] = [
	{
		id: "1",
		title: "Git y GitHub",

		description: "¡Anuncio importante para los estudiantes de nuestra escuela de programación! ¡No te pierdas nuestro evento especial donde aprenderás a utilizar Git con GitHub y cómo implementarlo en un entorno laboral! Será una oportunidad única para mejorar tus habilidades en el control de versiones y colaboración en proyectos.",
		duration: "2 encuentros",
		date:"Proximamente...",
		category: {
			category:"Programacion",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "2",
		title: "Inteligencias artificiales en el ámbito educativo.",

		description: "Esta charla será una oportunidad única para explorar cómo la inteligencia artificial está transformando la forma en que aprendemos y enseñamos. Analizaremos cómo las tecnologías de inteligencia artificial pueden mejorar la personalización del aprendizaje, facilitar la evaluación y retroalimentación, fomentar la participación activa de los estudiantes y abrir nuevas posibilidades para la educación inclusiva.",
		duration: "3 horas",
		date:"Proximamente...",
		category: {
			category:"Programacion",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "3",
		title: "Arduino day",

		description: "El Arduino Day es un evento mundial de hardware y software de código abierto. Esta comunidad internacional diseña y produce placas de desarrollo de hardware para construir dispositivos digitales y dispositivos interactivos que puedan detectar y controlar objetos del mundo real.",
		duration: "3 horas",
		date:"26/03",
		category: {
			category:"Programacion",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id: "4",
		title: "Akiba fest 2",

		description: "Podrás disfrutar de: taller de origami, taller de estampado de remeras, karaoke anime, desfile Cosplay, entre otras actividades! Destinado a niños, niñas y jóvenes entre 6 y 30 años.",
		duration: "4 horas",
		date:"Proximamente...",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
	{
		id: "5",
		title: "Scratch day",

		description: "El Día de Scratch es una celebración global de la programación creativa, donde personas de todas las edades se reúnen para explorar, crear y compartir proyectos utilizando Scratch, un lenguaje de programación visual diseñado especialmente para principiantes.",
		duration: "3 horas",
		date:"Proximamente...",
		category: {
			category:"Programacion",
			icon:"/icons/programacion-marco.png"
		}
	},
	{
		id:"6",
		title: "Make music day",

		description: "Se fusionará música, tecnología y programación, para crear piezas únicas e innovadoras.",
		duration: "3 horas",
		date:"25/05",
		category: {
			category:"Audiovisuales",
			icon:"/icons/audiovisual-marco.png"
		}
	},
    
]

export const quote : IQuote[] = [
	{
		id:"1",
		quote:"Hay una fuerza motriz más poderosa que el vapor, la electricidad y la energía atómica: La Voluntad",
		author:"Albert Einstein"
	},
	{
		id:"2",
		quote:"La emoción de aprender nuevas tecnologías es increíblemente alta.",
		author:"Bill Gates"
	},
	{
		id:"3",
		quote:"Nadie lo ignora todo, nadie lo sabe todo. Por eso aprendemos siempre.",
		author:"Paulo Freire"
	},
	{
		id:"4",
		quote:"Al fin y al cabo, somos lo que hacemos para cambiar lo que somos.",
		author:"Eduardo Galeano"
	},
	{
		id:"5",
		quote:"La educación no se imparte, se devuelve, la educación no es un acto de generosidad sino de justicia.",
		author:"Liliana Bodoc"
	},
]

export const cdf : IAbotUs = {
	title:"Un poco de nosotros",
	description : DESCRIPTION_CDF,
	image: cdfImage
}

export const fablab : IAbotUs = {
	title:"FabLab",
	description : DESCRIPTION_FABLAB,
	image: fablabImage
}

export const escuelaProgramacion : IAbotUs = {
	title:"Escuela de programación",
	description : "Si sos un apasionado por la tecnología y queres fortalecer tus conocimientos en el mundo de la programación. Estamos orgullosos de anunciar el lanzamiento de nuestra nueva escuela de programación dentro de Casa del Futuro. Nos enfocamos en brindar a los estudiantes una educación de calidad en tecnología y programación, combinando la teoría y la práctica para poder aplicar sus habilidades en el mundo real. Contamos con un gran equipo de profesores altamente capacitados y experimentados para ayudarlos a alcanzar sus objetivos y avanzar de manera constante a lo largo del cursado. No solo aprenderás habilidades técnicas, sino que también tendrás la oportunidad de establecer contactos con expertos en la industria, gracias a nuestras alianzas con empresas y universidades. Nos aseguramos que nuestros estudiantes tengan una experiencia práctica y puedan aplicar lo aprendido en proyectos reales. La oferta educativa está diseñada para adaptarse a diferentes niveles de conocimiento, y cubre una amplia variedad de temas relevantes en la industria. Estamos actualizando los programas permanente en base a las últimas tecnologías y tendencias, para ofrecer a nuestros estudiantes la mejor educación posible. Los cursos tienen una duración de tres meses y cuatro horas semanales de manera presencial. Para poder realizarlos deberán llenar los formularios de preinscripción de cada una de las propuestas en la cuál querés ingresar y rendir un examen nivelatorio. Los mejores promedios de cada uno de ellos ingresarán al cupo asignado que tenemos disponibles. Las propuestas que tenemos son:",
	image: escuelaProgramacionImg
}