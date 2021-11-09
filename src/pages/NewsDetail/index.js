import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wpGetListProduct } from '../../redux/ListProduct/action';
import ReactHtmlParser from "react-html-parser";
import "./style.css"

function PageNewsDtail() {

    const {wpdata} = useSelector(state => state.ListReducer)
    const disptach = useDispatch()
    useEffect(()=>{
        disptach(wpGetListProduct())
    }, [])
    return (
        <>
        <div className="wrapper-news-detail">
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
                    <div className="title"><h1>Marcel Chair</h1></div>
                    <div className="content">Marcel stacking chair is produced with a single injection of polypropylene reinforced with glass fibre obtained by means of the latest generation of air moulding technology with neutral tones. For indoor and outdoor use.</div>
                    <div>Địa chỉ</div>
                    <div>Ngày đăng bài</div>
                </div>
            </div>
        </div>
        <div style = {{textAlign: "left"}}>
            {wpdata && wpdata.length > 0 ? (ReactHtmlParser(wpdata[0].content.rendered)) : (null)}
            
        </div>
        </>
    );
}

export default PageNewsDtail;