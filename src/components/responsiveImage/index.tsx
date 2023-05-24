import Image, { StaticImageData } from 'next/image'
import { useMediaQuery } from '@material-ui/core'
import { Box } from '@mui/material';

interface ResponsiveImageProps {
    src: StaticImageData | string;
    alt: string;
    width: number;
    height: number;
}

function ResponsiveImage({ src, alt, width, height }: ResponsiveImageProps) {
    const isSmallScreen = useMediaQuery('(max-width: 600px)')

    return (
        <Box sx={{transition: "all 0.3s ease", "&:hover": { transform: "translate3d(0, -5px, 0) scale(1.2)" , }}}> 
            <Image
                src={src}
                alt={alt}
                width={isSmallScreen ? width / 1.5 : width}
                height={isSmallScreen ? height / 1.5 : height}
                style={{borderRadius: "50%", boxShadow:" 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}
            />
        </Box>
    )
}

export default ResponsiveImage
