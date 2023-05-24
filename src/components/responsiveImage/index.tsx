import Image, { StaticImageData } from 'next/image'
import { useMediaQuery } from '@material-ui/core'

interface ResponsiveImageProps {
    src: StaticImageData | string;
    alt: string;
    width: number;
    height: number;
}

function ResponsiveImage({ src, alt, width, height }: ResponsiveImageProps) {
    const isSmallScreen = useMediaQuery('(max-width: 600px)')

    return (
        <Image
            src={src}
            alt={alt}
            width={isSmallScreen ? width / 1.5 : width}
            height={isSmallScreen ? height / 1.5 : height}
            style={{borderRadius: "50%" }}
        />
    )
}

export default ResponsiveImage
