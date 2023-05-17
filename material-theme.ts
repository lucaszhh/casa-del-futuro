import { createTheme } from "@mui/material"

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        primary: true
    }
}

declare module "@mui/material/Card" {
    interface CardPropsVariantOverrides {
        horizontal: true;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides  {
        title: true;
    }
}



export const theme = createTheme({
    palette: {
        primary: {
            main: '#800080'
        },
        secondary: {
            main: '#FFFFFF'
        },
    },
    typography: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        h1: {
            fontSize: "24px",
            fontWeight: "700",
            '@media (max-width:600px)': {
                fontSize: '20px',
            },
        },
        h2: {
            fontSize: "18px",
            fontWeight: "700",
            '@media (max-width:600px)': {
                fontSize: '16px',
            },
        },
        h3: {
            fontSize: "16px",
            fontWeight: "700",
            '@media (max-width:600px)': {
                fontSize: '16px',
            },
        },
        subtitle1: {
            fontSize: "16px",
            fontWeight: "400",
            '@media (max-width:600px)': {
                fontSize: '14px',
            },
        },
        subtitle2: {
            fontSize: "14px",
            fontWeight: "400",
            '@media (max-width:600px)': {
                fontSize: '12px',
            },
        },
        button: {
            fontSize: "16px",
            fontWeight: "700",
            '@media (max-width:600px)': {
                fontSize: '14px',
            },
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "primary" },
                    style: {
                        color: "#FFFFFF",
                        backgroundColor: "#800080",
                        textDecoration: "none",
                        "&:hover": {
                            backgroundColor: "#510051",
                        },
                    }
                },
                {
                    props: {variant: "primary", size: "large"},
                    style: {
                        width:"350px", 
                        padding:"10px 80px", 
                        fontSize:"18px", 
                        margin:"30px", 
                        '@media screen and (max-width: 768px)': {
                            width:"250px", 
                            margin:"0", 
                            padding:"10px 40px", 
                            fontSize:"unset"
                        }
                    }
                }
            ]
        },
        MuiCard: {
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        border: "1px solid #C4C4C4",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    },
                },
                {
                    props: { variant: "elevation"},
                    style: {
                        border: "1px solid #C4C4C4",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                    },
                }
            ],
        },
        MuiTypography: {
            variants: [
                {
                    props: { variant: "title" },
                    style: {
                        fontSize: "50px",
                        fontWeight: "700",
                        '@media (max-width:600px)': {
                            fontSize: '30px',
                        },
                    }
                }
            ]
        }
    }
})

