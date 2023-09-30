import images from '../../../assets/images';
import { Carousel, Image } from 'antd';

const contentStyle = {
    margin: 0,
    height: '480px',
    borderRadius: '5px',
    objectFit: 'cover',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    // background: '#f8f8f8',
};

function Images() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className="images-product">
            <Carousel afterChange={onChange}>
                <div>
                    <Image style={contentStyle} src={images.banner.main} alt="" />
                </div>
                <div>
                    <Image style={contentStyle} src={images.banner.slide1} alt="" />
                </div>
                <div>
                    <Image style={contentStyle} src={images.banner.slide2} alt="" />
                </div>
                <div>
                    <Image style={contentStyle} src={images.banner.slide3} alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default Images;
