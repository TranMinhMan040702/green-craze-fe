import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import InputAddedResult from './InputAddedResult';
import InputSearchResult from './InputSearchResult';

function SearchingInput({ itemList, ItemComponent, placeholder, chosenList, setChosenList }) {
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef();
    useEffect(() => {
        document.addEventListener('click', (event) => {
            const { target } = event;
            if (!searchRef?.current?.contains(target)) {
                setShowSearch(false);
            }
        });
    }, []);
    const add = (item) => {
        if (chosenList.some((x) => x.id === item.id)) return;
        setChosenList([...chosenList, item]);
    };
    const remove = (item) => {
        let newList = chosenList.filter((x) => x.id !== item.id);
        setChosenList(newList);
    };
    return (
        <div className="w-full relative ">
            <div ref={searchRef}>
                <Input
                    placeholder={placeholder}
                    onFocus={() => {
                        setShowSearch(true);
                    }}
                    prefix={<FontAwesomeIcon className="text-gray-300 mr-3" icon={faSearch} />}
                />
                {showSearch && (
                    <InputSearchResult
                        Item={ItemComponent}
                        chosenList={chosenList}
                        itemList={itemList}
                        add={add}
                    />
                )}
            </div>
            <InputAddedResult Item={ItemComponent} chosenList={chosenList} remove={remove} />
        </div>
    );
}

export default SearchingInput;
