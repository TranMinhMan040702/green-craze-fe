import './review.scss';
import Data from './Data';
import ReviewHead from './ReviewHead';

function ReviewPage() {
    return (
        <div className="review-container">
            <ReviewHead />
            <Data />
        </div>
    );
}

export default ReviewPage;
