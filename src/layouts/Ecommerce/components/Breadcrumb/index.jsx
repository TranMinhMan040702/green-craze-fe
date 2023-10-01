import './breadcrumb.scss';
import { Breadcrumb } from 'antd';

function BreadCrumb({ items }) {
    return (
        <div className="breadcrumb-container bg-gray-200 py-[1.2rem] font-['Roboto'] text-[1.4rem]">
            <Breadcrumb
                className="max-w-[1200px] max-xl:w-[1024px] max-lg:w-[768px] max-md:w-[640px] max-xl:px-[2rem] mx-auto"
                items={[...items]}
            />
        </div>
    );
}

export default BreadCrumb;
