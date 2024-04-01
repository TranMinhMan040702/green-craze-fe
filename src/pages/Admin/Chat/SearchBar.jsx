import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import { useState } from 'react';

function SearchBar({ onChatClick }) {
    const [searchResult, setSearchResult] = useState([]);
    const [show, setShow] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [keyword, setKeyword] = useState('');

    const searchClick = async () => {
        setLoadingSearch(true);
        setShow(true);
        const resp = await userService.findUser({ Keyword: keyword });
        setLoadingSearch(false);
        if (!resp?.isSuccess) {
            setSearchResult([]);
        } else {
            setSearchResult(resp.data.items);
        }
    };
    const onChange = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <div class="py-5 px-2 relative">
            <Row>
                <Col span={20}>
                    <div class="w-full p-2 border-slate-400 rounded-l-lg">
                        <Input
                            onChange={onChange}
                            className="w-full border-none bg-gray-100 text-[1.6rem] py-[1rem] text-gray-800 focus:outline-none"
                            placeholder="Tìm kiếm"
                        />
                    </div>
                </Col>
                <Col span={4} className="flex justify-center items-center">
                    <div className='border rounded-lg px-[0.2rem] py-[0.4rem]'>
                        <Button className='flex justify-center items-center' type="button" onClick={searchClick}>
                            <SearchOutlined className='text-3xl'/>
                        </Button>
                    </div>
                </Col>
            </Row>
            {/* {show && (
                <div
                    class={`absolute shadow bg-white top-20 z-40 w-3/4 lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj ${
                        searchResult.length === 0 && 'h-16'
                    }`}
                >
                    <div
                        onClick={() => setShow(false)}
                        className="flex justify-end mr-2 mb-2 rounded-full cursor-pointer"
                    >
                        <svg
                            className=" w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="close"
                        >
                            <path d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z"></path>
                        </svg>
                    </div>
                    {loadingSearch ? (
                        <div>
                            <div class="flex justify-center items-center h-full">
                                <img
                                    class="h-12 w-12"
                                    src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                                    alt=""
                                />
                            </div>
                        </div>
                    ) : (
                        <div class="flex flex-col w-full">
                            {searchResult.length === 0 ? (
                                <h1>No Result</h1>
                            ) : (
                                <div>
                                    {searchResult.map((rs) => {
                                        return <SearchItem onChatClick={onChatClick} user={rs} />;
                                    })}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )} */}
        </div>
    );
}

export default SearchBar;
