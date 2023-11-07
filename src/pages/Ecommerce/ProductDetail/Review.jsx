import { useState } from 'react';
import { useGetCountReview, useGetListReview } from '../../../hooks/api';
import FilterRating from './FilterRating';
import Rating from './Rating';
import { Pagination, Rate, Spin } from 'antd';

function Review({ product }) {
    const [params, setParams] = useState({
        productId: product?.id,
        rating: null,
        pageIndex: 1,
        pageSize: 2,
        status: true,
    });
    const { data, isLoading } = useGetListReview(params);
    const countAPI = useGetCountReview(product?.id);
    const [totalItem, setTotalItem] = useState(data?.data?.totalItems);
    const onChange = (value) => {
        setParams((prev) => ({ ...prev, pageIndex: value }));
    };

    return (
        <div className="review mt-[3rem] pt-[2rem] border-t-[1px] min-h-[50rem]">
            <h2 className="text-[2.6rem] font-medium">Đánh giá sản phẩm</h2>
            <div className="grid grid-cols-12 items-center border-[1px] bg-lime-100 py-[2.4rem]">
                <div className="infor col-span-2 max-md:col-span-3 max-sm:col-span-6 text-[1.8rem] text-center">
                    <div>
                        <span className="text-[3rem] font-medium mr-[0.5rem]">
                            {Math.ceil((product?.rating) * 2) / 2}
                        </span>
                        <span>trên 5</span>
                    </div>
                    <div>
                        <Rate value={product?.rating} allowHalf disabled />
                    </div>
                </div>
                <div className="col-span-10 max-md:col-span-9 max-sm:col-span-6">
                    {countAPI?.data?.data && (
                        <FilterRating count={countAPI?.data?.data} setParams={setParams} />
                    )}
                </div>
            </div>
            <div className="list-rating">
                {isLoading ? (
                    <div className="flex justify-center my-7">
                        <Spin />
                    </div>
                ) : (
                    <>
                        {data?.data?.items?.map((item) => {
                            return <Rating key={item.id} review={item} />;
                        })}
                        {data?.data?.items?.length === 0 && (
                            <div className="flex flex-col justify-center items-center p-[5rem]">
                                <img
                                    className="w-52"
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/shoprating/7d900d4dc402db5304b2090a184404cb.png"
                                />
                                <p className="text-[1.6rem] ">Không có đánh giá nào</p>
                            </div>
                        )}
                    </>
                )}
            </div>
            {data?.data?.items?.length > 0 && (
                <div className="flex justify-center my-7">
                    <Pagination
                        onChange={onChange}
                        current={params.pageIndex}
                        total={data?.data?.totalItems}
                        pageSize={params.pageSize}
                    />
                </div>
            )}
        </div>
    );
}

export default Review;
