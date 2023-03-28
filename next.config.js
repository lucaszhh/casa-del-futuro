/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.freeimages.com"]
	},
	future: {
		// Habilitar prefijos CSS para compatibilidad con navegadores antiguos
		autoprefixer: {
		  // Agregar navegadores a los que se debe dar soporte
		  browsers: ['last 2 versions', 'ie 11'],
		},
	  },
}

module.exports = nextConfig
