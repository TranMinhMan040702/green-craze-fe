function SearchItem({ user, onChatClick }) {
    const onClick = async () => {
        onChatClick(user);
    };
    return (
        <div class=" w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
            <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                <div class="w-6 flex flex-col items-center">
                    <div class="flex relative bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                        <img class="rounded-full" alt="" src={user?.avatar} />
                    </div>
                </div>
                <div class="w-full items-center flex">
                    <div class="mx-2 -mt-1 text-left">{`${user?.firstName} ${user?.lastName}`}</div>
                </div>
                <button
                    onClick={onClick}
                    className="bg-white border text-black p-1 rounded-lg w-24 hover:bg-purple-500 hover:text-white transition-all "
                >
                    Chat
                </button>
            </div>
        </div>
    );
}
export default SearchItem;
