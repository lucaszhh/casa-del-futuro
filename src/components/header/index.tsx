import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import logoCdf from "/public/imgs/logoCasaDelFuturo.png"
import Image from 'next/image'
import { faHome, faChalkboardUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const pages = [
    {
        page: "Bienvenida",
        url: "/",
        icon: faHome
    },
    {
        page: "Cursos",
        url: "/cursos",
        icon: faChalkboardUser
    },
    {
        page: "Eventos",
        url: "/eventos",
        icon: faCalendarAlt
    },
    {
        page: "FabLab",
        url: "/fablab",
        icon: faChalkboardUser
    },
]

const socialMedia = [
    {
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send?phone=5492612051915",
        icon: faWhatsapp
    },
    {
        name: "Instagram",
        url: "https://instagram.com/casadelfuturo.godoycruz?utm_medium=copy_link",
        icon: faInstagram
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@casadelfuturogc6632",
        icon: faYoutube
    }
]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} >
                    <Link href="/" style={{ display: "{ xs: none, md: flex }" }} >
                        <Image src={logoCdf} width="135" height="50" alt="casa-del-futuro" />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "end" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map(({ page, icon, url }) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link href={url} style={{ color: "#800080" }}>
                                        <Typography variant='h5' textAlign="center" sx={{ fontWeight: "bold" }}>
                                            <FontAwesomeIcon icon={icon} style={{ fontSize: "20px", paddingInline: "5px" }} />
                                            {page}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            <Box sx={{ display: "flex", paddingTop: "50px" }}>
                                {socialMedia.map(({ icon, url }) => (
                                    <MenuItem key={url} onClick={handleCloseUserMenu} sx={{ textAlign: "start", gap: "5px" }}>
                                        <Link href={url} style={{ color: "#800080" }}>
                                            <FontAwesomeIcon icon={icon} style={{ fontSize: "40px" }} />
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(({ page, icon, url }) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link href={url} style={{ color: "#FFF" }}>
                                    <FontAwesomeIcon icon={icon} style={{ fontSize: "20px", paddingInline: "5px" }} />
                                    {page}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Tooltip title="Open socialMedia">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {socialMedia.map(({ icon, url }) => (
                                    <MenuItem key={url} onClick={handleCloseUserMenu}>
                                        <FontAwesomeIcon icon={icon} style={{ fontSize: "30px", color: "#FFF" }} />
                                    </MenuItem>
                                ))}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {socialMedia.map(({ icon, url, name }) => (
                                <MenuItem key={url} onClick={handleCloseUserMenu} sx={{ textAlign: "start", gap: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                                    <Link style={{ color: "#800080", display: "flex", width: "100%", gap: "50px", alignItems: "center", justifyContent: "space-between" }} href={url} >
                                        <FontAwesomeIcon style={{ fontSize: "40px" }} icon={icon} />
                                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>{name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar