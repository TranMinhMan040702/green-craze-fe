import Item from "./Item";


function Wrapper(){
    return <div>
        <Item isRead/>
        <Item />
        <Item isRead/>
        <Item isRead/>
        <Item />
    </div>
}

export default Wrapper;