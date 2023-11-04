import images from '../../../assets/images';
import CardProduct from '../../../layouts/Ecommerce/components/CardProduct';
import SortProductDropdown from './SortProductDropdown';
import SortProductTab from './SortProductTab';
import { Pagination } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useGetListProduct } from '../../../hooks/api';
import { useEffect, useState } from 'react';

function Product({ params, setParams }) {
    const { isLoading, data } = useGetListProduct(params);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (isLoading || !data) return;
        setProducts(data?.data?.items.filter((item) => item.status === 'ACTIVE'));
        setParams({ ...params, total: data?.data?.totalItems });
    }, [isLoading, data]);

    const handlePagingChange = (page, pageSize) => {
        setParams({
            ...params,
            pageIndex: page,
            pageSize: pageSize,
        });
    };

    return (
        <div className="product py-[1rem] px-[2.6rem]">
            <div className="banner h-[320px] rounded-[5px] shadow-[2px_2px_6px_0_rgba(0,0,0,0.4)]">
                <img
                    className="h-full w-full object-top object-cover rounded-[5px]"
                    src={images.banner.main}
                    alt=""
                />
            </div>
            <h2 className="text-[2.6rem] mt-[4rem] mb-[2rem]">Ly Giấy Tái Chế</h2>
            <div className="sort">
                <div className="max-lg:border-b-[1px] max-lg:pb-[1rem] max-lg:mb-[1rem] flex justify-between items-center">
                    <div>
                        <span className="text-[1.6rem] mr-[2rem]">Sắp xếp:</span>
                        <SortProductDropdown />
                    </div>
                    <label className="lg:hidden text-[1.4rem] cursor-pointer" for="open">
                        <FontAwesomeIcon className="mr-[1rem]" icon={faFilter} />
                        Lọc
                    </label>
                </div>
                <SortProductTab />
            </div>
            <div className="product-list">
                <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[2rem]">
                    {products.length > 0 &&
                        products.map((item, index) => <CardProduct key={index} product={item} />)}
                </div>
            </div>
            <div className="mt-[4rem] text-center">
                <Pagination
                    showSizeChanger
                    onChange={handlePagingChange}
                    defaultCurrent={params.pageIndex}
                    total={params.total}
                />
            </div>
        </div>
    );
}

export default Product;
