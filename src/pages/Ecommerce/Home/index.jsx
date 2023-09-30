import './home.scss';
import images from '../../../assets/images';
import Banner from './Banner';
import SlideCategory from './SlideCategory';
import Product from './Product';
import Quality from './Quality';
import News from './News';

function HomePage() {
    return (
        <div className="home-container max-w-[1200px] mx-auto p-[3rem]">
            <Banner />
            <SlideCategory />
            <Product />
            <div className="w-full h-[340px] my-[7rem]">
                <img
                    className="w-full h-full object-cover object-top rounded-[5px] shadow-[2px_2px_6px_0_rgba(0,0,0,0.4)]"
                    src={images.banner.slide4}
                    alt=""
                />
            </div>
            <Quality />
            <News />
        </div>
    );
}

export default HomePage;
