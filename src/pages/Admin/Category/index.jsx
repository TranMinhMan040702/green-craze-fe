import CategoryHead from './CategoryHead';
import Data from './Data';
import './category.scss';

function CategoryPage() {
    return (
        <div className="category-container">
            <CategoryHead />
            <Data />
        </div>
    );
}

export default CategoryPage;
