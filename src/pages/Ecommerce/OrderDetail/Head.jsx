import { faArrowLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import config from "../../../config";


function Head() {
    return <div className="flex justify-between p-[2rem] border-b-[0.1rem]">
        <NavLink to={config.routes.web.order} className="flex items-center gap-[0.3rem] text-[1.6rem] cursor-pointer hover:text-red-300 transition-all">
            <FontAwesomeIcon icon={faChevronLeft}/>
            <p className="mb-0">Trở lại</p>
        </NavLink>
        <div className="flex items-center text-[1.6rem]">
            <p className="uppercase">Mã đơn hàng 1</p>
            <span class="mx-[1.5rem] font-normal block h-[2.5rem] border-l-[0.01rem] border-gray-600"></span>
            <p className="uppercase text-rose-600">Đã giao</p>
        </div>
    </div>
}

export default Head;