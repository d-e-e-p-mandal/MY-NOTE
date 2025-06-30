import './Product.css';
 
//condition only : 
// function Product({ title, price, feature }) {

//     return (
//         <>
//             <div className="Product">
//                 <p> This is {title}</p>
//                 <p> Price : {price}</p>
//                 {/* { price > 50000 ? <p>Discout 5%</p> : null} */}
//                 {price > 50000 && <p>Discout 5%</p>}
//                 <p> Feature of Product : </p>
//                 <ul>{feature.map((f) => (
//                     <li>{f}</li>
//                 ))}
//                 </ul>
//             </div>
//         </>
//     )
// }


function Product({ title, price, feature }) {
    let isDiscout = price > 50000;
    let styles = { backgroundColor : (isDiscout) ? "yellow" : ""};
    return (
        <>
            <div className="Product" style={styles}>
                <p> This is {title}</p>
                <p> Price : {price}</p>
                {/* { price > 50000 ? <p>Discout 5%</p> : null} */}
                {isDiscout && <p>Discout 5%</p>}
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