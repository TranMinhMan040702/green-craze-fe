import Item from "./Item";


function Wrapper() {
    return <div>
        <Item />
        <Item isLastItem={true}/>
    </div>
}

export default Wrapper;