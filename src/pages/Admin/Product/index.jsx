import { useState } from 'react';
import Data from './Data';
import ProductHead from './ProductHead';
import './product.scss';

function ProductPage() {
    const [productIds, setProductIds] = useState();
    const [params, setParams] = useState({
        page: 1,
        size: 5,
    });

    return (
        <div className="product-container">
            <ProductHead productIds={productIds} params={params} />
            <Data setProductIds={setProductIds} params={params} setParams={setParams} />
        </div>
    );
}

export default ProductPage;
