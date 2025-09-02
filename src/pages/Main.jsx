import { useSelector } from "react-redux";
import bg from '../img/bg.png'

function Main() {
    let shoes = useSelector((state) => state.shoes)

    return (
        <>
            main
        </>
    )
}

export default Main