import images from '../../../assets/images';

function SlideCategory() {
    const categoryList = document.querySelector('.category-list');

    const clickSlideBtn = (e) => {
        const direction = e.target.classList.contains('prev-slide') ? -1 : 1;
        categoryList.scrollBy({ left: 143 * direction, behavior: 'smooth' });
    };

    return (
        <div className="category my-[5rem]">
            <div className="w-full justify-center items-center gap-[1.6rem] inline-flex mb-[2rem]">
                <img className="h-[25px]" src={images.cart} />
                <div className="text-center text-black text-[3rem] font-bold">
                    Mua sắm thôi nào!
                </div>
            </div>
            <div className="category-list xl:w-[1120px] max-xl:w-[944px] max-lg:w-[688px] max-md:w-[560px] max-sm:w-[350px] mx-auto">
                <button className="prev-slide" onClick={(e) => clickSlideBtn(e)} />
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.hop_giay_trang} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.dia_giay} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.hop_ba_mia} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.hop_kraft} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.khay_giay} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.ly_giay} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.ong_hut} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.phu_kien} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.sanitary} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.to_giay} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <div className="category-item flex flex-col items-center">
                    <div className="image w-[75px] h-[75px] rounded-[50%]">
                        <img src={images.category.tui_giay} alt="" />
                    </div>
                    <span className="text-center text-[1.4rem] mt-[0.4rem]">Hộp giấy trắng</span>
                </div>
                <button className="next-slide right-0" onClick={(e) => clickSlideBtn(e)} />
            </div>
        </div>
    );
}

export default SlideCategory;
