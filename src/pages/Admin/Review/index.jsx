
import Data from './Data';
import ReviewHead from './ReviewHead';
import './review.scss';


function ReviewPage() {
    
    return (
        <div className="review-container">
            <ReviewHead />
            <Data />
        </div>
    );
}

export default ReviewPage;
