import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wpGetListProduct } from '../../redux/ListProduct/action';
import ReactHtmlParser from "react-html-parser";
import "./style.css"
import { useParams } from 'react-router';
import { getNewsDetail } from '../../redux/NewsDetail/action';

function PageNewsDtail() {

    const { slug } = useParams()
    const { data } = useSelector(state => state.newsDetailReducer)
    const disptach = useDispatch()
    useEffect(() => {
        disptach(getNewsDetail(slug))
    }, [])
    return (
        <>
            {data && data.length > 0 ? (<>    <div className="wrapper-news-detail">
                <div className="news-detail-top">
                    <div className="news-detail-top-left">
                        <div className="img-top-left"></div>
                        <div className="img-bottom-left">
                            <div className="img1"></div>
                            <div className="img1"></div>
                            <div className="img1"></div>
                            <div className="img1"></div>
                        </div>
                    </div>
                    <div className="news-detail-top-right">
                        <div className="title"><h1>{data[0].title.rendered}</h1></div>
                        {/* <div className="content">Marcel stacking chair is produced with a single injection of polypropylene reinforced with glass fibre obtained by means of the latest generation of air moulding technology with neutral tones. For indoor and outdoor use.</div> */}
                        <div>Địa chỉ : {data[0].acf.dia_chi}</div>
                        <div>Điện thoại : {data[0].acf.dien_thoai} </div>
                        <div>Facebook : {data[0].acf.facebook} </div>
                        <div>Ngày đăng bài : {data[0].date} </div>
                        <div>Giá tham khảo : {data[0].acf.gia_tham_khao} </div>
                        <div>Giờ mở cửa : {data[0].acf.gio_mo_cua} </div>
                    </div>
                </div>
            </div>
                <div style={{ textAlign: "left" }}>
                    {data && data.length > 0 ? (ReactHtmlParser(data[0].content.rendered)) : (null)}
                </div></>) : (null)}

        </>
    );
}

export default PageNewsDtail;