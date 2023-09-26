import { faContactBook } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

function Contact() {
    return (
        <div className="contact-container h-[9rem] flex justify-end items-center">
            <button className="text-rose-600 hover:bg-rose-600 transition-all hover:text-white mr-[1.9rem] border-[0.1rem] text-[1.6rem] border-rose-600 py-[1.4rem] px-[4.1rem]">
                <FontAwesomeIcon className='text-[1.4rem] mr-[1rem]' icon={faPhone}/>
                Liên hệ người bán
            </button>
        </div>
    );
}

export default Contact;
