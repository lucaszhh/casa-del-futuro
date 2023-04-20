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
                        color: "red",
                        backgroundColor: "red"
                    }
                }
            ]
        }
    }
})

