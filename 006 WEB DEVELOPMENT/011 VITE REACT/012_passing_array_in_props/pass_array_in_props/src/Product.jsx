import './Product.css';

// function Product({title, price, feature}) {

//     return (
//         <>
//             <div className="Product"> 
//                 <p> This is { title }</p>
//                 <p> Price : {price}</p>
//                 <p> Feature of Product : {feature}</p>
//             </div>  
//         </>
//     )
// }    

// function Product({title, price, feature}) {
//     let list = feature.map((f) =>(
//         <li>{f}</li>
//     ));
//     return (
//         <>
//             <div className="Product"> 
//                 <p> This is { title }</p>
//                 <p> Price : {price}</p>
//                 <p> Feature of Product : </p>
//                 <ul>{list}</ul>
//             </div>  
//         </>
//     )
// } 


function Product({ title, price, feature }) {

    return (
        <>
            <div className="Product">
                <p> This is {title}</p>
                <p> Price : {price}</p>
                <p> Feature of Product : </p>
                <ul>{feature.map((f) => (
                    <li>{f}</li>
                ))}
                </ul>
            </div>
        </>
    )
}


export default Product