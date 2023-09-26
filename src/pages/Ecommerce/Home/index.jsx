import images from '../../../assets/images';
import './home.scss';

function HomePage() {
    return (
        <div className="home-container w-[1200px] mx-auto my-[3rem]">
            <div className="">
                <div className="h-[484px] rounded-[0.3rem] shadow-[2px_2px_4px_1px_rgba(0,0,0,0.3)]">
                    <img
                        className="h-full w-full object-cover rounded-[0.3rem]"
                        src={images.banner.main}
                        alt=""
                    />
                </div>
                <div className="list-images mt-[3rem]">
                    <img
                        className="image-item object-fit rounded-[0.3rem]"
                        src={images.banner.slide1}
                        alt=""
                    />
                    <img
                        className="image-item object-cover rounded-[0.3rem]"
                        src={images.banner.slide1}
                        alt=""
                    />
                    <img
                        className="image-item object-cover rounded-[0.3rem]"
                        src={images.banner.slide1}
                        alt=""
                    />
                </div>
            </div>
            <div className="category"></div>
            <div className="banner"></div>
            <div></div>
        </div>
    );
}

export default HomePage;
