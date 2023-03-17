import { HOME_BANNER_DESCRIPTION, HOME_BANNER_TITLE } from "../../../constants"

export const Banner = () => {
    return (
        <>
            <div>
                <h3>{HOME_BANNER_TITLE}</h3>
                <p>{HOME_BANNER_DESCRIPTION}</p>
            </div>
        </>
    )
}