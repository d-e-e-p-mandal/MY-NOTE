import  Product  from './Product';
//import './ProductTab.css';
function ProductTab() {
    return (
        <>
            <div className="ProductTab">
                <Product title="phone" price = {30000}/>
                <Product title="laptop" price = {30000}/>
                <Product title="tablet" price = {30000}/>
            </div>
        </>
    )
}
export default ProductTab