import  Product  from './Product';
//import './ProductTab.css';
// function ProductTab() {
//     let feature = ["hi-tech","durable"];
//     return (
//         <>
//             <div className="ProductTab">
//                 <Product title="phone" price = {30000} feature = {feature}/>
//                 <Product title="laptop" price = {30000} feature = {feature}/>
//                 <Product title="tablet" price = {30000} feature = {feature}/>
//             </div>
//         </>
//     )
// }

function ProductTab() {
    return (
        <>
            <div className="ProductTab">
                <Product title="phone" price = {30000} feature = {["hi-tech","durable"]}/>
                <Product title="laptop" price = {30000} feature = {["hi-tech","durable"]}/>
                <Product title="tablet" price = {30000} feature = {["hi-tech","durable"]}/>
            </div>
        </>
    )
}
export default ProductTab