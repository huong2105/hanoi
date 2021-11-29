import React, { useState } from 'react';
import "./style.css"
import { useSelector, useDispatch } from 'react-redux';
import { getListProduct } from '../../../../../../redux/ListProduct/action';
function Left() {

    const [Categories, setCategories] = useState([
        {
            id: 4,
            title: 'All'
        },
        {
            id: 2,
            title: 'Quán Acoustic'
        },
        {
            id: 3,
            title: 'View Làm Việc'
        },
        {
            id: 1,
            title: 'Tổ Chức Sự Kiện'
        },
        {
            id: 5,
            title: 'Gia Đình'
        },
    ])
    
    const dispatch = useDispatch()
    const [id, setId] = useState(1)
    const onSubmit = (id) => {

        setId(id)
    
    }
    return (
        <div className='product-left'>
            <div className='categori'>
                <p>Categories</p>
                <div>
                    {Categories.map((item, index) => (

                        <div className='title'
                            style={{ color: item.id === id ? "#2AA0F5" : "" }}
                            onClick={() => onSubmit(item.id)}>{item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Left;