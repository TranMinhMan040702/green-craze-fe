import CardProduct from '../../../layouts/Ecommerce/components/CardProduct';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Product() {
    return (
        <div className="products">
            <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-[2rem]">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
            <div className="text-center my-[2.6rem]">
                <Button className="primary-color" shape="round">
                    Xem thêm <FontAwesomeIcon className="text-[1.2rem]" icon={faChevronRight} />
                </Button>
            </div>
        </div>
    );
}

export default Product;
