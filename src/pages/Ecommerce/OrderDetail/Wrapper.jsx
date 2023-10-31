import Item from "./Item";


function Wrapper({orderItems}) {
    return <div>
        {
            orderItems?.map((item, index) => {
                return <Item key={index} item={item} isLastItem={index === orderItems?.length - 1}/>
            })
        }
    </div>
}

export default Wrapper;