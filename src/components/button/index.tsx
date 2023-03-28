import { PrimaryButton, SecondaryButton } from "./button.styled"

type props = {
    content: string,
    secondary?: boolean
}

const Button = ({content, secondary}: props) => {
    if(secondary){
        return <SecondaryButton>{content}</SecondaryButton>
    }
    return <PrimaryButton>{content}</PrimaryButton>
}

export default Button