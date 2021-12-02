import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ReactHtmlParser from "react-html-parser";
import "./style.css";
import { getListProduct } from "../../../../../../redux/ListProduct/action";
function Right() {
    const [id, setId] = useState(2);
    const [address, setAddress] = useState([
        {
            id: 4,
            title: "All",
        },
        {
            id: 1,
            title: "Thanh Xuân",
        },
        {
            id: 3,
            title: "Tổ Chức sự kiện",
        },
        {
            id: 2,
            title: "Gia Đình",
        },
        {
            id: 5,
            title: "Hoàn Kiếm",
        },
    ]);
    const [infoAddress, setInfoAddress] = useState([{

        id: 1,
        img: "",
        title: '',
    }])
    const dispatch = useDispatch()
    const { dataListProduct } = useSelector(state => state.ListReducer)
    console.log("aaaa", dataListProduct);
    useEffect(() => {

        dispatch(getListProduct({

            id: id
        }))
    }, [dispatch])

    const onsubmit = (id) => {
        setId(id)
        dispatch(getListProduct({ id }))
    }

    return (
        <div className="wraper-right">
            <div className="wraper-address">
                {address.map((item, index) => (
                    <div
                        key={index}
                        style={{ borderBottom: item.id === id ? "3px solid #2AA0F5" : "" }}
                        onClick={() => onsubmit(item.id)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <div>
                {dataListProduct && dataListProduct.length > 0 ? dataListProduct.map((item, index) => (
                    <>
                        {(index + 1) % 2 !== 0 ? (
                            <div className="info-address" key={index}>
                                <div className="info-left">
                                    <div>{index + 1}</div>
                                </div>
                                <div className="img-news"><img src="/images/pexels-rachel-claire-4825701.jpg" /></div>
                                <div className='content-address'>
                                    <h2>{item.title.rendered}</h2>
                                    <div>
                                        {ReactHtmlParser(item.content.rendered)}
                                    </div>
                                    <Link to={`/chi-tiet/${item.slug}`}><span>Đọc thêm <AiOutlineArrowRight /></span></Link>
                                </div>
                            </div>) : (<div className="info-address  info-address-2" key={index}>

                                <div className="info-left">
                                    <div>{index + 1}</div>
                                </div>
                                {item.acf && item.acf !== undefined && item.acf !== null ? <div className="img-news img-new-2"><img src={`${item.acf.img1.url}`} /></div> : 0}

                                <div className='content-address'>
                                    <h2>{item.title.rendered}</h2>
                                    <div>
                                        {ReactHtmlParser(item.content.rendered)}
                                    </div>
                                    <Link to={`/chi-tiet/${item.slug}`}><span>Đọc thêm <AiOutlineArrowRight /></span></Link>
                                </div>
                            </div>)}
                    </>
                )) : (<>
                    <div className="info-address">
                        <div className="info-left">
                            <div>1</div>
                        </div>
                        <div className="img-news"><img src="/images/pexels-rachel-claire-4825701.jpg" /></div>
                        <div className='content-address'>
                            <h2>Cộng Cà Phê </h2>
                            <div>Đối với những bạn trẻ yêu thích ra quán cafe "chém gió" với bạn bè thì chắc hẳn Cộng Cà Phê là một địa điểm không mấy xa lạ. Cộng Cà Phê ra đời từ năm 2007, với khởi nguồn là một quán nước nhỏ trên phố Triệu Việt Vương ở Hà Nội - nơi nổi tiếng với những quán "cà phê cóc" bên vỉa hè từ thời bao cấp.
                                Cộng Cà Phê được truyền cảm hứng ấy, thiết kế, trang trí và mang văn hóa bao cấp. Chữ Cộng khiến chúng ta liên tưởng tới "Cộng sản" - là hình thức của nhà nước Việt Nam lúc bấy giờ. Phong cách lạ lẫm, thú vị, hồi niệm của Cộng Cà Phê hóa ra lại thu hút giới trẻ.
                                Giới trẻ đến Cộng Cà Phê không chỉ để uống cafe mà còn để trải nghiệm không gian mang đậm màu xanh của lính, với chăn con công, phích nước Rạng Đông, chạn gỗ, Tivi hộp, cửa sổ song sắt... Đây là những thứ từng quen thuộc với chúng ta khi còn nhỏ nhưng giờ không còn nữa, khiến cho giới trẻ trở nên hoài niệm. Hiện nay, Cộng Cà Phê không chỉ có 14 địa điểm trên khắp Hà Nội mà còn có nhiều chi nhánh nhượng quyền (franchise) trên khắp cả nước, với số lượng khách là giới trẻ luôn rất đông và tấp nập.
                            </div>
                            <Link to="/chi-tiet/1"><span>Đọc thêm <AiOutlineArrowRight /></span></Link>
                        </div>
                    </div>
                    <div className="info-address info-address-2">
                        <div className="info-left">
                            <div>2</div>
                        </div>
                        <div className="img-news img-new-2"><img src="/images/cup-of-tea-cafe-amp-bistro-224289.jpg" /></div>
                        <div className='content-address'>
                            <h2> Cup Of Tea Cafe {"&"} Bistro </h2>
                            <div>Đối với những bạn trẻ yêu thích ra quán cafe "chém gió" với bạn bè thì chắc hẳn Cộng Cà Phê là một địa điểm không mấy xa lạ. Cộng Cà Phê ra đời từ năm 2007, với khởi nguồn là một quán nước nhỏ trên phố Triệu Việt Vương ở Hà Nội - nơi nổi tiếng với những quán "cà phê cóc" bên vỉa hè từ thời bao cấp.
                                Cộng Cà Phê được truyền cảm hứng ấy, thiết kế, trang trí và mang văn hóa bao cấp. Chữ Cộng khiến chúng ta liên tưởng tới "Cộng sản" - là hình thức của nhà nước Việt Nam lúc bấy giờ. Phong cách lạ lẫm, thú vị, hồi niệm của Cộng Cà Phê hóa ra lại thu hút giới trẻ.
                                Giới trẻ đến Cộng Cà Phê không chỉ để uống cafe mà còn để trải nghiệm không gian mang đậm màu xanh của lính, với chăn con công, phích nước Rạng Đông, chạn gỗ, Tivi hộp, cửa sổ song sắt... Đây là những thứ từng quen thuộc với chúng ta khi còn nhỏ nhưng giờ không còn nữa, khiến cho giới trẻ trở nên hoài niệm. Hiện nay, Cộng Cà Phê không chỉ có 14 địa điểm trên khắp Hà Nội mà còn có nhiều chi nhánh nhượng quyền (franchise) trên khắp cả nước, với số lượng khách là giới trẻ luôn rất đông và tấp nập.
                            </div>
                            <span>Đọc thêm <AiOutlineArrowRight /></span>
                        </div>
                    </div></>)}

            </div>
        </div>
    );
}

export default Right;
