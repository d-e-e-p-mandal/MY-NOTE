import  Product  from './Product';
import './ProductTab.css';
function ProductTab() {
    return (
        <>
            <div className="ProductTab">
                <Product/>
                <Product/>
                <Product/>
            </div>
        </>
    )
}
export default ProductTab