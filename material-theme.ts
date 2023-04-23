import { createTheme } from "@mui/material"

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        primary: true
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
        background: {
            default: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: ['Rubik', 'sans-serif'].join(',')
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
            ],
        },
    }
})

