import './cardProduct.scss';
import Meta from 'antd/es/card/Meta';
import Card from 'antd/es/card/Card';
import { Rate, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { IconStarFilled, IconStarHalfFilled, IconStar } from '@tabler/icons-react';
import { numberFormatter } from '../../../../utils/formatter';
import { useNavigate } from 'react-router-dom';
import config from '../../../../config';

function CardProduct({ product }) {
    const navigate = useNavigate();
    const handlePrice = (variants) => {
        const variantWithItemPriceMin = variants.reduce((min, current) =>
            current.itemPrice < min.itemPrice ? current : min,
        );

        return {
            itemPrice: numberFormatter(variantWithItemPriceMin.itemPrice),
            promotionalItemPrice:
                variantWithItemPriceMin.promotionalItemPrice !== null
                    ? numberFormatter(variantWithItemPriceMin.promotionalItemPrice)
                    : null,
        };
    };
    const price = handlePrice(product.variants);

    return (
        <Card
            onClick={() => navigate(`${config.routes.web.product_detail}/${product.slug}`)}
            hoverable
            className="card-product"
            style={{
                width: '100%',
            }}
            cover={
                <img
                    alt="product"
                    src={product.images.filter((p) => p.isDefault === true)[0].image}
                />
            }
        >
            <Meta title={product.name} />
            <div className="star-color mt-[1.2rem] mb-[0.5rem] flex">
                {<Rate allowHalf disabled defaultValue={Math.ceil(product.rating * 2) / 2} />}
            </div>
            <div className="price text-[1.6rem] font-bold flex justify-between items-center">
                <div>
                    <span
                        className={` ${
                            price.promotionalItemPrice
                                ? 'text-[1.6rem] opacity-[0.8] font-normal line-through mr-[0.5rem]'
                                : 'price-color text-[2rem]'
                        }`}
                    >
                        {price.itemPrice}
                    </span>
                    {price.promotionalItemPrice && (
                        <span className="price-color text-[2rem]">
                            {price.promotionalItemPrice}
                        </span>
                    )}
                </div>
                <Tooltip placement="bottom" title="Thêm vào giỏ hàng">
                    <FontAwesomeIcon
                        className="primary-color transition-all delay-[0.3] text-[2.4rem]"
                        icon={faCartPlus}
                    />
                </Tooltip>
            </div>
        </Card>
    );
}

export default CardProduct;
