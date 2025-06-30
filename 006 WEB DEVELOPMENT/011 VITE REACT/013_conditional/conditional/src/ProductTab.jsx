import  Product  from './Product';
//import './ProductTab.css';

function ProductTab() {
    return (
        <>
            <div className="ProductTab">
                <Product title="phone" price = {30000} feature = {["hi-tech","durable"]}/>
                <Product title="laptop" price = {60000} feature = {["hi-tech","durable"]}/>
                <Product title="tablet" price = {70000} feature = {["hi-tech","durable"]}/>
            </div>
        </>
    )
}
export default ProductTab