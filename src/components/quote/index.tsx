import { useQuote } from "@/hooks/useQuote"
import { IQuote } from "../../../types"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { Box, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Quote = () => {
    const quote: IQuote = useQuote()
    return (
        <Box sx={{ width: "100%", gap: "20px", padding: "50px 200px", backgroundColor: "#3f3f3f", display: "flex", flexDirection: "column", alignItems: "center", color: "white", '@media screen and (max-width: 768px)': { padding: "5px 20px" } }}>
            {quote &&
                <>
                    <FontAwesomeIcon style={{ fontSize: "40px" }} icon={faQuoteRight} />
                    <Typography variant="h1" sx={{ textAlign: "center" }}>
                        {quote.quote}
                    </Typography>
                    <Typography variant="h2" sx={{ fontStyle: "italic" }}>
                        {quote.author}
                    </Typography>
                </>
            }
        </Box>
    )
}
export default Quote