import Data from './Data';
import ProductHead from './ProductHead';
import './product.scss';

function ProductPage() {
    return (
        <div className="category-container">
            <ProductHead />
            <Data />
        </div>
    );
}

export default ProductPage;
