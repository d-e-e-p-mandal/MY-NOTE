import Button from "./Button";
export default function Items({itemName, price}) {
    return (
        <>
            <div>
                <h3>{itemName}</h3>
                <p>Item price : {price}</p>
                <Button/>
            </div>
            <br />
        </>
    )
}