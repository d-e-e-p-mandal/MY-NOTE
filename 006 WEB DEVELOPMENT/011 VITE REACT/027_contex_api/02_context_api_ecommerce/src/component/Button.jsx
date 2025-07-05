import { useContext } from "react";

const { items, setItems } = useContext(ItemContext);



export default function Button() {
    return(
        <>
            <button type="submit"> Add To Cart </button>
        </>
    )
}