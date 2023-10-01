import images from '../../../assets/images';

function Banner() {
    return (
        <div className="banner">
            <div className="h-[486px] rounded-[5px] shadow-[2px_2px_6px_0_rgba(0,0,0,0.4)]">
                <img
                    className="h-full w-full object-top object-cover rounded-[5px]"
                    src={images.banner.main}
                    alt=""
                />
            </div>
            <div className="image-list my-[2rem]">
                <div className="image-item rounded-[5px] shadow-[2px_2px_6px_0_rgba(0,0,0,0.4)]">
                    <img
                        src={images.banner.slide1}
                        alt=""
                        className="h-full w-full object-cover object-top rounded-[5px]"
                    />
                </div>
                <div className="image-item rounded-[5px] shadow-[2px_2px_6px_0_rgba(0,0,0,0.4)]">
                    <img
                        src={images.banner.slide2}
                        alt=""
                        className="h-full w-full object-cover object-top rounded-[5px]"
                    />
                </div>
                <div className="image-item rounded-[5px] shadow-[2px_2px_6px_0_rgba(0,0,0,0.4)]">
                    <img
                        src={images.banner.slide3}
                        alt=""
                        className="h-full w-full object-cover object-top rounded-[5px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
