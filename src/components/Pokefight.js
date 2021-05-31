import { useContext } from "react"
import { PokeContext } from "./PokeContext"


const Pokefight = () => {
    const { poke } = useContext(PokeContext)
    console.log(poke)

    return (
        <>

        </>
    )

}

export default Pokefight;