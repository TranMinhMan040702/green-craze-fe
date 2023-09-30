import { Radio } from 'antd';
const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
};

function FilterRating() {
    return (
        <div className="filter-rating">
            <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="a">Tất cả</Radio.Button>
                <Radio.Button value="b">5 Sao {`(2,4k)`}</Radio.Button>
                <Radio.Button value="c">4 Sao {`(2,4k)`}</Radio.Button>
                <Radio.Button value="d">3 Sao {`(2,4k)`}</Radio.Button>
                <Radio.Button value="e">2 Sao {`(2,4k)`}</Radio.Button>
                <Radio.Button value="f">1 Sao {`(2,4k)`}</Radio.Button>
            </Radio.Group>
        </div>
    );
}

export default FilterRating;
