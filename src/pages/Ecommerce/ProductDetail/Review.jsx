import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FilterRating from './FilterRating';
import Rating from './Rating';

function Review() {
    return (
        <div className="review mt-[3rem] pt-[2rem] border-t-[1px]">
            <h2 className="text-[2.6rem] font-medium">Đánh giá sản phẩm</h2>
            <div className="grid grid-cols-12 items-center border-[1px] bg-lime-100 py-[2.4rem]">
                <div className="infor col-span-2 max-md:col-span-3 max-sm:col-span-6 text-[1.8rem] text-center">
                    <div>
                        <span className="text-[3rem] font-medium mr-[0.5rem]">4.7</span>
                        <span>trên 5</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="col-span-10 max-md:col-span-9 max-sm:col-span-6">
                    <FilterRating />
                </div>
            </div>
            <div className="list-rating">
                <Rating />
                <Rating />
                <Rating />
            </div>
        </div>
    );
}

export default Review;
