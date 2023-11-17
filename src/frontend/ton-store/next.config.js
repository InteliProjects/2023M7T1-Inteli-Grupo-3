/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos']
    },
	typescript: {
		ignoreBuildErrors: true,
	}
}

module.exports = nextConfig
