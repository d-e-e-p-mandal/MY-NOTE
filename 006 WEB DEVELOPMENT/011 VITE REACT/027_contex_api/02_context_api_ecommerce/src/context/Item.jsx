import { createContext, useState } from "react";

const ItemContext = createContext(null);

export default function ItemProvider(props) {
    const [items, setItems] = useState([]);
    return(
        <ItemContext.Provider value={{items, setItems}}>
            {props.children}
        </ItemContext.Provider>
    )
}