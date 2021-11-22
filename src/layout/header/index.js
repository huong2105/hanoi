
import './style.css';
import { BiSearchAlt, BiPlusCircle } from "react-icons/bi"
import { BsPersonPlus, BsPersonCircle } from "react-icons/bs"
import { CgMail } from "react-icons/cg"
import { useState } from 'react';
import { AiOutlinePhone } from "react-icons/ai"
function Header() {
    const [input, setInput] = useState(0)

    const onsubmit = () => {

        setInput(1)
    }
    return (
        <div className="App">
            <div className="header-top">
                <div className="content-left">
                    <a href="tel:0000xxxxx"> <AiOutlinePhone />0000xxxxx</a>
                    <div>|</div>
                    <a href="mailto: abc@gmail.com"> <CgMail /> abc@gmail.com </a>

                </div>


                <a href='/dang-nhap'>
                    <div className="content-right"><BsPersonCircle/> Tài khoản  </div>
                </a>
            </div>
            <div className='infoheader'>
                <div></div>
                <span>Trang chủ</span>
                <span>Cà phê</span>
                <span>Homestay</span>
                <div className='iconheader'>
                    {input === 0 ? (null) : <input type="text" />}

                    <BiSearchAlt title='Tìm kiếm' onClick={() => onsubmit()} />
                    <a href='/dang-ky'><BsPersonPlus title='Đăng ký' /></a>
                    <BiPlusCircle title="Đăng Bài" />
                </div>
            </div>
        </div>
    );
}

export default Header;
