import { useQuote } from "@/hooks/useQuote"
import { IQuote } from "../../../types"
import { QuoteLayout, QuoteAuthor, QuoteIcon, QuoteTitle } from "./quote.styled"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"


const Quote = () => {
    const quote : IQuote | undefined = useQuote()
    return(
        <QuoteLayout>
            {quote &&
                <>
                    <QuoteIcon icon={faQuoteRight}/>
                    <QuoteTitle>{quote.quote}</QuoteTitle>
                    <QuoteAuthor>{quote.author}</QuoteAuthor>
                </>
            }
        </QuoteLayout>
        )
}
export default Quote