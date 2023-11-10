import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './shop.scss';
import Product from './Product';
import Filter from './Filter';
import BreadCrumb from '../../../layouts/Ecommerce/components/Breadcrumb';
import { useGetProductCategoryBySlug } from '../../../hooks/api';

function ShopPage() {
    const location = useLocation();
    let { productCategory } = useParams();
    const [params, setParams] = useState({
        pageIndex: 1,
        pageSize: 50,
        categorySlug: productCategory,
    });
    const [routes, setRoutes] = useState([]);
    const { isLoading, data } = useGetProductCategoryBySlug(location.pathname.split('/')[1]);

    useEffect(() => {
        if (isLoading || !data) return;
        setRoutes([
            {
                title: data?.data?.name,
            },
        ]);
    }, [isLoading, data]);

    return (
        <>
            <BreadCrumb routes={routes} />
            <div className="shop-container p-[2rem]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-12 bg-white">
                    <div className="col-span-3 max-lg:hidden">
                        <Filter />
                    </div>
                    <div className="col-span-9 max-lg:col-span-12">
                        <Product params={params} setParams={setParams} setRoutes={setRoutes} />
                    </div>
                </div>

                {/* Open Modal when responsive with max-width: 1024px */}
                <input className="hidden" type="checkbox" id="open" />
                <label
                    for="open"
                    className="slidebar hidden h-screen w-screen fixed top-0 left-0 bg-black opacity-[0.2] z-10"
                />
                <div className="slidebar bg-white hidden h-screen w-[300px] fixed top-0 left-0 z-10">
                    <div className="z-10">
                        <Filter />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopPage;
