import Item from './Item';

function Wrapper({ orderItems, status }) {
    return (
        <div>
            {orderItems?.map((item, index) => {
                return (
                    <Item
                        key={index}
                        status={status}
                        item={item}
                        isLastItem={index === orderItems?.length - 1}
                    />
                );
            })}
        </div>
    );
}

export default Wrapper;
