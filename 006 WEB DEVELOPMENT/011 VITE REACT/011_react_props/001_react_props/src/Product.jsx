import './Product.css';

/*function Product(props) {
    return (
        <>
            <div className="Product"> 
                <p> This is { props.title }</p>
                <p> Price : {props.price}</p>
                <br />
            </div>  
        </>
    )
} */


function Product({title, price}) {
    return (
        <>
            <div className="Product"> 
                <p> This is { title }</p>
                <p> Price : {price}</p>
            </div>  
        </>
    )
}    
 export default Product